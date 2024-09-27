import Image from "next/image";
import growjo from "../../../../../public/image/Growjo Redesign.png";

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="py-10 pl-14 flex-1 grow-[1.4] flex flex-col gap-8">
        <h1 className="text-[var(--growjo-main)] font-semibold text-5xl leading-[1.2]">
          Discover{" "}
          <span className="text-[var(--growjo-primary)]">
            the Fastest Growing Companies of 2024 with
          </span>{" "}
          Growjo
        </h1>
        <span className="text-3xl font-medium block text-gray-700 md:w-[90%]">
          Uncover the Next Big Players in Business with Data-driven Insights
        </span>
        <p className="leading-loose text-gray-500 text-[19px]">
          Welcome to Growjo, your ultimate destination for tracking the pulse of
          innovation and growth in the business world. With our cutting-edge
          technology and comprehensive data analysis, we bring you the
          definitive list of the fastest growing companies in 2024
        </p>
        <button className="bg-[var(--growjo-main)] w-fit text-lg text-white px-5 py-4 rounded-md">
          Try it for free &rarr;
        </button>
      </div>
      <div className="flex-1 pt-10">
        <div>
          <Image
            src={growjo}
            alt="Growjo logo"
            className="object-fit w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
