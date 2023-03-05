import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  column-gap: 4px;
  margin-left: 4px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 48px;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Header />
        {children}
      </Content>
    </Container>
  );
}
