// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!->루트 컴포넌트
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom"

//

import { Main } from "./pages/Main";
import { Layout } from "./layout/Layout";
import { Sub1Petsochic } from "./pages/Sub1Petsochic";
import { Sub2Maxbone } from "./pages/Sub2Maxbone";
import { Sub3MilkNPepper } from "./pages/Sub3MilkNPepper";
import { Sub5Outdoor } from "./pages/Sub5Outdoor";
import { Sub6Indoor } from "./pages/Sub6Indoor";
import { Sub7Cotielog } from "./pages/Sub7Cotielog";
import { Sub8Store } from "./pages/Sub8Store";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 중요!!! 레이아웃 컴포넌트를 루트로 설정! */}
        <Route path="/" element={<Layout />}>
          {/* 하위 라우트 셋팅 
          - path대신 index만 쓰면 첫페이지로 로딩함! 
          -> path는 Layout의 Link to="/" 에 해당하는 셋팅*/}
          <Route index element={<Main />} />
          <Route path="sub1" element={<Sub1Petsochic />} />
          <Route path="sub2" element={<Sub2Maxbone />} />
          <Route path="sub3" element={<Sub3MilkNPepper />} />
          <Route path="sub5" element={<Sub5Outdoor />} />
          <Route path="sub6" element={<Sub6Indoor />} />
          <Route path="sub7" element={<Sub7Cotielog />} />
          <Route path="sub8" element={<Sub8Store />} />       
        </Route>
      </Routes>
    </BrowserRouter>
  );
} ///////////// App 컴포넌트 ///////////////////

// 컴포넌트 출력 //////////
// 먼저 root객체만들고
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render메서드로 출력
root.render(<App />);
