import BlogCart from "../../../Component/BlogCart/BlogCart";
import image from "../../../../public/cart1.jpg";
import image1 from "../../../../public/cart2.jpg";
import image2 from "../../../../public/cart3.jpg";
import image3 from "../../../../public/cart4.jpg";
import image4 from "../../../../public/cart5.jpg";
import image5 from "../../../../public/cart6.jpg";
import { BiSolidZap } from "react-icons/bi";

const Blog = () => {
  return (
    <div className=" bg-white pt-[60px] pb-[50px]">
      <div className="flex items-center justify-center">
        <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
          <div className="bg-[#07a69826] p-[4px] rounded-full">
            <BiSolidZap className="text-[#07A698]" />
          </div>
          সংবাদ
        </button>
      </div>
      <p className="font-Baloo text-[#1D5276] mt-[20px] text-[30px] text-center  leading-[28px] font-[600]">
        প্রতিদিনের সর্বশেষ সংবাদ
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[35px] mt-[50px] max-w-[1100px] mx-auto">
        {[
          {
            image: image,
            title: "",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque explicabo, temporibus accusamus tempora nam iusto nihil illo alias quis numquam.",
          },
          {
            image: image1,
            title: "",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque explicabo, temporibus accusamus tempora nam iusto nihil illo alias quis numquam.",
          },
          {
            image: image2,
            title: "",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque explicabo, temporibus accusamus tempora nam iusto nihil illo alias quis numquam.",
          },
          {
            image: image3,
            title: "",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque explicabo, temporibus accusamus tempora nam iusto nihil illo alias quis numquam.",
          },
          {
            image: image4,
            title: "",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque explicabo, temporibus accusamus tempora nam iusto nihil illo alias quis numquam.",
          },
          {
            image: image5,
            title: "",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque explicabo, temporibus accusamus tempora nam iusto nihil illo alias quis numquam.",
          },
        ]?.map((item) => (
          <BlogCart item={item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
