import React, { useState, useEffect } from "react";
import Head from "../components/Head";
import Foot from "../components/Foot";
import { Typography } from "@mui/material";
import styled from "styled-components";
import Plaza from "../assets/img/plaza.png";
import PlazaCard from "../components/PlazaCard";
import axios from "axios";

const SeoulPlaza = () => {
  const [plazaData, setPlazaData] = useState([]);

  // API 호출
  useEffect(() => {
    const fetchPlazaData = async () => {
      try {
        const response = await axios.get("/api/family-plaza");
        setPlazaData(response.data);
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
            style={{ fontFamily: "NanumSquareNeoBold", color: "#42a5f5", fontSize: "30px" }}
          >
            서울가족플라자
          </Typography>
          <img src={Plaza} alt="Seoul Plaza" style={{ position: "relative", left: "100px" }} />
          <Typography style={{ fontFamily: "NanumSquareNeoBold", fontSize: "19px" }}>
            아이의 놀이와
            <br /> 돌봄은 물론 가족의 쉼까지
          </Typography>
          <Typography style={{ fontSize: "13px" }}>
            양육자가 더 나은 환경에서 일 · 가정 생활 균형을
            <br /> 맞출 수 있도록 서울가족플라자가 도와드립니다
          </Typography>
        </SloBodyWrapp>
      </SloWrapp>
      <BodyWrapp style={{ marginBottom: "20px" }}>
        {plazaData.map((plaza) => (
          <PlazaCard
            key={plaza.familyPlazaId}
            name={plaza.name}
            description={plaza.description}
            imageUrl={plaza.imageUrl}
            link={plaza.link}
          />
        ))}
      </BodyWrapp>
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

const BodyWrapp = styled.body`
  background-color: #e3f2fd;
  margin-right: 16px;
  margin-left: 16px;
  margin-botton: 10px;
`;

export default SeoulPlaza;
