import { FaPlay } from "react-icons/fa";
import school from "../../../../public/school.jpg";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex items-center gap-[40px] h-[400px] my-[50px]">
      {/* ======> Left <===== */}
      <div className="lg:w-1/2">
        <h2 className="text-[30px] font-bold ">
          Welcome to University of Dhaka
        </h2>
        <p>
          On the first day of July 1921 the University of Dhaka opened its doors
          to students with Sir P.J. Hartog as the first Vice-Chancellor of the
          University. The University was set up in a picturesque part of the
          city known as Ramna on 600 acres of land.The University started its
          activities with 3 Faculties,12 Departments, 60 teachers, 877 students
          and 3 dormitories (Halls of Residence) for the students. At present
          the University consists of 13 Faculties, 83 Departments, 12
          Institutes, 20 residential halls, 3 hostels and more than 56 Research
          Centres. The number of students and teachers has risen to about 37018
        </p>
      </div>
      {/* =====> Right <==== */}
      <div className="lg:w-1/2 p-4">
        <div className="relative h-[350px] rounded-[10px] overflow-hidden group">
          {/* Background Image */}
          <img
            src={school}
            alt="logo"
            className="h-full w-full object-cover "
          />

          {/* Overlay with play button */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#005639a6]">
            <div className="bg-white bg-opacity-80 rounded-full p-4 shadow-lg hover:bg-opacity-100 transition">
              <FaPlay className="text-[#4c9580] text-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
