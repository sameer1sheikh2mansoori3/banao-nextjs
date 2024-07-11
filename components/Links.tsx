/* eslint-disable react/jsx-no-undef */
import React from "react";
import { MdExplore } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Hobbies from "./Hobbies";
import { LiaBookmarkSolid } from "react-icons/lia";
import { IoBookmarkSharp } from "react-icons/io5";
import { BiSolidBookmarkStar } from "react-icons/bi";
const Links = () => {
    return (
        <div className="items-center hidden space-x-4 lg:flex">
            <div className="flex items-center space-x-2">
                <MdExplore className="font-bold  text-[#8064a2] rounded-full text-4xl" />
                <span className="font-semibold text-black">Explore</span>
                <MdKeyboardArrowDown className="text-4xl text-gray-400" />
            </div>
            <div className="flex items-center space-x-2">
                <FaStar className="font-bold  text-[#8064a2] rounded-full text-4xl" />
                <span className="font-semibold text-black">Explore</span>
                <MdKeyboardArrowDown className="text-4xl text-gray-400" />
            </div>
            <div className="flex items-center space-x-2">
                <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.00005 20C9.10005 20 10.0001 19.1 10.0001 18H6.00005C6.00005 19.1 6.89005 20 8.00005 20ZM14.0001 14V9C14.0001 5.93 12.3601 3.36 9.50005 2.68V2C9.50005 1.17 8.83005 0.5 8.00005 0.5C7.17005 0.5 6.50005 1.17 6.50005 2V2.68C3.63005 3.36 2.00005 5.92 2.00005 9V14L0.710051 15.29C0.0800515 15.92 0.520051 17 1.41005 17H14.5801C15.4701 17 15.9201 15.92 15.2901 15.29L14.0001 14Z"
                        fill="#8064A2"
                    />
                </svg>
            </div>
            <div className="flex items-center space-x-2">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21.9198 7.25002V7.38002L20.4598 12.78C20.2873 13.421 19.907 13.9866 19.3786 14.3883C18.8503 14.79 18.2036 15.0051 17.5398 15H9.88982C9.13882 15.0031 8.41398 14.7243 7.85853 14.2189C7.30308 13.7134 6.95741 13.018 6.88982 12.27L6.23982 4.91002C6.2173 4.6607 6.10207 4.4289 5.91692 4.26041C5.73177 4.09192 5.49016 3.99901 5.23982 4.00002H3.06982C2.80461 4.00002 2.55025 3.89467 2.36272 3.70713C2.17518 3.51959 2.06982 3.26524 2.06982 3.00002C2.06982 2.73481 2.17518 2.48045 2.36272 2.29292C2.55025 2.10538 2.80461 2.00002 3.06982 2.00002H5.23982C5.99083 1.99698 6.71567 2.27572 7.27112 2.78118C7.82657 3.28665 8.17224 3.98206 8.23982 4.73002V5.00002H19.9298C20.2149 4.99779 20.4971 5.05652 20.7577 5.17228C21.0182 5.28805 21.2509 5.45816 21.4403 5.67124C21.6297 5.88431 21.7714 6.1354 21.8558 6.4077C21.9402 6.67999 21.9655 6.96718 21.9298 7.25002H21.9198Z"
                        fill="#8064A2"
                    />
                    <path
                        d="M9.06982 22C10.4505 22 11.5698 20.8807 11.5698 19.5C11.5698 18.1193 10.4505 17 9.06982 17C7.68911 17 6.56982 18.1193 6.56982 19.5C6.56982 20.8807 7.68911 22 9.06982 22Z"
                        fill="#8064A2"
                    />
                    <path
                        d="M17.0698 22C18.4505 22 19.5698 20.8807 19.5698 19.5C19.5698 18.1193 18.4505 17 17.0698 17C15.6891 17 14.5698 18.1193 14.5698 19.5C14.5698 20.8807 15.6891 22 17.0698 22Z"
                        fill="#8064A2"
                    />
                </svg>
            </div>
            <div className="flex items-center space-x-2">
                <button className="px-6 py-2 rounded border-2 hover:border-white border-[#8064a2] transition-all hover:text-white text-[#8064a2] hover:bg-[#8064a2]">
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default Links;