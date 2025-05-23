import image from "../../../../public/teacher1.png";

const Professor = () => {
  return (
    <div className="bg-[#f5f5f5] py-10 px-5 flex flex-col md:flex-row items-center  gap-8 max-w-6xl mx-auto my-[30px]">
      {/* Image Shield */}
      <div className="relative">
        {/* Shadow border effect */}
        <div className="absolute -left-[20px] top-[20px] h-[360px] w-[310px] rounded-b-full border-[6px] border-white bg-white z-0 shadow-lg"></div>
        <div className="relative h-[360px] w-[290px] rounded-b-full overflow-hidden bg-[#4c9580] z-10">
          <img
            src={image}
            alt="Vice Chancellor"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">
          Message from the{" "}
          <span className="text-[#4c9580]">Vice Princhipal</span>
        </h2>
        <p className="text-xl mt-4 font-medium text-gray-800">
          Professor Dr. Md. Jakir ali
        </p>
        <p className="text-[#4c9580] font-semibold mt-1">Vice Chancellor</p>
        <p>
          Welcome to the official website of the University of Dhaka. It is an
          honor for me to serve as the Vice Chancellor of University of Dhaka
          and I hope that this website provides you with the necessary
          information that will meet your academic, research, and administrative
          needs.&nbsp; Established in 1921, the University of Dhaka has always
          been an integral part of the history of Bangladesh. In every critical
          juncture of the nation’s journey, be it the ...
        </p>

        <div className=" flex items-end justify-end pr-[20px]">
          <button className="border border-[#4c9580] mt-[50px] px-[20px] py-[6px] bg-[#4c9580]  rounded-full hover:bg-[#4c9580] text-white ">
            Read more ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Professor;
