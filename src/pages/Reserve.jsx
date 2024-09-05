import React, { useEffect } from "react";
import Head from "../components/Head";
import { Chip, Typography } from "@mui/material";
import Seocho from "../assets/img/seocho04.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Divider from "@mui/material/Divider";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Reserve = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Head />
      <Divider />
      <img src={Seocho} alt="Seocho" style={{ width: "100%", height: "268px" }} />
      <KeyboardArrowLeftIcon
        style={{
          position: "relative",
          left: "10px",
          bottom: "265px",
          color: "white",
        }}
      />
      <BodyWrapp>
        <CardWrapp>
          <Chip
            label="서초구"
            style={{
              backgroundColor: "#e3f2fd",
              color: "#2196f3",
              width: "50px",
              height: "20px",
              borderRadius: "4px",
              fontSize: "10px",
            }}
          />
          <Typography style={{ fontFamily: "Pretendard-SemiBold", fontSize: "21px" }}>
            서초 스마트 워크센터
            <FavoriteBorderIcon style={{ position: "relative", left: "134px" }} />
          </Typography>
          <Typography style={{ fontSize: "15px" }}>
            서울특별시 서초구 바우뫼로 6길 57
            <br />
            대한결핵협회 별관 1층
          </Typography>
        </CardWrapp>
      </BodyWrapp>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab
          label="시설정보"
          {...a11yProps(0)}
          style={{ width: "180px", fontFamily: "Pretendard-SemiBold", fontSize: "15px" }}
        />
        <Tab
          label="위치안내"
          disabled
          {...a11yProps(1)}
          style={{ width: "180px", fontFamily: "Pretendard-SemiBold", fontSize: "15px" }}
        />
      </Tabs>
      <BodyWrapp>
        <Typography
          style={{
            fontFamily: "Pretendard-SemiBold",
            fontSize: "17px",
            marginBottom: "5px",
            marginTop: "20px",
          }}
        >
          시설정보
        </Typography>
        <Typography style={{ fontSize: "15px" }}>
          운영시간 &emsp;평일 08:30~19:00
          <br />
          &emsp;&emsp;&emsp;&emsp;&nbsp; (점심시간 12:00~13:00)
        </Typography>
        <Typography style={{ fontSize: "15px" }}>전화번호 &emsp;02-529-4834</Typography>
        <Alert
          severity="info"
          style={{
            marginTop: "10px",
            borderRadius: "8.67px",
            height: "46px",
            display: "flex",
            alignItems: "center",
            color: "#2196f3",
          }}
        >
          <AlertTitle
            style={{
              fontSize: "13px",
              fontFamily: "pretendard-Medium",
              marginTop: "5px",
              color: "#4A90E2",
            }}
          >
            법정 공휴일은 휴무입니다.
          </AlertTitle>
        </Alert>
        <Alert
          severity="info"
          style={{
            marginTop: "10px",
            borderRadius: "8.67px",
            height: "66px",
            display: "flex",
            color: "#2196f3",
          }}
        >
          <AlertTitle
            style={{ fontSize: "13px", fontFamily: "pretendard-Medium", color: "#4A90E2" }}
          >
            점심시간에 지원이 어려우므로 사전에 연락하여 출입안내 받으시기 바랍니다.
          </AlertTitle>
        </Alert>
        <Typography
          style={{
            fontFamily: "Pretendard-SemiBold",
            fontSize: "15px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          업무환경
        </Typography>
        <Typography style={{ fontSize: "15px" }}>
          업무공간: PC, 망연계솔루션, 복합기, 파쇄기
          <br />
          회의공간: 영상회의시스템
          <br />
          휴게공간: 냉장고, 음수대
        </Typography>
        <Typography
          style={{ fontSize: "17px", fontFamily: "pretendard-SemiBold", marginTop: "50px" }}
        >
          공간선택
        </Typography>
        <Typography style={{ fontSize: "15px", fontFamily: "pretendard-Medium" }}>
          날짜를 선택해주세요
        </Typography>
      </BodyWrapp>

      <Button
        variant="contained"
        style={{
          width: "135px",
          height: "56px",
          backgroundColor: "#4A90E2",
          position: "relative",
          left: "214px",
          bottom: "50px",
        }}
      >
        <Link to="/CheckReserve" style={{ textDecoration: "none", color: "white" }}>
          예약하기
        </Link>
      </Button>
    </div>
  );
};

const CardWrapp = styled.div`
  display: flex;
  flex-direction: column;
`;

const BodyWrapp = styled.div`
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 5px;
`;

export default Reserve;
