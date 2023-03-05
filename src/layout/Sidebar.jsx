import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../constants/SIDEBAR_LINKS";
import { BsCollectionPlayFill } from "react-icons/bs";
import styled from "styled-components";

const Side = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  margin-left: 12px;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  align-items: flex-start;
`;

const StyledLink = styled(Link)`
  background: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  padding: 16px 96px 16px 24px;
  border-radius: 4px;
  font-size: 14px;
  weight: normal;
  text-decoration: none;
`;

const StyledSpan = styled.span`
  color: ${(props) => (props.variant === "purple" ? "#483a7e" : "#CC3723")};
  font-size: 20px;
`;

const Sidebar = () => {
  return (
    <Side>
      <Link to="/">
        <BsCollectionPlayFill size="54" />
      </Link>
      <div>
        <StyledSpan variant="purple">addis</StyledSpan>
        <StyledSpan>Musica</StyledSpan>
      </div>

      <StyledDiv>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </StyledDiv>
    </Side>
  );
};

function SidebarLink({ item }) {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const bgColor = isActive ? "linear-gradient(to left, #9198e5, #e66465)" : "";
  const color = isActive ? "white" : " #232525";
  return (
    <StyledLink bgColor={bgColor} color={color} to={item.path}>
      {item.label}
    </StyledLink>
  );
}

export default Sidebar;
