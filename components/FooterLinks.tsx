/* eslint-disable @next/next/no-img-element */
import React from "react";
import Inputfooter from "./Inputfooter";

const FooterLinks = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[40vh] w-full text-black">
            <div className="mx-auto flex flex-row  w-[80%] ">
                <div className="w-[20%] flex-col space-y-1 mx-auto">
                    <h1 className="text-lg font-bold">Hobby cue</h1>
                    <div>About Us</div>
                    <div>Our Services</div>
                    <div>Work with Us</div>
                    <div>FAQ</div>
                    <div>Contact Us</div>
                </div>
                <div className="w-[20%] flex-col space-y-1 mx-auto">
                    <h1 className="text-lg font-bold">How do I</h1>
                    <div>Sign up</div>
                    <div>Add a Listing</div>
                    <div>Claim Listing</div>
                    <div>Post a Query</div>
                    <div>Add a Blog Post</div>
                    <div>Other Queries</div>
                </div>
                <div className="w-[20%] flex flex-col space-y-1 mx-auto">
                    <h1 className="text-lg font-bold">Quick Links</h1>
                    <div>Listings</div>
                    <div>Blog Posts</div>
                    <div>Shop / Store</div>
                    <div>Community</div>
                </div>
                <div className="w-[20%] flex-col  mx-auto space-y-2">
                    <div className="space-y-2">
                        <h1 className="text-lg font-bold">Social Media</h1>

                        <div className="flex flex-row space-x-5">
                            <img
                                src="https://hobby-cue-seven.vercel.app/_next/static/media/IconFacebook.10c77a77.svg"
                                alt=""
                            />
                            <img
                                src="https://hobby-cue-seven.vercel.app/_next/static/media/IconTwitter.cd6fb9b6.svg"
                                alt=""
                            />
                            <img
                                src="https://hobby-cue-seven.vercel.app/_next/static/media/IconInstagram.4b429dad.svg"
                                alt=""
                            />
                            <img
                                src="https://hobby-cue-seven.vercel.app/_next/static/media/IconPinterest.4025ad69.svg"
                                alt=""
                            />
                            <img
                                src="https://hobby-cue-seven.vercel.app/_next/static/media/IconGoogle.088f1fb7.svg"
                                alt=""
                            />
                            <img
                                src="https://hobby-cue-seven.vercel.app/_next/static/media/IconYoutube.93b970f4.svg"
                                alt=""
                            />
                            <img
                                src="https://hobby-cue-seven.vercel.app/_next/static/media/IconTelegram.ee7fb6c4.svg"
                                alt=""
                            />
                            <img
                                src="https://hobby-cue-seven.vercel.app/_next/static/media/IconEmail.2e134a0c.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold mt-[20%]">Invite Friends</h1>
                        <Inputfooter />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterLinks;