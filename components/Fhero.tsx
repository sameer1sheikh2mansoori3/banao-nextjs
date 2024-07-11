/* eslint-disable @next/next/no-img-element */
import React from "react";

const Fhero = () => {
    return (
        <>
            <div className="flex justify-center bg-[#f7fdff] my-8">
                <div className="flex flex-col  w-[80%] h-[50vh] bg-[#f7fdff]">
                    <div className="flex justify-start font-sans text-4xl font-bold text-black">
                        <span className="mx-1">Your</span>
                        <span className="text-[#8064a2]"> Hobby </span>
                        <span className="mx-1">, Your </span>
                        <span className="text-[#0096c8]"> Community... </span>
                    </div>

                    <div>
                        {" "}
                        <button className="px-8 py-3 rounded-md font-bold text-white bg-[#8064a2] my-3">
                            Get Started
                        </button>
                    </div>
                    <div className="flex">
                        <img
                            src="https://hobby-cue-seven.vercel.app/_next/static/media/ContentHeroImage.e872644d.svg"
                            alt=""
                            className="mx-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fhero;