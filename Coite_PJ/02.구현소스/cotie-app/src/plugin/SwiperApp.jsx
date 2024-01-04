// DC.com 스와이퍼 플러그인 컴포넌트 - SwiperApp.jsx

import React, { useRef, useState, Navigate, useNavigate } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/swiper.css";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 페이지네이션, 네비게이션, 자동넘김)
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export function SwiperApp() {

  // const goNav = useNavigate();

  // 불러올 이미지 리스트
  const swInfo = [
    {
      img_first: "./images/main/bird-toy.jpg",
      img_second: "./images/main/bird-toy-front.jpg",
      img_desc: "앵무새장난감",
      tit: "MILK & PEPPER",
      tit_desc: "밀크 앤 페퍼 PERROQUET 앵무새 강아지 장난감",
    },
    {
      img_first: "./images/main/Bandana-red.jpg",
      img_second: "./images/main/Bandana-red-front.jpg",
      img_desc: "반다나레드",
      tit: "MILK & PEPPER",
      tit_desc: "밀크 앤 페퍼 YAEL Bandana Rayé Rouge 야엘 줄무늬 반다나레드",
    },
    {
      img_first: "./images/main/rain-coat1.jpg",
      img_second: "./images/main/rain-coat2.jpg",
      img_desc: "야자수 레인코드",
      tit: "MILK & PEPPER",
      tit_desc: "밀크 앤 페퍼 PALOMA Palmier Orange-Kaki 팔로마 오렌지 야자수 레인코드",
    },
    {
      img_first: "./images/main/SUZANNE-Harnais1.jpg",
      img_second: "./images/main/SUZANNE-Harnais2.jpg",
      img_desc: "수잔하트 하네스",
      tit: "MILK & PEPPER",
      tit_desc: "밀크 앤 페퍼 SUZANNE Harnais 수잔 하트 하네스",
    },
    {
      img_first: "./images/main/JAYDEN-Harnais1.jpg",
      img_second: "./images/main/JAYDEN-Harnais2.jpg",
      img_desc: "제이든 그린 야자수 하네스",
      tit: "MILK & PEPPER",
      tit_desc: "밀크 앤 페퍼 JAYDEN Harnais set 제이든 그린 야자수 하네스",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {swInfo.map((v, i) => (
          <SwiperSlide key={i}>
            <div className="swiper-slide">
              <a href="#">
                <div className="imbx">
                  <img src={v.img_first} alt={v.img_desc} />
                  <img src={v.img_second} alt={v.img_desc} />
                </div>
                <div className="swiper-txt-bx">
                  <h3>{v.tit}</h3>
                  <span>{v.tit_desc}</span>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
} /////////// SwiperApp 컴포넌트 ///////////
