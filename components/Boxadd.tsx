import React from "react";
import Boxbutton from "./Boxbutton";

const Boxadd = () => {
    return (
        <div className="flex justify-center my-auto bg-[#f7fdff] items-center h-[60vh] ">
            <div className="flex flex-col w-[80%] px-8 py-4 space-y-4 rounded  text-black bg-white border border-black">
                <div className="flex flex-row items-center space-x-4">
                    {/*  */}
                    <svg
                        className="w-12 h-12 text-blue-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        {" "}
                        <circle cx="12" cy="12" r="10" />{" "}
                        <line x1="12" y1="8" x2="12" y2="16" />{" "}
                        <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                    <h1 className="text-2xl font-bold">Add your own</h1>
                </div>
                <p>
                    Are you a teacher or expert? Do you sell or rent out equipment, venue,
                    or event tickets? Or, do you know someone who should be on hobbycue?
                    Go ahead and Add your Own page Go ahead and Add your Own page
                </p>
                <button
                    className={`px-8 transition-all hover:text-white font-semibold py-2 border border-[#8064a2] text-[#8064a2]  h-[100%] hover:bg-[#8064a2] w-[20%]  rounded  `}
                >
                    Add new
                </button>
            </div>
        </div>
    );
};

export default Boxadd;