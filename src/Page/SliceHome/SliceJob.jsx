import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import '../SliceHome/SliceCompany.css'
import { Link } from 'react-router-dom';
const SliceJob = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <div className='all'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div className="img-container">
                            <Link to="https://www.kplus.vn/">
                                <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/img/bannerVSTV1.jpg" alt="" />
                            </Link>
                            <Link to="https://ames.edu.vn/">
                                <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/img/AMES-ENGLISH%20(1).jpg" alt="" />
                            </Link>
                            <Link to="https://ila.edu.vn/tieng-anh-cho-be/">
                                <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/img/ILA%20(2).jpg" alt="" />
                            </Link>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img-container">
                            <Link to="https://trans-tech.vn/vi">
                                <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/img/banner_008-940b3a3a265fbe675b4ffa144bb582a6%20(1).png" alt="" />
                            </Link>
                            <Link>
                                <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/img/img_1711-4433cf2ebcc1d862837e94c9581b13fc.jpeg" alt="" /></Link>
                            <Link>
                                <img src="https://treobangron.com.vn/wp-content/uploads/2022/09/banner-tuyen-dung-5.jpg" alt="" /></Link>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img-container">
                            <Link>
                                <img src="https://intphcm.com/data/upload/banner-tuyen-dung-so-do.jpg" alt="" /></Link>
                            <Link>
                                <img src="https://intphcm.com/data/upload/banner-tuyen-dung.jpg" alt="" /></Link>
                            <Link>
                                <img src="https://intphcm.com/data/upload/banner-tuyen-dung1.jpg" alt="" /></Link>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default SliceJob
