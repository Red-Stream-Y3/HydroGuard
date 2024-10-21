import React from "react";
import SLASSCOM from "../assets/slasscomAward.jpg";

const Archievements = () => {
  return (
    <div id="achievements" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Archievements
        </h2>
        <img
          src={SLASSCOM}
          alt="SLASSCOM-Ingenuity-Awards"
          border="0"
          className="mt-6"
        />
        <p className="mt-6 text-md leading-8 text-gray-600 text-center">
          SLASSCOM Ingenuity Awards: Best Innovation from{" "}
          <br className="block sm:hidden" /> North Western province
        </p>
      </div>
    </div>
  );
};

export default Archievements;
