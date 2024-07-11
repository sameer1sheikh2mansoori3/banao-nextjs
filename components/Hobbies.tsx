import { MdKeyboardArrowDown } from "react-icons/md";
import { PiCalendarStarFill } from "react-icons/pi";
const Hobbies = () => {
    return (
        <div className="flex items-center space-x-3">
            <PiCalendarStarFill className="font-bold text-4xl bg-[#8064a2] py-1 rounded-full" />
            <span className="font-semibold text-black ">Hobbies</span>

            <MdKeyboardArrowDown className="text-4xl text-gray-400" />
        </div>
    );
};

export default Hobbies;