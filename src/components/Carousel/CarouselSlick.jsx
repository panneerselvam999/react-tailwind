// import React from "react";
// import cardData from "../../JsonData/slick.json";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const CarouselSlick = () => {
//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         responsive: [

//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };
//     return (
//         <div className="w-screen h-screen bg-gray-900">

//             <div className="mx-auto w-3/4 ">
//                 <div className="mt-20"></div>
//                 <Slider {...settings}>
//                     {cardData.slickData.map((data) => (
//                         <div
//                             key={data.id}
//                             className="h-[450px] rounded-xl  bg-white text-black"
//                         >
//                             <div className="flex h-56 items-center justify-center rounded-t-xl bg-indigo-500">
//                                 <img src={data.img} alt="" className="h-44 w-44 rounded-full" />
//                             </div>
//                             <div className="flex flex-col items-center justify-center gap-4 p-4">
//                                 <p className="text-xl font-semibold">{data.name}</p>
//                                 <p>{data.review}</p>
//                                 <button className="rounded-xl bg-indigo-500 px-6 py-1 text-lg text-white">
//                                     Read More
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default CarouselSlick;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// custom arrow

// import React from "react";
// import cardData from "../../JsonData/slick.json";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { FaArrowRight } from "react-icons/fa";

// const CarouselSlick = () => {
//     function SampleNextArrow(props) {
//         const { className, style, onClick } = props;
//         return (
//             <div
//                 className={`${className} absolute top-8 right-7 bg-red-500 rounded-xl  p-5 flex justify-center items-center `}
//                 style={{ ...style, display: "block", background: "green" }}

//                 onClick={onClick}
//             >
//                 <FaArrowRight className="text-white" />
//             </div>
//         );
//     }

//     function SamplePrevArrow(props) {
//         const { className, style, onClick } = props;
//         return (
//             <div
//                 className={className}
//                 style={{ ...style, display: "block", background: "green" }}
//                 onClick={onClick}
//             />
//         );
//     }

//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     initialSlide: 2,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 2,
//                 },
//             },

//         ],
//     };
//     return (
//         <div className="h-screen w-screen bg-gray-900">
//             <div className="mx-auto w-3/4">
//                 <div className="mt-20"></div>
//                 <Slider {...settings}>
//                     {cardData.slickData.map((data) => (
//                         <div
//                             key={data.id}
//                             className="h-[450px] rounded-xl bg-white text-black"
//                         >
//                             <div className="flex h-56 items-center justify-center rounded-t-xl bg-indigo-500">
//                                 <img src={data.img} alt="" className="h-44 w-44 rounded-full" />
//                             </div>
//                             <div className="flex flex-col items-center justify-center gap-4 p-4">
//                                 <p className="text-xl font-semibold">{data.name}</p>
//                                 <p>{data.review}</p>
//                                 <button className="rounded-xl bg-indigo-500 px-6 py-1 text-lg text-white">
//                                     Read More
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default CarouselSlick;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaCode } from "react-icons/fa";
import { MdOutlineDesignServices, MdSportsEsports } from "react-icons/md";
import { DiAndroid } from "react-icons/di";
import { MdSupport } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { data } from "autoprefixer";

const slickData = [
  {
    id: 1,
    icon: FaCode,
    title: "Web Developer ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in adipisci quos nisi eos expedita non vel ratione ut corporis voluptatum sint quam magni atque ab veniam aliquam! Pariatur, necessitatibus.",
    lable: "READ MORE",
  },
  {
    id: 2,
    icon: MdOutlineDesignServices,
    title: "UI/UX Designer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in adipisci quos nisi eos expedita non vel ratione ut corporis voluptatum sint quam magni atque ab veniam aliquam! Pariatur, necessitatibus.",
    lable: "READ MORE",
  },
  {
    id: 3,
    icon: DiAndroid,
    title: "Android Development",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in adipisci quos nisi eos expedita non vel ratione ut corporis voluptatum sint quam magni atque ab veniam aliquam! Pariatur, necessitatibus.",
    lable: "READ MORE",
  },
  {
    id: 4,
    icon: MdSportsEsports,
    title: "24/7 Support ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in adipisci quos nisi eos expedita non vel ratione ut corporis voluptatum sint quam magni atque ab veniam aliquam! Pariatur, necessitatibus.",
    lable: "READ MORE",
  },
  {
    id: 5,
    icon: FaBusinessTime,
    title: "Free Cossulting ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in adipisci quos nisi eos expedita non vel ratione ut corporis voluptatum sint quam magni atque ab veniam aliquam! Pariatur, necessitatibus.",
    lable: "READ MORE",
  },
  {
    id: 6,
    icon: TbTruckDelivery,
    title: "On Time Delivery ",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in adipisci quos nisi eos expedita non vel ratione ut corporis voluptatum sint quam magni atque ab veniam aliquam! Pariatur, necessitatibus.",
    lable: "READ MORE",
  },
];

const CarouselSlick = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },


    ],
  };
  return (
    // <div className="container mx-auto rounded-md  bg-slate-100 mt-10 p-10">
    //   <Slider {...settings}>
    //     {slickData.map((data) => (
    //       <div
    //         key={data.id}
    //         className="flex w-96 bg-slate-300 flex-col items-center justify-center gap-6 rounded-lg border-b-4 border-slate-700 p-6"
    //       >
    //         <div className="mx-auto flex size-14 items-center justify-center rounded-full  bg-yellow-400 duration-300 hover:bg-yellow-500">
    //           <data.icon className="text-2xl" />
    //         </div>
    //         <div className="flex flex-col items-center gap-4">
    //           <h1 className="font-extrabold">{data.title}</h1>
    //           <p className="text-sm">{data.review}</p>
    //         </div>
    //         <div className="flex items-center justify-center">
    //           <button className="rounded-md bg-yellow-400 px-5 py-2 text-sm hover:bg-yellow-500">
    //             {data.lable}
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
    // </div>

    <div className="flex h-fit w-full flex-col items-center justify-center gap-6 bg-slate-200 px-4 py-10 lg:px-20 lg:py-20">
      <h1 className="text-center text-6xl font-bold text-black">
        Our Best Services
      </h1>
      <p className="text-center text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Necessitatibus, sapiente.
      </p>

      <div className="h-fit w-full p-8">
        <Slider {...settings}>

          {slickData.map((data) => (
            <div
              key={data.id}
              id="slider-box"
              className="flex flex-col h-[500px] items-center justify-center rounded-xl border-b-[8px] border-red-500 bg-white p-10"
            >
              <div
                id="icon-box"
                className="cursor-pointer rounded-full bg-yellow-400 p-6 duration-300 hover:bg-yellow-500"
              >
                {data.icon && <data.icon className="h-[45px] w-[45px]" />}
              </div>

              <div className="mt-6 flex flex-col items-center justify-center gap-6">
                <h1 className="text-2xl font-bold text-black">{data.title}</h1>
                <p className="text-center text-[17px]">{data.review}</p>
                <button className="rounded-xl bg-yellow-300 px-8 py-3 font-semibold hover:bg-yellow-500">
                  {data.lable}
                </button>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  );
};

export default CarouselSlick;
