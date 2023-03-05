import { call, put, takeEvery } from "redux-saga/effects";
import { getStatsSuccess } from "./statsSlice";

function* WorkGetStatsFetch() {
  const stats = yield call(() => fetch("http://localhost:5000/stats"));
  const formattedStats = yield stats.json();
  yield put(getStatsSuccess(formattedStats));
}

function* statsSaga() {
  yield takeEvery("stats/getStatsFetch", WorkGetStatsFetch);
}

export default statsSaga;
