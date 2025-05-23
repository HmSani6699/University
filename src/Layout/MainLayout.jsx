import React from "react";
import Footer from "../pages/Footer/Footer";
import Navber from "../Navber/Navber";
import Banner from "../pages/Home/Home/Banner/Banner";
import Professor from "../pages/Home/Professor/Professor";
import Marquee from "react-fast-marquee";
import Teacher from "../pages/Home/Teacher/Teacher";
import CountDown from "../pages/Home/CountDown/CountDown";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Banner />
      <div className="flex ">
        <div className="bg-[#4c9580] font-bold py-[6px] text-white px-[30px]">
          Notice
        </div>
        <Marquee className="text-[#4c9580]">
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
      </div>
      <Professor />
      <Teacher />
      <CountDown />

      <div className="bg-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit,
        atque quis! Quasi quia et, reiciendis dolorem eius aliquid distinctio
        nisi voluptatum? Expedita deserunt at dicta totam itaque facere animi
        laborum quidem modi, est hic obcaecati, ratione doloremque cupiditate!
        Nemo hic quaerat vel eligendi beatae repellendus impedit at omnis
        adipisci minus autem nihil perspiciatis tempore magnam, vero qui a
        exercitationem placeat nobis minima quos? Neque voluptatem cumque cum!
        Repellendus asperiores inventore molestiae maiores autem quibusdam sequi
        dolor est accusantium aperiam? Vel ea aliquid excepturi pariatur ratione
        rerum sed veniam porro ipsum incidunt explicabo voluptate doloribus
        praesentium voluptates, magnam nam eveniet, iure quasi ipsa repellendus!
        Accusantium ipsa quibusdam dolorum. Delectus quos optio itaque dolorum
        eveniet amet modi in maiores odit necessitatibus, ut ex officiis quia
        deserunt culpa, quas reiciendis id magni earum odio tempore iste fugit.
        Voluptatibus repudiandae deleniti eos enim sunt beatae libero, unde
        nostrum cumque dignissimos velit quo consectetur neque? Quo, minus dicta
        reprehenderit, libero nostrum eaque ipsam quibusdam ab hic nihil
        consequatur natus aliquam reiciendis, in beatae odit! Molestiae
        voluptate provident repudiandae dolores, ex voluptatibus molestias
        inventore tenetur, omnis dolorum delectus aut quam? Quaerat
        exercitationem porro harum eligendi, inventore eos atque ducimus ullam
        earum minima incidunt tempora aut vel! Dolorem, libero mollitia?
        Repellat nemo unde impedit necessitatibus pariatur excepturi sunt sint
        laudantium nam dolores ut explicabo et maiores ea perferendis assumenda
        modi accusamus laboriosam, in beatae ad, quia rerum tempora quisquam.
        Odit atque enim maxime tenetur et rem, temporibus eaque consectetur
        excepturi possimus ad architecto magnam similique, laborum earum, ex
        expedita assumenda delectus sunt facilis ipsum aperiam ab eius. Hic
        sequi eligendi soluta perferendis voluptates. Quaerat aut nulla in
        dolores atque architecto modi a dolore delectus, fugiat voluptate
        obcaecati nostrum officiis exercitationem nemo explicabo mollitia
        necessitatibus laborum. Cumque consectetur eveniet mollitia libero
        laboriosam modi velit nisi a tempora quis. expedita assumenda delectus
        sunt facilis ipsum aperiam ab eius. Hic sequi eligendi soluta
        perferendis voluptates. Quaerat aut nulla in dolores atque architecto
        modi a dolore delectus, fugiat voluptate obcaecati nostrum officiis
        exercitationem nemo explicabo mollitia necessitatibus laborum. Cumque
        consectetur eveniet mollitia libero laboriosam modi velit nisi a tempora
        quis. laboriosam modi velit nisi a tempora quis. expedita assumenda
        delectus sunt facilis ipsum aperiam ab eius. Hic sequi eligendi soluta
        perferendis voluptates. Quaerat aut nulla in dolores atque architecto
        modi a dolore delectus, fugiat voluptate obcaecati nostrum officiis
        exercitationem nemo explicabo mollitia necessitatibus laborum. Cumque
        consectetur eveniet mollitia libero laboriosam modi velit nisi a tempora
        quis. laboriosam modi velit nisi a tempora quis. expedita assumenda
        delectus sunt facilis ipsum aperiam ab eius. Hic sequi eligendi soluta
        perferendis voluptates. Quaerat aut nulla in dolores atque architecto
        modi a dolore delectus, fugiat voluptate obcaecati nostrum officiis
        exercitationem nemo explicabo mollitia necessitatibus laborum. Cumque
        consectetur eveniet mollitia libero laboriosam modi velit nisi a tempora
        quis.
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
