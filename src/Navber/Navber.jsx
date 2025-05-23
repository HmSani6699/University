import { FaBook, FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../../public/logo.png";
import { MdEmail, MdLogin } from "react-icons/md";
import { IoIosArrowDown, IoMdLogIn } from "react-icons/io";
import l1 from "../../public/l1.jpeg";
import l2 from "../../public/l2.jpeg";
import l3 from "../../public/l3.jpeg";
import l4 from "../../public/l4.jpeg";
import l5 from "../../public/l5.jpeg";
import Marquee from "react-fast-marquee";

const Navber = () => {
  return (
    <div className="">
      {/* ====> Top menuver  <==== */}
      <div className="flex items-center justify-between  max-w-[1200px] mx-auto mt-[15px] mb-[10px]">
        {/* left */}
        <div className="flex items-center gap-[10px]">
          <div className="h-[70px] w-[70px]">
            <img className="h-[70px] w-[70px]" src={logo} alt="logo" />
          </div>
          <div>
            <h2 className="text-[#4c9580] font-bold text-[30px] leading-[25px]">
              SOPTOBORNO MODEL SCHOOL
            </h2>
            <h2 className="text-[#4c9580] font-bold text-[20px] ">
              Dwariapur, Shahzadpur
            </h2>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center gap-[30px]">
          <h2 className="flex items-center gap-[6px] text-blue-600">
            <FaFacebook />
            Facebook
          </h2>

          <h2 className="flex items-center gap-[6px] text-red-500">
            <FaYoutube />
            Youtube
          </h2>
          <h2 className="flex items-center gap-[6px] text-[#4c9580]">
            <MdEmail />
            Web Email
          </h2>
          <h2 className="flex items-center gap-[6px] text-[#4c9580]">
            <IoMdLogIn />
            Login
          </h2>
        </div>
      </div>
      {/* ====> Main menuber <====== */}
      <div className="bg-[#4c9580] text-white py-[15px] flex items-center justify-center ">
        <div className="max-w-[1200px] mx-auto flex gap-[30px]">
          {/* Home Dropdown */}
          <div className="relative">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              Home
            </h2>
          </div>

          {/* About Dropdown */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              About <IoIosArrowDown />
            </h2>

            <div className="absolute top-full mt-1 w-[250px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <h2 className="text-[20px] font-semibold text-[#4c9580] mb-2">
                  About Menu
                </h2>
                {Array.from({ length: 9 }).map((_, i) => (
                  <p key={i} className="whitespace-nowrap pb-[10px]">
                    Lorem menu {i + 1}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* admssion */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              Admission <IoIosArrowDown />
            </h2>

            <div className="absolute top-full mt-1 w-[800px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <div>
                  <div className="flex gap-[30px] items-center justify-between ">
                    <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                      Frist Admission
                    </h2>
                    <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                      Second Admission
                    </h2>
                    <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                      Threed Admission
                    </h2>
                  </div>
                  <div className="flex gap-[30px] items-start justify-between mt-[10px]">
                    {/* About the Organization */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        About the Organization
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> History
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Mission & Vision
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Board Members
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Management Team
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Partners
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Advisors
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Achievements
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Career
                        Opportunities
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Contact Info
                      </p>
                    </div>

                    {/* Academic Programs */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        Academic Programs
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Departments
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Faculties
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Courses
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Admission Info
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Exam Routine
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Class Schedule
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Grading Policy
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Academic Calendar
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Online Library
                      </p>
                    </div>

                    {/* Services & Support */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        Services & Support
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Student Portal
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Faculty Portal
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> IT Helpdesk
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Scholarships
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Transport
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Hostel Services
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Counseling
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> FAQs
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Support Center
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===> feature <=== */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              Feature <IoIosArrowDown />
            </h2>

            <div className="absolute top-full left-0 mt-1 w-[850px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <div>
                  <div className="flex gap-[30px] items-center justify-between ">
                    <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                      Frist Admission
                    </h2>
                    <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                      Second Admission
                    </h2>
                    <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                      Threed Admission
                    </h2>
                  </div>
                  <div className="flex gap-[30px] items-start justify-between mt-[10px]">
                    {/* About the Organization */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        About the Organization
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Aliquid eum officiis doloremque saepe dolor ut
                        facere, quasi iste nisi amet, similique omnis quam?
                        Tempora minima dolorem, eius excepturi distinctio
                        dolorum autem fugit harum voluptatem, illum quaerat.
                        Omnis hic saepe quis nesciunt blanditiis corporis nobis
                        iure ad porro deserunt autem ipsum provident nemo,
                        laboriosam perspiciatis ex consequatur eveniet. Beatae
                        cupiditate hic dolorem similique aliquam, tenetur,
                        adipisci quod dicta ab inventore tempora et harum nob
                        assumenda minima in!
                      </p>
                    </div>

                    {/* Academic Programs */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        Academic Programs
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Pariatur laboriosam doloribus sit quos neque ut,
                        aut expedita totam tenetur corrupti ab ipsum officia
                        incidunt odit aperiam quis facilis animi nesciunt a,
                        dolore similique! Ratione saepe alias et praesentium
                        nobis. Cum, architecto error. Esse libero, explicabo
                        sint accusantium ipsam amet, veniam qui eveniet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Instuitutes Dropdown */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              Instuitutes <IoIosArrowDown />
            </h2>

            <div className="absolute top-full mt-1 w-[250px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <h2 className="text-[20px] font-semibold text-[#4c9580] mb-2">
                  About Menu
                </h2>
                {Array.from({ length: 9 }).map((_, i) => (
                  <p key={i} className="whitespace-nowrap pb-[10px]">
                    Lorem menu {i + 1}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* Center */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              Center <IoIosArrowDown />
            </h2>

            <div className="absolute top-full mt-1 w-[500px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <h2 className="text-[20px] font-semibold text-[#4c9580] mb-2">
                  About Menu
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, quas corporis reiciendis nemo fuga similique tenetur
                  molestiae eveniet nulla magni quia minus vero omnis quaerat,
                </p>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                  quam. consectetur velit. Optio, fugit aliquid!
                </p>
              </div>
            </div>
          </div>
          {/* admssion */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              Deartments <IoIosArrowDown />
            </h2>

            <div className="absolute top-full mt-1 w-[800px] -ml-[500px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <div>
                  <div className="flex gap-[30px] items-center justify-between ">
                    <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                      Frist Admission
                    </h2>
                    <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                      Second Admission
                    </h2>
                    <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                      Threed Admission
                    </h2>
                  </div>
                  <div className="flex gap-[30px] items-start justify-between mt-[10px]">
                    {/* About the Organization */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        About the Organization
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> History
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Mission & Vision
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Board Members
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Management Team
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Partners
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Advisors
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Achievements
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Career
                        Opportunities
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Contact Info
                      </p>
                    </div>

                    {/* Academic Programs */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        Academic Programs
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Departments
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Faculties
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Courses
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Admission Info
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Exam Routine
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Class Schedule
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Grading Policy
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Academic Calendar
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Online Library
                      </p>
                    </div>

                    {/* Services & Support */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        Services & Support
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Student Portal
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Faculty Portal
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> IT Helpdesk
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Scholarships
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Transport
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Hostel Services
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Counseling
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> FAQs
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> Support Center
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===> feature <=== */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              Research <IoIosArrowDown />
            </h2>

            <div className="absolute top-full left-0 mt-1 w-[850px] ml-[-500px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <div>
                  <div className="flex gap-[30px] items-center justify-between ">
                    <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                      Frist Admission
                    </h2>
                    <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                      Second Admission
                    </h2>
                    <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                      Threed Admission
                    </h2>
                  </div>
                  <div className="flex gap-[30px] items-start justify-between mt-[10px]">
                    {/* About the Organization */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        About the Organization
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Aliquid eum officiis doloremque saepe dolor ut
                        facere, quasi iste nisi amet, similique omnis quam?
                        Tempora minima dolorem, eius excepturi distinctio
                        dolorum autem fugit harum voluptatem, illum quaerat.
                        Omnis hic saepe quis nesciunt blanditiis corporis nobis
                        iure ad porro deserunt autem ipsum provident nemo,
                        laboriosam perspiciatis ex consequatur eveniet. Beatae
                        cupiditate hic dolorem similique aliquam, tenetur,
                        adipisci quod dicta ab inventore tempora et harum nob
                        assumenda minima in!
                      </p>
                    </div>

                    {/* Academic Programs */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        Academic Programs
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Pariatur laboriosam doloribus sit quos neque ut,
                        aut expedita totam tenetur corrupti ab ipsum officia
                        incidunt odit aperiam quis facilis animi nesciunt a,
                        dolore similique! Ratione saepe alias et praesentium
                        nobis. Cum, architecto error. Esse libero, explicabo
                        sint accusantium ipsam amet, veniam qui eveniet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===> Library <=== */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              Library <IoIosArrowDown />
            </h2>

            <div className="absolute top-full left-0 mt-1 w-[850px] ml-[-700px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full ">
                <div className="flex gap-[30px] items-center justify-between ">
                  <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                    Frist Admission
                  </h2>
                  <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                    Second Admission
                  </h2>
                  <h2 className="text-[20px] font-semibold text-[#4c9580] border-b border-gray-300">
                    Threed Admission
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                  {[l1, l2, l3, l4, l5, l1]?.map((item) => (
                    <div className="h-[150px]">
                      <img className="h-full w-full" src={item} alt="l1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Notice Dropdown */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointe font-semibold">
              Notice <IoIosArrowDown />
            </h2>

            <div className="absolute top-full mt-1 w-[550px] ml-[-500px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                {Array.from({ length: 9 }).map((_, i) => (
                  <p key={i} className="whitespace-nowrap pb-[10px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptates, suscipit?
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===> Marque <==== */}

      {/* <div className="flex ">
        <div className="bg-blue-600 font-bold p-[10px] text-white">Notice</div>
        <Marquee>
          শিক্ষা মানুষের জীবনের মৌলিক অধিকার এবং উন্নয়নের প্রধান হাতিয়ার। একজন
          শিক্ষিত ব্যক্তি কেবল নিজের উন্নতি নয়, সমাজ ও দেশের উন্নয়নেও ভূমিকা
          রাখতে পারে। শিক্ষার মাধ্যমে মানুষ তার জ্ঞান, দক্ষতা ও চিন্তাশক্তি
          বিকাশ করতে পারে। একটি উন্নত জাতি গঠনের জন্য প্রয়োজন সঠিক ও মানসম্মত
          শিক্ষা ব্যবস্থা। বর্তমানে তথ্যপ্রযুক্তি শিক্ষার ক্ষেত্রে এক নতুন
          দিগন্ত উন্মোচন করেছে। অনলাইন শিক্ষা, ডিজিটাল ক্লাসরুম ও ই-লার্নিং
          পদ্ধতির কারণে শিক্ষার্থীরা এখন আরও সহজে জ্ঞান অর্জন করতে পারছে। শিক্ষা
          শুধু পুঁথিগত বিদ্যার মধ্যে সীমাবদ্ধ নয়, নৈতিক শিক্ষা, মানবিকতা,
          দেশপ্রেম ও দায়িত্ববোধও একজন শিক্ষার্থীর মধ্যে গড়ে তুলতে হবে।
        </Marquee>
      </div> */}
    </div>
  );
};

export default Navber;
