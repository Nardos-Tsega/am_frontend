import GenreCard from "../Components/GenreCard";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGenresFetch } from "../features/genres/genresSlice";

const Title = styled.h1`
  color: #e66465;
`;

const Body = styled.div`
  background: white;
  border-radius: 4px;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 12px;
  border: solid 0.5px #d1d1d1;
`;

export default function Genres() {
  const genres = useSelector((state) => state.genres.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenresFetch());
  }, [dispatch]);

  return (
    <Layout>
      <Title>Genres</Title>
      <Body>
        {genres.map((genre) => (
          <GenreCard genre={genre} />
        ))}
      </Body>
    </Layout>
  );
}
