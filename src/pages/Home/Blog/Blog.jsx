import BlogCart from "../../../Component/BlogCart/BlogCart";
import image from "../../../../public/cart1.jpg";
import image1 from "../../../../public/cart2.jpg";
import image2 from "../../../../public/cart3.jpg";
import image3 from "../../../../public/cart4.jpg";
import image4 from "../../../../public/cart5.jpg";
import image5 from "../../../../public/cart6.jpg";

const Blog = () => {
  return (
    <div className=" bg-white pt-[60px] pb-[50px]">
      <h2 className="text-[25px] font-bold text-center">Latest News</h2>
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
