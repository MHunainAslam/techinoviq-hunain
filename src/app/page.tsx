import React from "react";
import HomePage from "@/components/HomePage";
import Banner from "@/components/Banner";

type Props = {};
export const metadata = {
  title: "Pokémon Team Builder",
  description: "Build your dream Pokémon team!",
};
const page = (props: Props) => {
  return (
    <main className="my-3">
      <Banner />
      <HomePage />
    </main>
  );
};

export default page;
