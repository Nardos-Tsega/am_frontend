import styled from "styled-components";

const Card = styled.div`
  width: 40%;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 32px;
  background: linear-gradient(to left, #9198e5, #e66465);
  padding: 14px 26px;
`;

const Image = styled.div`
  background: url("https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
  border-radius: 3px;
  width: 16px;
  height: 16px;
  margin: 0 4px;
  padding: 12px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 10px;
`;

const Label = styled.p`
  color: white;
  font-size: 14px;
  line-height: 0;
`;

const Number = styled.p`
  color: white;
  font-size: 10px;
  line-height: 0;
`;

export default function AlbumCard({ album }) {
  return (
    <Card>
      <Image />
      <Cont>
        <Div>
          <Label>{album.album}</Label>
          <Number>{album.artist}</Number>
        </Div>
        <Number>{album.songs} Songs</Number>
      </Cont>
    </Card>
  );
}
