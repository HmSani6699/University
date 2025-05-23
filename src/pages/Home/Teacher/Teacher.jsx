import teacher from "../../../../public/teacher1.png";

const Teacher = () => {
  return (
    <div>
      <h2 className="text-[25px] font-bold text-[#4c9580] text-center my-[20px]">
        শিক্ষকবৃন্দ
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[850px] mx-auto gap-[30px]">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div className="flex flex-col items-center">
            <div className="h-[100px] w-[100px] rounded-full bg-[#4c9580] -mb-[30px] relative z-40 border-[#f5f5f5] border-2">
              <img
                className="h-[100px] w-[100px] rounded-full bg-[#4c9580] border-[#f5f5f5] border-2"
                src={teacher}
                alt="teacher"
              />
            </div>
            <div className="border  border-gray-300 bg-white shadow-lg rounded-[6px] p-[20px] text-center">
              <h2 className="text-[20px] font-semibold mt-[20px]">
                {" "}
                Pr. Dr. Mamun Ahmed
              </h2>
              <p className="text-[16px]">Pro Vice Chancellor (Academic)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
