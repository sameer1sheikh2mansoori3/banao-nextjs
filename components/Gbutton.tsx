/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";

interface Gbutton {
    imgSrc: string,
    text: string

}
const Gbutton: React.FC<Gbutton> = ({ imgSrc, text }) => {
    return (
        <>
            <div className="flex flex-col justify-center w-[70%]  py-1 font-normal border border-black rounded-md">
                <div className="flex flex-row justify-center ">
                    <img className="w-10 h-10 rounded-full" src={imgSrc} alt="" />{" "}
                    <p className="text-black ">{text}</p>
                </div>
            </div>
        </>
    );
};

export default Gbutton;