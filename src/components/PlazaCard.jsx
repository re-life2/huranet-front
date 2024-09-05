import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

const PlazaCard = ({ name, description, imageUrl, link }) => {
  return (
    <Card>
      <CardContent>
        <Typography style={{ fontFamily: "NanumSquareNeoBold" }}>{name}</Typography>
        <Typography color="text.secondary">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" style={{ backgroundColor: "#2196f3" }} href={link}>
          예약하기
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlazaCard;
