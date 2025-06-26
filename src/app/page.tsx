import React from "react";
import HomePage from "@/components/HomePage";
import Banner from "@/components/Banner";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="my-3">
      <Banner />
      <HomePage />
    </main>
  );
};

export default page;
