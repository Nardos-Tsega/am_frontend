import Song from "../Components/SongCard";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSongsFetch } from "../features/songs/songsSlice";

const Title = styled.h1`
  color: #e66465;
`;

const Body = styled.div`
  background: white;
  border-radius: 4px;
  padding: 32px;
  border: solid 0.5px #d1d1d1;
`;

export default function Songs() {
  const songs = useSelector((state) => state.songs.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  return (
    <Layout>
      <Title>Songs</Title>
      <Body>
        {songs.map((song) => (
          <Song song={song} />
        ))}
      </Body>
    </Layout>
  );
}
