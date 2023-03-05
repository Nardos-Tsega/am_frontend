import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "../pages/Albums";
import { useDispatch } from "react-redux";
import { postSong, updateSong } from "../features/songs/songsSlice";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: linear-gradient(to left, #9198e566, #e6646566);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background: linear-gradient(to left, #9198e5, #e66465);
  padding: 12px 32px;
  border-radius: 22px;
  border: none;
  font-size: 14px;
  weight: normal;
  color: white;
  margin-top: 16px;
`;

const Modal = styled.div`
  background: white;
  padding: 24px 24px;
  border-radius: 6px;
  width: 40%;'
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Field = styled.input`
  padding: 12px 16px;
  width: 92%;
  border: 0.5px solid #9198e5;
  border-radius: 4px;
  color: #9198e5;
  margin-top: 6px;
`;

const SecondaryButton = styled.button`
  padding: 12px 24px;
  border-radius: 22px;
  border: none;
  font-size: 14px;
  weight: normal;
  color: white;
  margin-top: 16px;
  background: #d1d1d1;
  margin-left: 18px;
`;

const AddSong = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(props.song ? props.song.title : "");
  const [artist, setArtist] = useState(props.song ? props.song.artist : "");
  const [album, setAlbum] = useState(props.song ? props.song.album : "");
  const [genre, setGenre] = useState(props.song ? props.song.genre : "");

  if (!props.visible) {
    return null;
  }

  const data = { title, artist, album, genre };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(postSong(data));
    setTitle("");
    setArtist("");
    setAlbum("");
    setGenre("");
    window.location.reload();
  };

  const updatedSong = { id: props.song._id, title, artist, album, genre };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateSong(updatedSong));
    setTitle("");
    setArtist("");
    setAlbum("");
    setGenre("");
    window.location.reload();
  };

  return (
    <Overlay onClick={props.handleCancel}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <div>
          <Title>Add new song</Title>
        </div>
        <Field
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <Field
          id="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          type="artist"
          placeholder="Artist"
        />
        <Field
          id="album"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          type="album"
          placeholder="Album"
        />
        <Field
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          type="genre"
          placeholder="Genre"
        />
        <div>
          <Button onClick={handleUpdate}>Add Song</Button>
          <SecondaryButton onClick={props.handleCancel}>Cancel</SecondaryButton>
        </div>
      </Modal>
    </Overlay>
  );
};

export default AddSong;
