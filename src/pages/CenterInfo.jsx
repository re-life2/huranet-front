import React, { useState, useEffect } from "react";
import Head from "../components/Head";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Card, Divider, Typography } from "@mui/material";
import styled from "styled-components";
import Foot from "../components/Foot";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import Kium from "../assets/img/kium.png";
import Bo from "../assets/img/bo.png";
import Mom from "../assets/img/mom.png";

const CenterInfo = () => {
  return (
    <div>
      <Head />
      <BodyWrapp style={{ marginTop: "30px" }}>
        <CheckCircleIcon
          sx={{
            fontSize: "52px",
          }}
          style={{ margin: "auto", display: "block", color: "#4A90E2" }}
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
            color: "#4A90E2",
          }}
        >
          홈으로 가기
        </Button>
        <Button
          variant="contained"
          style={{
            marginTop: "10px",
            marginBottom: "80px",
            backgroundColor: "#4A90E2",
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
          <Link to="/SeoulPlaza" style={{ textDecoration: "none", color: "#4A90E2" }}>
            서울가족플라자 살펴보기
            <ChevronRightIcon style={{ color: "#4A90E2", position: "absolute" }} />
          </Link>
        </Typography>
      </BodyWrapp>
      <ContentWrapp>
        <ConBodyWrapp>
          <Typography
            style={{
              color: "#2D2D2D",
              fontFamily: "Pretendard-SemiBold",
              fontSize: "20px",
              paddingTop: "30px",
            }}
          >
            더 나은 일 · 생활 균형 및<br />
            양육 친화적 문화를 위해 제공되는
            <br />
            서울시의 유용한 사이트들을 살펴보세요 
          </Typography>
          <Typography
            style={{
              color: "#555555",
              fontSize: "15px",
              fontFamily: "Pretendard-Medium",
              marginTop: "10",
            }}
          >
            클릭 시 해당 페이지로 연결됩니다.
          </Typography>

          <Card style={{ marginTop: "15px", padding: "10px 10px" }}>
            <Typography
              style={{ fontSize: "19px", fontFamily: "Pretendard-SemiBold", marginBottom: "10px" }}
            >
              우리동네키움포털
              <img src={Kium} alt="kium" style={{ width: "100px", marginLeft: "70px" }} />
            </Typography>

            <Typography style={{ fontSize: "15px", color: "#8E8E8E" }}>
              다양한 아이돌봄정보를 통합하여 모아놓은 곳으로 키움센터, 지역아동센터, 열린육아방 등
              아이돌봄에 관한 정보 제공 및 온라인예약 서비스까지 제공하는 사이트
            </Typography>
            <Typography style={{ fontSize: "15px", color: "#4A90E2" }}>바로가기</Typography>
          </Card>

          <Card style={{ marginTop: "15px", padding: "10px 10px" }}>
            <Typography
              style={{ fontSize: "19px", fontFamily: "Pretendard-SemiBold", marginBottom: "10px" }}
            >
              보육포털서비스
              <img
                src={Bo}
                alt="bo"
                style={{
                  position: "relative",
                  width: "100px",
                  left: "95px",
                  top: "10px",
                  height: "45px",
                }}
              />
            </Typography>

            <Typography style={{ fontSize: "15px", color: "#8E8E8E" }}>
              어린이집에 대한 정보검색과 보육서비스 제공을 위해 인터넷을 통한 실시간 조회 및
              예약등이 가능한 보육통합포털시스템
            </Typography>
            <Typography style={{ fontSize: "15px", color: "#4A90E2" }}>바로가기</Typography>
          </Card>

          <Card style={{ marginTop: "15px", padding: "10px 10px" }}>
            <Typography
              style={{ fontSize: "19px", fontFamily: "Pretendard-SemiBold", marginBottom: "10px" }}
            >
              서북권직장맘지원센터
              <img
                src={Mom}
                alt="mom"
                style={{ position: "relative", width: "100px", left: "40px" }}
              />
            </Typography>

            <Typography style={{ fontSize: "15px", color: "#8E8E8E" }}>
              직장맘이 출산과 육아기에 겪는 어려움 등 직장과 가정에서의 다양한 고충 해결을 위해
              원스톱 종합상담을 제공하는 사이트
            </Typography>
            <Typography style={{ fontSize: "15px", color: "#4A90E2" }}>바로가기</Typography>
          </Card>
        </ConBodyWrapp>
      </ContentWrapp>
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

const ContentWrapp = styled.body`
  background-color: #f0f7ff;
`;

const ConBodyWrapp = styled.div`
  margin-right: 16px;
  margin-left: 16px;
`;

export default CenterInfo;
