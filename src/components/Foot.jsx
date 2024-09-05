import React from "react";
import styled from "styled-components";
import Logo from "../assets/img/logo_2.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Typography } from "@mui/material";

const Foot = () => {
  return (
    <Footer style={{ backgroundColor: "#F0F7FF" }}>
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
          <Typography
            style={{
              color: "black",
              fontFamily: "Pretendard-Medium",
              fontSize: "13px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            1577-9375
          </Typography>
          고객센터 운영시간
          <Typography
            style={{
              color: "black",
              fontFamily: "Pretendard-Medium",
              fontSize: "13px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            10:00~18:00 (주말, 공휴일 휴무)
          </Typography>
          <YouTubeIcon style={{ color: "#4A90E2" }} />
          <InstagramIcon style={{ color: "#4A90E2" }} />
        </InfoWrapp>
      </AllInfoWrapp>
    </Footer>
  );
};

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #f0f7ff;
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
  font-size: 13px;
  margin-bottom: 10px;
`;
const CopyWrapp = styled.div`
  font-size: 10px;
  color: #8e8e8e;
  margin-bottom: 10px;
`;

const UseWrapp = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const InfoWrapp = styled.div`
  font-size: 10px;
  color: #8e8e8e;
`;

export default Foot;
