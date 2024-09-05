import React from "react";
import styled from "styled-components";
import Logo from "../assets/img/logo_2.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Foot = () => {
  return (
    <Footer style={{ backgroundColor: "#e3f2fd" }}>
      <LogoWrapp>
        <LogoImg src={Logo} alt="Logo" />
        <br />
      </LogoWrapp>
      <AllInfoWrapp>
        <Locationwrapp>
          서울특별시 서초구 서초대로 48길 54
          <br />
          info@hulanet.com
        </Locationwrapp>
        <CopyWrapp>Copyright ⓒ.2024 hulanet All rights reserved.</CopyWrapp>
        <UseWrapp>이용안내 이용약관 개인정보처리방침 자주묻는 질문</UseWrapp>
        <InfoWrapp>
          대표번호
          <h4 style={{ color: "black" }}>1577-9375</h4>
          고객센터 운영시간
          <h4 style={{ color: "black" }}>10:00~18:00 (주말, 공휴일 휴무)</h4>
          <YouTubeIcon style={{ color: "#42a5f5" }} />
          <InstagramIcon style={{ color: "#42a5f5" }} />
        </InfoWrapp>
      </AllInfoWrapp>
    </Footer>
  );
};

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #e3f2fd;
`;

const LogoWrapp = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
`;

const LogoImg = styled.img`
  width: auto;
  height: 45px;
  margin-right: 70px;
`;

const AllInfoWrapp = styled.div`
  max-width: 328px;
  margin-left: 16px;
`;
const Locationwrapp = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;
const CopyWrapp = styled.div`
  font-size: 12px;
  color: #bdbdbd;
  margin-bottom: 10px;
`;

const UseWrapp = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const InfoWrapp = styled.div`
  font-size: 14px;
  color: #bdbdbd;
`;

export default Foot;
