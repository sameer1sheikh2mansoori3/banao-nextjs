import React from "react";
import { IoIosLock } from "react-icons/io";
const InputBox = () => {
    return (
        <div className="flex flex-col space-y-2 w-[70%]">
            <div className="bg-white rounded">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="email"
                    className="w-full py-2 text-center rounded"
                />
            </div>
            <div>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="password"
                    className="w-full py-2 text-center rounded"
                />
            </div>
            <div className="flex flex-row justify-center space-x-5">
                <div className="flex flex-col text-center text-black">
                    <input type="checkbox" name="" id="" />
                    <div>Remember me</div>
                </div>
                <div className="flex flex-col text-center text-black">
                    <IoIosLock className="h-4" />
                    <div>Remember me</div>
                </div>
            </div>
        </div>
    );
};

export default InputBox;