import styled from "styled-components";

const Card = styled.div`
  background: ${(props) =>
    props.artists
      ? "linear-gradient(to left, #e66465, #d6d198)"
      : props.songs
      ? "linear-gradient(to left, #d6d198, #CC3723)"
      : props.albums
      ? "linear-gradient(to left, #9198e5, #e66465)"
      : "linear-gradient(to left, #d6d198, #E7F1C5)"};
  color: ${(props) =>
    props.artists
      ? "#483A7E"
      : props.songs
      ? "white"
      : props.albums
      ? "white"
      : "#483A7E"};
  width: 42%;
  padding: 24px 24px;
  border-radius: 6px;
  margin-top: 26px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  color: inherit;
  font-size: 16px;
  padding-left: 16px;
`;

const Number = styled.h1`
  color: inherit;
  font-size: 48px;
  font-weight: bold;
  line-height: 0;
  padding-left: 16px;
`;

export default function StatsCard(props) {
  return (
    <Card {...props}>
      <Number>{props.number}</Number>
      <Label>{props.label}</Label>
    </Card>
  );
}
