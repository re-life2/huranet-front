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
      <img src={Seocho} alt="Seocho" style={{ width: "100%" }} />
      <BodyWrapp>
        <CardWrapp>
          <Chip
            label="서초구"
            style={{ backgroundColor: "#e3f2fd", color: "#2196f3", width: "70px" }}
          />
          <Typography style={{ fontFamily: "NanumSquareNeoBold" }}>
            서초 스마트 워크센터
            <FavoriteBorderIcon style={{ position: "absolute", right: "340px" }} />
          </Typography>
          <Typography>
            서울특별시 서초구 바우뫼로 6길 57
            <br />
            대한결핵협회 별관 1층
          </Typography>
        </CardWrapp>
      </BodyWrapp>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="시설정보" {...a11yProps(0)} style={{ width: "180px" }} />
        <Tab label="위치안내" disabled {...a11yProps(1)} style={{ width: "180px" }} />
      </Tabs>
      <BodyWrapp>
        <Typography style={{ fontFamily: "NanumSquareNeoBold", marginBottom: "5px" }}>
          시설정보
        </Typography>
        <Typography>
          운영시간 &emsp;평일 08:30~19:00
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp; (점심시간 12:00~13:00)
        </Typography>
        <Typography>전화번호 &emsp;02-529-4834</Typography>
        <Alert severity="info" style={{ marginTop: "10px", borderRadius: "15px" }}>
          <AlertTitle>법정 공휴일은 휴무입니다.</AlertTitle>
        </Alert>
        <Alert severity="info" style={{ marginTop: "10px", borderRadius: "15px" }}>
          <AlertTitle>
            점심시간에 지원이 어려우므로 사전에 연락하여 출입아내 받으시기 바랍니다.
          </AlertTitle>
        </Alert>
        <Typography
          style={{ fontFamily: "NanumSquareNeoBold", marginBottom: "10px", marginTop: "20px" }}
        >
          업무환경
        </Typography>
        <Typography>
          업무공간: PC, 망연계솔루션, 복합기, 파쇄기
          <br />
          회의공간: 영상회의시스템
          <br />
          휴게공간: 냉장고, 음수대
        </Typography>
      </BodyWrapp>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#2196f3",
          marginTop: "10px",
          marginBottom: "5px",
          left: "250px",
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
  margin-top: 10px;
  margin-bottom: 5px;
`;

export default Reserve;
