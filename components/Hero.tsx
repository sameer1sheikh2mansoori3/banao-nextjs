/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
'use client'
import React from "react";
import Login from "./Login";


const Hero = () => {
    return (
        <div className="flex w-full flex-col lg:flex-row   bg-[#f5f5f5] text-xl ">
            <div className="lg:w-[60%] w-full font-bold text-black h-[100vh] px-4 flex items-center justify-center flex-col space-y-8">
                <div className="flex text-2xl">
                    <h1 className="font-semibold text-black ">
                        Explore your
                        <span className="text-[#3ea9cd] font-semibold font-sans mx-2 text-xl">
                            hobbies
                        </span>
                        or
                        <span className="text-[#ad82a2] text-xl font-semibold  font-sans mx-2">
                            passion
                        </span>
                    </h1>
                </div>
                <span className="mx-2 text-xl font-normal">
                    Sign-in to interact with a community of fellow hobbyists and an
                    eco-system of experts, teachers, suppliers, classes, workshops, and
                    places to practice, participate or perform. Your hobby may be about
                    visual or performing arts, sports, games, gardening, model making,
                    cooking, indoor or outdoor activities…
                </span>
                <span className="mx-2 text-xl font-normal">
                    If you are an expert or a seller, you can Add your Listing and promote
                    yourself, your students, products, services or events. Hop on your
                    hobbyhorse and enjoy the ride
                </span>
                <img src="https://nextjs-bano.vercel.app/signin.svg" alt="" srcSet="" />
            </div>
            <div className="lg:w-[40%] w-full flex flex-col justify-center">
                <Login />
            </div>
        </div>
    );
};

export default Hero;