import React from "react";

const Objectives = () => {
  const objectivesList = [
    {
      title: "Innovate with Technology",
      description:
        "Utilize emerging technologies and methodologies to develop cutting-edge solutions.",
    },
  ];

  return (
    <div id="research-objectives" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Objectives
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We are committed to achieving the following objectives as we work
          towards impactful and sustainable solutions.
        </p>
        <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-x-12 gap-y-12 sm:max-w-xl sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {objectivesList.map((objective, index) => (
            <div
              className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
              key={index}
            >
              <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
                <span className="text-2xl lg:text-4xl font-bold text-gray-700">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-3 text-lg lg:text-xl font-medium leading-6 text-gray-900">
                {objective.title}
              </h3>
              <p className="mt-2 text-sm lg:text-md text-gray-600">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Objectives;
