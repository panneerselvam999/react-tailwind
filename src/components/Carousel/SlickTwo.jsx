import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaCode } from "react-icons/fa";
import { MdOutlineDesignServices, MdSportsEsports } from "react-icons/md";
import { DiAndroid } from "react-icons/di";
import { FaBusinessTime } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";


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

const slickTwo = () => {


    const slideRef = useRef(null)

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
        <div className="container mx-auto rounded-md bg-slate-100 mt-10 p-10 pt-20 relative">
            <div className="absolute flex gap-6 top-8 right-20  ">
                <button onClick={() => slideRef.current.slickPrev()} className="p-4 border border-slate-300 rounded-lg hover:bg-slate-300 duration-300"><GrLinkPrevious /></button>
                <button onClick={() => slideRef.current.slickNext()} className="p-4 border border-slate-300 rounded-lg hover:bg-slate-300 duration-300"><GrLinkNext /></button>
            </div>
            <Slider ref={slideRef} {...settings}>
                {slickData.map((data) => (
                    <div
                        key={data.id}
                        className="flex flex-col items-center justify-center gap-0 rounded-lg border-b-4 border-slate-700 bg-slate-300 p-6"
                    >
                        <div className="flex items-center justify-center w-full">
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-400 duration-300 hover:bg-yellow-500 border-2 border-black">
                                <data.icon className="text-2xl" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <h1 className="font-extrabold">{data.title}</h1>
                            <p className="text-sm">{data.review}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="rounded-md bg-yellow-400 px-5 py-2 text-sm hover:bg-yellow-500">
                                {data.lable}
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

    );
};

export default slickTwo;

