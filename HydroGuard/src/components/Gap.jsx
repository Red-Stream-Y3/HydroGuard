import React from "react";

const Gap = () => {
  const researchGapExplanation = {
    title: "Research Gap",
    description:
      "A research gap refers to an area where there is a lack of information, data, or studies. It identifies opportunities for further investigation and can often lead to groundbreaking discoveries or advancements in the field. Recognizing a research gap is crucial for driving innovation and progress.",
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
