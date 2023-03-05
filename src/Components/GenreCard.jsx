import styled from "styled-components";

const Card = styled.div`
  width: 26%;
  border-radius: 6px;
  background-image: url("https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
  background-size: cover;
  padding: 24px;
  height: 5rem;
`;

const Label = styled.p`
  color: white;
  font-size: 26px;
  margin-top: 25%;
  font-weight: bold;
  line-height: 0;
`;

const Number = styled.p`
  color: white;
  font-size: 14px;
  line-height: 0;
`;

export default function GenreCard({ genre }) {
  return (
    <Card>
      <Label>{genre.genre}</Label>
      <Number>{genre.songs} Songs</Number>
    </Card>
  );
}
