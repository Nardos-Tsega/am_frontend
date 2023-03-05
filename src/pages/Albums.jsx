import AlbumCard from "../Components/AlbumCard";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAlbumsFetch } from "../features/albums/albumsSlice";

export const Title = styled.h1`
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
export default function Albums() {
  const albums = useSelector((state) => state.albums.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumsFetch());
  }, [dispatch]);

  return (
    <Layout>
      <Title>Albums</Title>
      <Body>
        {albums.map((album) => (
          <AlbumCard album={album} />
        ))}
      </Body>
    </Layout>
  );
}
