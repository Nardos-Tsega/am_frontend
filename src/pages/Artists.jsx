import ArtistCard from "../Components/ArtistCard";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getArtistsFetch } from "../features/artists/artistsSlice";

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

export default function Artists() {
  const artists = useSelector((state) => state.artists.artists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistsFetch());
  }, [dispatch]);

  return (
    <Layout>
      <Title>Artists</Title>
      <Body>
        {artists.map((artist) => (
          <ArtistCard artist={artist} />
        ))}
      </Body>
    </Layout>
  );
}
