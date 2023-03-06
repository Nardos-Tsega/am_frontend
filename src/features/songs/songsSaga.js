import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import {
  deleteSongSuccess,
  updateSong,
  getSongsSuccess,
  postSong,
  postSongSuccess,
} from "./songsSlice";

function* WorkGetSongsFetch() {
  const songs = yield call(() => fetch("https://am-backend.vercel.app/songs"));
  const formattedSongs = yield songs.json();
  yield put(getSongsSuccess(formattedSongs));
}

function* workPostSong(action) {
  const response = yield call(() =>
    fetch("https://am-backend.vercel.app/songs", {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

  console.log(response);
  const isPosting = yield select((state) => state.songs.isPosting);
  if (!isPosting) {
    yield put(postSong());
    const newSong = yield response.json();
    yield put(postSongSuccess(newSong));
  }
}

function* workDeleteSong(action) {
  const response = yield call(() =>
    fetch(`https://am-backend.vercel.app/songs/${action.payload}`, {
      method: "DELETE",
    })
  );
  yield put(deleteSongSuccess(action.payload));
}

function* workUpdateSong(action) {
  const response = yield call(() =>
    fetch(`https://am-backend.vercel.app/songs/${action.payload.id}`, {
      method: "PUT",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

  const isPosting = yield select((state) => state.songs.isPosting);
  if (!isPosting) {
    yield put(updateSong());
  }
}

function* songsSaga() {
  yield takeEvery("songs/getSongsFetch", WorkGetSongsFetch);
  yield takeLatest("songs/postSong", workPostSong);
  yield takeLatest("songs/updateSong", workUpdateSong);
  yield takeEvery("songs/deleteSong", workDeleteSong);
}

export default songsSaga;
