import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Chip from "@mui/material/Chip";

const SpaceCard = () => {
  return (
    <Card>
      <CardContent>
        <Chip label="Chip Filled" />
        <FavoriteBorderIcon />
        <ShareOutlinedIcon />
        <Typography>
          <h3>서초 스마트 워크센터</h3>
        </Typography>
        <Typography color="text.secondary">
          서울특별시 서초구 바우뫼로 6길 57 대한 결핵협회 별관 1층
        </Typography>
        <Typography color="#2196f3">#</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" style={{ backgroundColor: "#2196f3" }}>
          예약하기
        </Button>
      </CardActions>
    </Card>
  );
};

export default SpaceCard;
