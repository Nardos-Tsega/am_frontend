import { useState } from "react";
import styled from "styled-components";
import AddSong from "../Components/AddSong";
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const Button = styled.button`
  background: linear-gradient(to left, #9198e5, #e66465);
  padding: 12px 24px;
  border-radius: 22px;
  border: none;
  font-size: 14px;
  weight: normal;
  color: white;
  margin-top: 16px;
`;
export default function Header() {
  const [addSong, setAddSong] = useState(false);

  const handleCancel = () => {
    setAddSong(false);
  };

  const handleAdd = () => {
    setAddSong(true);
  };
  return (
    <Container>
      <Button onClick={handleAdd}>Add Song</Button>

      <AddSong visible={addSong} handleCancel={handleCancel} />
    </Container>
  );
}
