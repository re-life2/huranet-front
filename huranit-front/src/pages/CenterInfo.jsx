import React from "react";
import Head from "../components/Head";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Divider, Typography } from "@mui/material";
import styled from "styled-components";
import Foot from "../components/Foot";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import Card1 from "../assets/img/card01.png";
import Card2 from "../assets/img/card02.png";
import Card3 from "../assets/img/card03.png";

const CenterInfo = () => {
  return (
    <div>
      <Head />
      <BodyWrapp style={{ marginTop: "30px" }}>
        <CheckCircleIcon
          sx={{
            fontSize: "52px",
          }}
          style={{ margin: "auto", display: "block" }}
        />
        <Typography
          style={{ fontFamily: "NanumSquareNeoBold", marginTop: "20px", textAlign: "center" }}
        >
          스마트 워크센터 예약이 완료되었습니다
        </Typography>
        <Button
          variant="outlined"
          style={{
            marginRight: "20px",
            marginLeft: "40px",
            marginTop: "10px",
            marginBottom: "80px",
          }}
        >
          홈으로 가기
        </Button>
        <Button
          variant="contained"
          style={{
            marginTop: "10px",
            marginBottom: "80px",
          }}
        >
          예약내역 보기
        </Button>
      </BodyWrapp>
      <Divider />
      <BodyWrapp style={{ marginTop: "20px" }}>
        <Typography style={{ fontFamily: "NanumSquareNeoBold" }}>
          서울시여성가족재단에서 운영하는 <br />돌봄서비스를 이용해보세요!
        </Typography>
        <Typography style={{ fontSize: "14px", marginTop: "10px" }}>
          양육자의 돌봄 및 일생활 균형을 지원하고 어린이, 양육자를 포함한 가족 모두를 위한
          공간입니다.
        </Typography>
        <Typography style={{ color: "#42a5f5", marginTop: "20px", marginBottom: "30px" }}>
          <Link to="/SeoulPlaza" style={{ textDecoration: "none", color: "#2196f3" }}>
            서울가족플라자 살펴보기
            <ChevronRightIcon style={{ color: "#42a5f5", position: "absolute" }} />
          </Link>
        </Typography>
      </BodyWrapp>
      <BackgroundWrapper>
        <Typography style={{ fontFamily: "NanumSquareNeoBold", marginTop: "20px"}}>
          더 나은 일생활 균형 및 <br />양육 친화적 문화를 위해 제공되는 <br />서울시의 유용한 사이트들을 살펴보세요
        </Typography>
        <Typography style={{ fontSize: "14px", marginTop: "10px"}}>
          클릭시 해당 페이지로 이동합니다.
        </Typography>
        <ImageWrapper>
          <img
            src={Card1}
            alt="Card 1"
            style={{ width: "330px", height: "176px", borderRadius: "8px", marginTop: "10px" }}
          />
          <img
            src={Card2}
            alt="Card 2"
            style={{ width: "330px", height: "176px", borderRadius: "8px",marginTop: "10px" }}
          />
          <img
            src={Card3}
            alt="Card 3"
            style={{ width: "330px", height: "176px", borderRadius: "8px",marginTop: "10px", marginBottom: "20px" }}
          />
        </ImageWrapper>
      </BackgroundWrapper>
      <Foot />
    </div>
  );
};

const BodyWrapp = styled.div`
  background-color: white;
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 10px;
`;

const BackgroundWrapper = styled.div`
  background-color: #e3f2fd;  
  padding: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center; 
  gap: 10px; 
  flex-wrap: wrap;
  margin-top: 20px; 
`;

export default CenterInfo;
