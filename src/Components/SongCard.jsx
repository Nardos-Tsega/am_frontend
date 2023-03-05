import styled from "styled-components";
import { MdDelete, MdEdit, MdPlayCircleFilled } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteSong } from "../features/songs/songsSlice";
import { useState } from "react";
import AddSong from "./AddSong";

const SongCard = styled.div`
  background: #f6f4f4;
  border-radius: 6px;
  border: 1px solid #d1d1d1;
  padding: 12px 24px;
  margin-top: 8px;
  font-size: 14px;
  color: #353d2f;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  background: #d9d9d9;
  border-radius: 100%;
  width: 12px;
  height: 12px;
  margin: 8px 8px;
  padding: 12px 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &: hover {
    background: #9198e5;
    color: white;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  row-gap: 24px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  height: 12px;
  width: 12px;
  padding: 4px;
  margin: 8px;

  &:hover {
    cursor: pointer;
  }
`;

export default function Song({ song }) {
  const dispatch = useDispatch();

  const handleSongDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSong(song._id));
    window.location.reload();
  };

  //handle updating a song

  const [updateSong, setUpdateSong] = useState(false);

  const handleCancel = () => {
    setUpdateSong(false);
  };

  const handleAdd = () => {
    setUpdateSong(true);
  };

  return (
    <SongCard>
      <IconContainer>
        <Icon>
          <MdPlayCircleFilled />
        </Icon>
        <p>{song.title}</p>
      </IconContainer>

      <IconContainer>
        <Button onClick={handleSongDelete}>
          <MdDelete size="16px" />
        </Button>
        <Button onClick={handleAdd}>
          <MdEdit size="16px" />
        </Button>
      </IconContainer>
      <AddSong song={song} visible={updateSong} handleCancel={handleCancel} />
    </SongCard>
  );
}
