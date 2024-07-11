import React from "react";

const Inputfooter = () => {
    return (
        <div className="flex flex-row rounded border-2 overflow-hidden border-[#8064a2] w-[100%]">
            <input
                className="border-[#8064a2] border-none"
                type="text"
                name=""
                id=""
                placeholder="Email id"
            />
            <button className="bg-[#8064a2] text-center pl-2 px-4 py-2 font-bold rounded text-white">
                invite
            </button>
        </div>
    );
};

export default Inputfooter;