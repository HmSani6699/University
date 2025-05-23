import image1 from "../../../../public/category1.png";
import image2 from "../../../../public/category2.png";
import image3 from "../../../../public/category3.png";
import image4 from "../../../../public/categor4.png";
import image5 from "../../../../public/category5.png";
import image6 from "../../../../public/category6.png";
import Animation from "../../../Component/Animation/Animation";

const Category = () => {
  const cardData = [
    {
      title: "জাতীয় শুদ্ধাচার কৌশল",
      icon: image1,
      items: [
        "শুদ্ধাচার কৌশল কর্মপরিকল্পনা",
        "ফোকাল পয়েন্ট কর্মকর্তা ও বিকল্প কর্মকর্তা",
        "ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        "প্রজ্ঞাপন/পরিপত্র/নীতিমালা",
      ],
    },
    {
      title: "বার্ষিক কর্মসম্পাদন চুক্তি",
      icon: image2,
      items: [
        "এপিএ নির্দেশিকা/পরিপত্র/এপিএ টিম",
        "বার্ষিক কর্মসম্পাদন চুক্তিসমূহ",
        "অফিস আদেশ/পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
        "এপিএ এমএস সফটওয়্যার লিংক",
      ],
    },
    {
      title: "উদ্ভাবনী কার্যক্রম",
      icon: image3,
      items: [
        "ইনোভেশন টীম",
        "প্রজ্ঞাপন/নীতিমালা/অফিস আদেশ",
        "বার্ষিক উদ্ভাবনী কর্মপরিকল্পনা/কার্যবিবরণী",
        "শ্রেষ্ঠ উদ্ভাবনী ধারণা/বাস্তবায়ন ও শোকেসিং",
      ],
    },
    {
      title: "অভিযোগ প্রতিকার ব্যবস্থাপনা",
      icon: image4,
      items: [
        "কমিটি ও ফোকাল পয়েন্ট",
        "মাসিক/ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        "অভিযোগ দাখিল (অনলাইন/সরাসরি)",
        "আইন/বিধি/পরি-পর/নীতিমালা/নির্দেশিকা",
      ],
    },
    {
      title: "সেবা প্রদান প্রতিশ্রুতি (সিটিজেনস চার্টার)",
      icon: image5,
      items: [
        "সিটিজেন চার্টার",
        "ফোকাল পয়েন্ট কর্মকর্তা/পরিবীক্ষণ কমিটি",
        "ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
        "আইন/বিধি/পরি-পর/নীতিমালা/নির্দেশিকা",
      ],
    },
    {
      title: "তথ্য অধিকার",
      icon: image6,
      items: [
        "দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপিল কর্তৃপক্ষ",
        "আবেদন ও আপিল ফরম",
        "স্বপ্রণোদিতভাবে প্রকাশযোগ্য তথ্যসমূহ",
        "আইন/বিধি/পরি-পর/নীতিমালা/নির্দেশিকা",
      ],
    },
  ];
  return (
    <div className="bg-[#4c9580]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-[50px] max-w-[1200px] mx-auto">
        {cardData.map((card, index) => (
          <Animation>
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={card.icon}
                  alt="icon"
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-lg font-bold text-gray-800 leading-snug">
                  {card.title}
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </Animation>
        ))}
      </div>
    </div>
  );
};

export default Category;
