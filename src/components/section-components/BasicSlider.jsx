
//   render() {

//     return (
      


//     );
//   }
// }

import React from 'react'
import Slider from "react-slick";
import banner1 from '../../banner/1.jpg'
import banner2 from '../../banner/2.png'
import banner3 from '../../banner/3.png'


const BasicSlider=()=> {
        const settings = {
      dots: false,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
           <Slider {...settings}>
          <div>
    <img src={banner1} alt="" />
          </div>
          <div>
    <img src={banner2} alt="" />
          </div>
          <div>
    <img src={banner3} alt="" />
          </div>
        </Slider>
  )
}

export default BasicSlider