import React from "react";
import styled from "styled-components";
import Logo from "../assets/img/logo_2.png";
import MenuIcon from "@mui/icons-material/Menu";

const Head = () => {
  return (
    <Header>
      <LogoImg src={Logo} alt="Logo" />
      <MenuIcon />
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 56px;
  margin-right: 20px;
`;

const LogoImg = styled.img`
  width: auto;
  height: 45px;
  margin-right: 70px;
`;

export default Head;
