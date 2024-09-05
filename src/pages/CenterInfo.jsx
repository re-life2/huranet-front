import React, { useState, useEffect } from "react";
import Head from "../components/Head";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Divider, Typography } from "@mui/material";
import styled from "styled-components";
import Foot from "../components/Foot";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

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
          서울시여성가족재단에서 운영하는 돌봄서비스를 이용해보세요!
        </Typography>
        <Typography style={{ fontSize: "14px", marginTop: "5px" }}>
          양육자의 돌봄 및 일생활 균형을 지원하고 어린이, 양육자를 포함한 가족 모두를 위한
          공간입니다.
        </Typography>
        <Typography style={{ color: "#42a5f5", marginTop: "10px", marginBottom: "30px" }}>
          <Link to="/SeoulPlaza" style={{ textDecoration: "none", color: "#2196f3" }}>
            서울가족플라자 살펴보기
            <ChevronRightIcon style={{ color: "#42a5f5", position: "absolute" }} />
          </Link>
        </Typography>
      </BodyWrapp>
      <BodyWrapp></BodyWrapp>
      <Foot />
    </div>
  );
};

const BodyWrapp = styled.body`
  background-color: white;
  margin-right: 16px;
  margin-left: 16px;
  margin-botton: 10px;
`;

export default CenterInfo;
