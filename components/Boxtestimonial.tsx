/* eslint-disable @next/next/no-img-element */
import React from "react";

const Boxtestimonial = () => {
    return (
        <div className="flex items-center justify-center w-full bg-white">
            <div className="bg-[#f7f5f9] h-auto  py-6  flex flex-col px-4 space-y-5 w-[80%] justify-center">
                <div className="flex flex-row space-x-4">
                    <img
                        src="https://hobby-cue-seven.vercel.app/_next/static/media/Quote.f129a009.svg"
                        alt=""
                        srcSet=""
                    />
                    <h1 className="text-2xl font-bold text-black">Testimonials</h1>
                </div>
                <div className="text-gray-500">
                    In a fast growing and ever changing city like Bangalore, it sometimes
                    becomes very difficult to find or connect with like minded people.
                    Websites like hobbycue.com is a great service which helps me get in
                    touch with, communicate, connect, and exchange ideas with other
                    dancers. It also provides the extra benefit of finding products and
                    services that I can avail, which I can be assured is going to be of
                    great quality as it comes recommended by people of the hobbycue
                    community. To have discussions, to get visibility, and to be able to
                    safely explore various hobbies and activities in my city, all under
                    one roof, is an excellent idea and I highly recommend it.
                </div>
                <div className="flex flex-col justify-between lg:flex-row">
                    <img
                        className="h-[10vh]"
                        src="https://hobby-cue-seven.vercel.app/_next/static/media/Track.b7cb520d.svg"
                        alt=""
                    />
                    <img
                        className="h-[10vh]"
                        src="https://hobby-cue-seven.vercel.app/_next/static/media/Profile.e06ba24a.svg"
                        alt=""
                    />
                    <div className="flex flex-col items-center justify-center my-auto md: ">
                        <h1 className="font-bold text-xl text-[#8064a2]">
                            Shubha Nagarajan
                        </h1>
                        <h1 className="font-bold text-blue-300 text-md">
                            Classical Dancer
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Boxtestimonial;