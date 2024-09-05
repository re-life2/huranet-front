import React from "react";
import Head from "../components/Head";
import { Card, CardContent, TextField, Typography } from "@mui/material";
import InfoCard from "../components/InfoCard";
import styled from "styled-components";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CheckReserve = () => {
  const email = [
    {
      value: "gmail",
      label: "gmail.com",
    },
    {
      value: "naver",
      label: "naver.com",
    },
  ];

  const company = [
    {
      value: "02",
      label: "02",
    },
    {
      value: "070",
      label: "070",
    },
  ];

  const phone = [
    {
      value: "010",
      label: "010",
    },
    {
      value: "011",
      label: "011",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Head />
      <BodyWrapp>
        <Typography
          style={{ fontFamily: "Pretendard-SemiBold", marginBottom: "20px", fontSize: "21px" }}
        >
          예약확인
        </Typography>
        <Typography
          style={{ marginBottom: "5px", fontFamily: "Pretendard-SemiBold", fontSize: "17px" }}
        >
          시설정보
        </Typography>
        <InfoCard />
        <Typography style={{ marginTop: "10px", fontFamily: "Pretendard-SemiBold" }}>
          업무공간
        </Typography>
        <Typography style={{ fontSize: "15px" }}>좌석 14</Typography>
        <Typography style={{ marginTop: "5px", fontFamily: "Pretendard-SemiBold" }}>
          예약날짜
        </Typography>
        <Typography tyle={{ fontSize: "15px" }}>2024년 9월 10일</Typography>
        <Alert
          severity="info"
          style={{
            marginTop: "10px",
            borderRadius: "8.67px",
            height: "46px",
            display: "flex",
            alignItems: "center",
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
            강소기업 재직자만 예약이 가능합니다.
          </AlertTitle>
        </Alert>
        <Alert
          severity="info"
          style={{
            marginTop: "10px",
            borderRadius: "8.67px",
            height: "46px",
            display: "flex",
            alignItems: "center",
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
            14세미만의 미성년자는 예약이 불가능합니다.
          </AlertTitle>
        </Alert>
      </BodyWrapp>
      <Divider style={{ marginTop: "15px" }} />
      <BodyWrapp>
        <Typography
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: "17px",
            fontFamily: "Pretendard-SemiBold",
          }}
        >
          신청자 정보
        </Typography>
        <Typography
          style={{ fontFamily: "Pretendard-SemiBold", marginBottom: "5px", fontSize: "15px" }}
        >
          기관명*
        </Typography>
        <TextField size="small" style={{ marginBottom: "10px", width: "303px" }} />
        <Typography
          style={{ fontFamily: "Pretendard-SemiBold", marginBottom: "5px", fontSize: "15px" }}
        >
          부서명*
        </Typography>
        <TextField size="small" style={{ marginBottom: "10px", width: "303px" }} />
        <Typography
          style={{ fontFamily: "Pretendard-SemiBold", marginBottom: "5px", fontSize: "15px" }}
        >
          성명*
        </Typography>
        <TextField size="small" style={{ marginBottom: "10px", width: "303px" }} />
        <Typography
          style={{ fontFamily: "Pretendard-SemiBold", marginBottom: "5px", fontSize: "15px" }}
        >
          이메일*
        </Typography>
        <TextField style={{ width: "143px", marginBottom: "10px" }} size="small" />@
        <TextField select size="small" style={{ width: "143px" }}>
          {email.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Typography style={{ fontFamily: "NanumSquareNeoBold", marginBottom: "5px" }}>
          연락처(사무실)
        </Typography>
        <TextField size="small" select style={{ width: "90px", marginBottom: "10px" }}>
          {company.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        &nbsp;-&nbsp;
        <TextField size="small" style={{ width: "90px" }} />
        &nbsp;-&nbsp;
        <TextField size="small" style={{ width: "90px" }} />
        <Typography style={{ fontFamily: "NanumSquareNeoBold", marginBottom: "5px" }}>
          연락처(휴대폰)*
        </Typography>
        <TextField select size="small" style={{ width: "90px", marginBottom: "10px" }}>
          {phone.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        &nbsp;-&nbsp;
        <TextField size="small" style={{ width: "90px" }} />
        &nbsp;-&nbsp;
        <TextField size="small" style={{ width: "90px" }} />
        <Alert
          severity="info"
          style={{
            marginTop: "10px",
            borderRadius: "8.67px",
            height: "46px",
            display: "flex",
            alignItems: "center",
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
            예약승인결과와 예약번호가 입력하신 휴대폰 번호로 발송됩니다.
          </AlertTitle>
        </Alert>
        <Card style={{ marginTop: "15px", backgroundColor: "#f5f5f5" }}>
          <CardContent>
            제1조(개인정보 수집 항목 및 목적) <br />
            <br />
            1. 스마트워크센터 예약시스템은 회의실 문의 및 예약 시 예약관리, 문자서비스 목적에 필요한
            최소한의 개인정보를 처리하고 있습니다.
            <br />
            2. 제1항에 대한 사항은 관련 홈페이지에 게재하여 정보주체가 확인할 수 있도록 안내를 하고
            있습니다. <br />
            <br />
            제2조(개인정보 처리 및 보유기간) <br />
            <br />
            1. 국책연구기관 스마트워크센터 예약시스템에서 처리하는 개인정보는 수집·이용 목적으로
            명시한 범위 내에서 처리하며, 개인정보보호법 및 관련 법령에서 정하는 보유기간을 준용하여
            이행하고 있습니다. <br />
            2. 각각의 개인정보 처리 및 보유기간은 다음과 같습니다. 국책연구기관 스마트워크센터
            예약시스템를 통해 수집·보유하고 있는 주요 개인정보파일을 안내하고 있습니다.
          </CardContent>
        </Card>
        <FormControlLabel required control={<Checkbox />} label="개인정보 제공에 동의합니다." />
        <Card style={{ marginTop: "15px", backgroundColor: "#f5f5f5" }}>
          <CardContent>
            제3조(개인정보의 제3자 제공)
            <br />
            <br />
            1. 국책연구기관 스마트워크센터 예약시스템은 원칙적으로 정보주체의 개인정보를 수집ㆍ이용
            목적으로 명시한 범위 내에서 처리하며, 다음의 경우를 제외하고는 정보주체의 사전 동의
            없이는 본래의 목적 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다. 다만,
            제5호부터 제9호까지는 공공기관의 경우로 한정합니다.
            <br />
            <br />
            ① 정보주체로부터 별도의 동의를 받는 경우
            <br />
            ② 다른 법률에 특별한 규정이 있는 경우
            <br />
            ③ 정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전
            동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의
            이익을 위하여 필요하다고 인정되는 경우
            <br />④ 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서
          </CardContent>
        </Card>
        <FormControlLabel
          required
          control={<Checkbox />}
          label="개인정보 제3자 제공에 동의합니다."
        />
      </BodyWrapp>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#4A90E2",
          marginTop: "10px",
          marginBottom: "10px",
          left: "16px",
          width: "333px",
          height: "56px",
          fontFamily: "Pretendard-Medium",
          fontSize: "15px",
        }}
        onClick={handleClickOpen}
      >
        예약하기
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ borderRadius: "17px" }}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ fontFamily: "Pretendart-SemiBold", fontSize: "19px" }}
        >
          귀하는 현재 양육중이신가요?
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ fontSize: "15px", fontFamily: "pretendard-Medium" }}
          >
            맞춤 혜택을 받아보세요
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            style={{
              marginTop: "10px",
              marginBottom: "5px",
            }}
          >
            <Link
              to="/CenterInfo"
              style={{ textDecoration: "none", color: "#4A90E2", width: "70px" }}
            >
              아니요
            </Link>
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#4A90E2",
              marginTop: "10px",
              marginBottom: "5px",
            }}
          >
            <Link
              to="/CenterInfo"
              style={{ textDecoration: "none", color: "white", width: "150px" }}
            >
              네, 양육자입니다
            </Link>
          </Button>
        </DialogActions>
        <FormControlLabel
          control={<Checkbox />}
          style={{
            color: "#00000099",
            fontSize: "13px",
            fontFamily: "Pretendard-Medium",
            marginLeft: "10px",
          }}
          label="오늘 하루 표시하지 않기"
        />
      </Dialog>
    </div>
  );
};

const BodyWrapp = styled.body`
  background-color: white;
  margin-right: 16px;
  margin-left: 16px;
  margin-botton: 10px;
`;

export default CheckReserve;
