import StatsCard from "../Components/StatsCard";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getStatsFetch } from "../features/stats/statsSlice";

const Title = styled.h1`
  color: #e66465;
`;

const Body = styled.div`
  background: white;
  border-radius: 4px;
  padding: 32px;
  border: solid 0.5px #d1d1d1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Stats() {
  const stats = useSelector((state) => state.stats.stats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatsFetch());
  }, [dispatch]);

  return (
    <Layout>
      <Title>Home</Title>
      <Body>
        <StatsCard label="Artists" artists number={stats.artists} />
        <StatsCard label="Songs" songs number={stats.songs} />
        <StatsCard label="Albums" albums number={stats.albums} />
        <StatsCard label="Genres" number={stats.genres} />
      </Body>
    </Layout>
  );
}
