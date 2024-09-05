import React, { useState, useEffect } from "react";
import Head from "../components/Head";
import Foot from "../components/Foot";
import { Typography, Button } from "@mui/material";
import styled from "styled-components";
import Plaza from "../assets/img/plaza.png";
import axios from "axios";

const SeoulPlaza = () => {
  const [plazaData, setPlazaData] = useState([]);

  useEffect(() => {
    const fetchPlazaData = async () => {
      try {
        const response = await axios.get("http://15.165.140.141:8081/api/family-plaza");
        setPlazaData(response.data.data); 
      } catch (error) {
        console.error("Error fetching plaza data:", error);
      }
    };
    fetchPlazaData();
  }, []);

  return (
    <div>
      <Head />
      <SloWrapp>
        <SloBodyWrapp>
          <Typography style={{ color: "#bdbdbd", paddingTop: "10px" }}>
            가족 모두를 위한 열린 공간
          </Typography>
          <Typography
            style={{
              fontFamily: "NanumSquareNeoBold",
              color: "#42a5f5",
              fontSize: "30px",
            }}
          >
            서울가족플라자
          </Typography>
          <img
            src={Plaza}
            alt="Seoul Plaza"
            style={{ position: "relative", left: "100px" }}
          />
          <Typography
            style={{ fontFamily: "NanumSquareNeoBold", fontSize: "19px" }}
          >
            아이의 놀이와
            <br /> 돌봄은 물론 가족의 쉼까지
          </Typography>
          <Typography style={{ fontSize: "13px" }}>
            양육자가 더 나은 환경에서 일 · 가정 생활 균형을
            <br /> 맞출 수 있도록 서울가족플라자가 도와드립니다
          </Typography>
        </SloBodyWrapp>
      </SloWrapp>

      <BodyWrapper>
        {plazaData.map((plaza) => (
          <PlazaInfoWrapper key={plaza.familyPlazaId}>
            <img
              src={plaza.imageUrl}
              alt={plaza.name}
              style={{ width: "328px", height: "160px", borderRadius: "10px", marginBottom: "10px" }}
            />
            <TextWrapper>
              <Typography variant="h6" style={{ fontWeight: "bold", fontSize: "18px", marginTop: "10px"}}>
                {plaza.name}
              </Typography>
              <Typography style={{ fontSize: "14px", marginTop: "10px", color:"#565656" }}>{plaza.description}</Typography>
              <Typography style={{ fontSize: "12px", marginTop: "10px", color:"#717171" }}>
                <strong>연령:</strong> {plaza.age}
              </Typography>
              <Typography style={{ fontSize: "12px", marginTop: "10px", color:"#717171" }}>
                <strong>신청 방법:</strong> {plaza.applyMethod}
              </Typography>
            </TextWrapper>
            <Button
              variant="contained"
              style={{ width: "328px", height: "42px", marginTop: "10px", backgroundColor: "#4A90E2", color: "white", borderRadius: "10px" }}
            >
              자세히 보기
            </Button>
          </PlazaInfoWrapper>
        ))}
      </BodyWrapper>

      <Foot />
    </div>
  );
};

const SloWrapp = styled.div`
  background-color: #e3f2fd;
`;

const SloBodyWrapp = styled.div`
  background-color: #e3f2fd;
  margin-right: 16px;
  margin-left: 16px;
  padding-bottom: 40px;
  margin-bottom: 30px;
`;

const BodyWrapper = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  background-color: white;
  border-radius: 10px; 
`;

const PlazaInfoWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 328px;
  background-color: white;
`;

const TextWrapper = styled.div`
  width: 312px;
  margin: 0 auto;
`;

export default SeoulPlaza;
