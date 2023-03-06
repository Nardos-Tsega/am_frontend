import { call, put, takeEvery } from "redux-saga/effects";
import { getGenresSuccess } from "./genresSlice";

function* WorkGetGenresFetch() {
  const genres = yield call(() =>
    fetch("https://am-backend.vercel.app/genres")
  );
  const formattedGenres = yield genres.json();
  yield put(getGenresSuccess(formattedGenres));
}

function* genresSaga() {
  yield takeEvery("genres/getGenresFetch", WorkGetGenresFetch);
}

export default genresSaga;
