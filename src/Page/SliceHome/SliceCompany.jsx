import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import '../SliceHome/SliceCompany.css'
import { Link } from 'react-router-dom';
const SliceCompany = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='all'>
        <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Link to="https://www.vpbank.com.vn/ca-nhan">
        <img src="https://inkythuatso.com/uploads/images/2021/11/vpbank-logo-inkythuatso-01-10-11-16-30.jpg" alt="" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="https://tpb.vn/ca-nhan">
        <img src="https://kinhtetre.net/wp-content/uploads/2020/09/tp-bank-h%C3%A0nh-trinh-tro-thanh-ngan-hang-so-xuat-sac-nhat-viet-nam-1-e1628063273755.png" alt="" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="https://fpt.com/vi">
        <img src="https://static.ybox.vn/2021/12/4/1640230422388-MBgeas%20Life%20(7).png" alt="" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="https://shopee.vn/">
        <img src="https://i.pinimg.com/736x/4c/a1/b5/4ca1b50f8cf964d1b9ecedf009724842.jpg" alt="" /></Link>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default SliceCompany