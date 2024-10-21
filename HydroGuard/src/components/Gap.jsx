import React from "react";

const Gap = () => {
  const researchGapExplanation = {
    title: "Research Gap",
    description:
      "Current dam operations in Sri Lanka rely on manual methods, leading to inefficiencies in water management, flood prevention, and hydroelectric power generation. These methods lack automation in critical areas such as dam gate control and water demand forecasting. Additionally, there are no automated systems for crack detection and analysis in dam structures, nor for predicting energy efficiency based on reservoir conditions. This highlights the need for a smart dam control system that integrates IoT and machine learning technologies to optimize water management, enhance flood prevention, protect against structural damage, and improve energy generation efficiency in Sri Lanka.",
  };

  return (
    <div id="research-gap" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {researchGapExplanation.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {researchGapExplanation.description}
        </p>
      </div>
    </div>
  );
};

export default Gap;
