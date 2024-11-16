import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../../public/list.json';
import Cards from './Cards';
import Slider from "react-slick";
function Freebooks() {
    const filterData=list.filter((data)=>data.category === "Free");

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
        <h1 className="font-bold text-xl pb-2">Free Offered Books</h1>
        <p>
          Access free books and start your reading journey today!
        </p>
        </div>
      
      <div>
      <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
      </div>
      </div>
    </>
  );
}

export default Freebooks;