import { call, put, takeEvery } from "redux-saga/effects";
import { getArtistsSuccess } from "./artistsSlice";

function* WorkGetArtistsFetch() {
  const artists = yield call(() =>
    fetch("https://am-esrk.onrender.com/artists")
  );
  const formattedArtists = yield artists.json();
  yield put(getArtistsSuccess(formattedArtists));
}

function* artistsSaga() {
  yield takeEvery("artists/getArtistsFetch", WorkGetArtistsFetch);
}

export default artistsSaga;
