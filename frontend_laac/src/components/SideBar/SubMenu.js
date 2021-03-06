import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBarLink = styled(Link)`
  display: flex;
  color: e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    background: #025374;
    border-left: 4px solid #ffb71b;
    color: #ffffff;
  }
`;

const SideBarLabel = styled.span`
  margin-left: 16px;
`;

const SubMenu = ({ item }) => {
  return (
    <>
      <SideBarLink to={item.path}>
        <div>
          {item.icon}
          <SideBarLabel>{item.title}</SideBarLabel>
        </div>
      </SideBarLink>
    </>
  );
};

export default SubMenu;
