import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import SubMenu from "./SubMenu";
import "bootstrap/dist/css/bootstrap.min.css";

const NavTop = styled.div`
  background: #fff5e6 ;
  height: 7.5vh;
  width: 100vw;
  display: flex;
  text-align: center;
  justify-content: flex-start;
  align-items: center;
  color: black;
  font-size: 35px;
  font-family: Brush Script MT, Brush Script Std, cursive;

`;

const Icon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
`;

const SideBarNav = styled.nav`
  background: #fff5e6 ;
  height: 100vh;
  width: 175px;
  display: flex;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 250ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(true);

  const hideSideBar = () => setSidebar(false);

  return (
    <>
      <NavTop>
        <Icon to="#">
          <AiIcons.AiOutlineMenu onClick={showSideBar} />
        </Icon>
        <div>LACC - Luiza Andaluz Centro de Conhecimento</div>
      </NavTop>
      <SideBarNav sidebar={sidebar}>
        <SidebarWrap>
          <Icon to="#">
            <AiIcons.AiOutlineClose onClick={hideSideBar} />
          </Icon>
          {SideBarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SideBarNav>
    </>
  );
};

export default SideBar;
