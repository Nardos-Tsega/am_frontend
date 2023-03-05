import { call, put, takeEvery } from "redux-saga/effects";
import { getGenresSuccess } from "./genresSlice";

function* WorkGetGenresFetch() {
  const genres = yield call(() => fetch("http://localhost:5000/genres"));
  const formattedGenres = yield genres.json();
  yield put(getGenresSuccess(formattedGenres));
}

function* genresSaga() {
  yield takeEvery("genres/getGenresFetch", WorkGetGenresFetch);
}

export default genresSaga;
