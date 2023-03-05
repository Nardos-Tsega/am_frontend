import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import statsReducer from "../features/stats/statsSlice";
import statsSaga from "../features/stats/statsSaga";
import songsSaga from "../features/songs/songsSaga";
import songsReducer from "../features/songs/songsSlice";
import genresSaga from "../features/genres/genresSaga";
import genresReducer from "../features/genres/genresSlice";
import artistsReducer from "../features/artists/artistsSlice";
import artistsSaga from "../features/artists/artistsSaga";
import albumsReducer from "../features/albums/albumsSlice";
import albumsSaga from "../features/albums/albumsSaga";
import { all } from "redux-saga/effects";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    stats: statsReducer,
    songs: songsReducer,
    genres: genresReducer,
    artists: artistsReducer,
    albums: albumsReducer,
  },
  middleware: [saga],
});

function* rootSaga() {
  yield all([
    statsSaga(),
    songsSaga(),
    genresSaga(),
    artistsSaga(),
    albumsSaga(),
  ]);
}

saga.run(rootSaga);

export default store;
