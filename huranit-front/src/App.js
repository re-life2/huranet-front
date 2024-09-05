import './App.css';
import React from "react";
import Reserve from "./pages/Reserve";
import styled from "styled-components";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CenterInfo from "./pages/CenterInfo";
import CheckReserve from "./pages/CheckReserve";
import SeoulPlaza from "./pages/SeoulPlaza";

function App() {

  return (
    <ContentWrap className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Reserve />}></Route>
          <Route path="/CenterInfo" element={<CenterInfo />}></Route>
          <Route path="/CheckReserve" element={<CheckReserve />}></Route>
          <Route path="/SeoulPlaza" element={<SeoulPlaza />}></Route>
        </Routes>
      </BrowserRouter>
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  padding: 0px;
`;


export default App;
