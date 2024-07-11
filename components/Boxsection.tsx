import { IoPeople } from "react-icons/io5";
import Continue from "./Continue";
import Location from "./Location";
import Calander from "./Calander";
import Boxbutton from "./Boxbutton";
import { BsFillHandbagFill } from "react-icons/bs";
const Boxsection = () => {
    return (
        <>
            <div className="h-[40%]  my-auto">
                <div className="my-[5%] space-y-4">
                    <div className="flex flex-row w-[100vw] items-center justify-center px-4 space-x-4 ">
                        <div className="flex flex-col"></div>
                        <div className="flex flex-col border border-black space-y-6 text-black px-4 py-4  justify-start w-[40%] hover:text-white hover:bg-[#8064a2] hover:border-[#8064a2] transition-all rounded">
                            <div className="flex flex-row items-center space-x-4">
                                <IoPeople className="" />
                                <div className="text-2xl font-bold ">People</div>
                            </div>

                            <div>
                                Find a teacher, coach, or expert for your hobby interest in your
                                locality. Find a partner, teammate, accompanist or collaborator.
                            </div>
                            <div>
                                <Boxbutton text={"Connect"} />
                            </div>
                        </div>
                        <div className="flex flex-col border border-black space-y-6 text-black px-4 py-4  justify-start w-[40%] hover:text-white hover:bg-[#77933c] transition-all rounded">
                            <div className="flex items-center space-x-4 text-2xl font-bold">
                                <Location />
                                <div>Place</div>
                            </div>

                            <div>
                                Find a class, school, playground, auditorium, studio, shop or an
                                event venue. Book a slot at venues that allow booking through
                                hobbycue.
                            </div>
                            <Boxbutton text={"Meet up"} />
                        </div>
                    </div>
                    <div className="flex flex-row w-[100vw] items-center justify-center px-4 space-x-4">
                        <div className="flex flex-col"></div>
                        <div className="flex flex-col border border-black space-y-6 text-black px-4 py-4  justify-start w-[40%] hover:text-white hover:bg-[#c0504d] transition-all rounded">
                            <div className="flex flex-row items-center space-x-8">
                                <BsFillHandbagFill />
                                <div className="text-2xl font-bold">Product</div>
                            </div>

                            <div>
                                Find equipment or supplies required for your hobby. Buy, rent or
                                borrow from shops, online stores or from community members.
                            </div>
                            <Boxbutton text={"Get it"} />
                        </div>
                        <div className="flex flex-col border border-black space-y-6 text-black px-4 py-4  justify-start w-[40%] hover:text-white hover:bg-[#0096c8] transition-all rounded">
                            <div className="flex flex-row items-center space-x-8">
                                <Calander />
                                <div className="text-2xl font-bold">Program</div>
                            </div>

                            <div>
                                Find events, meetups and workshops related to your hobby.
                                Register or buy tickets online.
                            </div>
                            <Boxbutton text={"Attend"} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="">
        <div className="flex flex-col border border-black space-y-2 text-black px-4 py-4  justify-start w-[40%] hover:text-white hover:bg-[#8064a2] transition-all rounded">
          <div>
            <IoPeople className="" />
          </div>
          <div>people</div>
          <div>
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator
          </div>
          <div>Continue</div>
        </div>
        <div className="flex flex-col border border-black space-y-2 text-black px-4 py-4  justify-start w-[40%] hover:text-white hover:bg-[#8064a2] transition-all rounded">
          <div>
            <IoPeople className="" />
          </div>
          <div>people</div>
          <div>
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator
          </div>
          <div>Continue</div>
        </div>
      </div> */}
        </>
    );
};

export default Boxsection;