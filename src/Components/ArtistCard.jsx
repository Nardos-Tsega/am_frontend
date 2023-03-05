import styled from "styled-components";

const Card = styled.div`
  width: 25%;
  border-radius: 6px;
  background-image: url("https://images.unsplash.com/photo-1618609377864-68609b857e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80");
  background-size: cover;
  padding: 24px;
  height: 6rem;
`;

const Label = styled.p`
  color: white;
  font-size: 22px;
  margin-top: 30%;
  font-weight: bold;
  line-height: 0;
`;

const Number = styled.p`
  color: white;
  font-size: 10px;
  font-weight: light;
  line-height: 0;
  margin-top: 12px;
`;

export default function ArtistCard({ artist }) {
  return (
    <Card>
      <Label>{artist.name}</Label>
      <Number>
        {artist.songs} Albums | {artist.albums} Songs
      </Number>
    </Card>
  );
}
