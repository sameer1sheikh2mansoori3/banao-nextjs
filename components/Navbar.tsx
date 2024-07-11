import Input from "./Input";
import Links from "./Links";
const Navbar = () => {
    return (
        <div className="sticky top-0 z-10 flex flex-no-wrap items-center justify-between w-full py-4 overflow-hidden bg-white border-2 cursor-pointer">
            <div className="flex justify-between w-full">
                <div className="flex items-center justify-end w-full lg:justify-center">
                    <Input />
                </div>
                <div className="flex items-center justify-center w-full">
                    <Links />
                </div>
            </div>
        </div>
    );
};

export default Navbar;