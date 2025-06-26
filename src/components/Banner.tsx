import Image from "next/image";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="flex items-center jistify-center w-full">
        <Image
          src="/assets/images/banner.png"
          width={1920}
          height={1080}
          alt="banner-image"
          className="w-1/2 m-auto my-8 fit-contain"
        />
    </section>
  );
};

export default Banner;
