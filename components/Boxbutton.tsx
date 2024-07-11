import React from "react";
interface BoxbuttonProps {
    text: string;
}
const Boxbutton: React.FC<BoxbuttonProps> = ({ text }) => {
    return (
        <div>
            <button
                className={`px-10 py-2 border-2 h-[100%]  rounded bg-orange-lightest `}
            >
                {text}
            </button>
        </div>
    );
};

export default Boxbutton;