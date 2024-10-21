import React from "react";

import SystemDiagram from "../assets/system-diagram.png";

const Methodology = () => {
  return (
    <div id="methodology" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Methodology
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We follow a systematic methodology to ensure the development of
          effective and innovative solutions.
        </p>
        <div className="mt-10 lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <img
              src={SystemDiagram}
              alt="Dam Operation Illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <ul className="list-disc pl-6 text-lg leading-8 text-gray-600">
              <li>
                <strong>Dam Gate Automation:</strong> IoT and ML automate water
                management to improve efficiency, especially in small to
                medium-sized reservoirs used for agriculture.
              </li>
              <li>
                <strong>Flood Prediction & Prevention:</strong> Predicts water
                levels 84 hours in advance and uses a pre-release strategy to
                reduce flood risk and prevent emergency discharges.
              </li>
              <li>
                <strong>Dam Crack Analysis:</strong> Advanced image processing
                detects and analyzes cracks to assess dam structural integrity
                and assist in maintenance decisions.
              </li>
              <li>
                <strong>Energy Efficiency Prediction:</strong> Machine learning
                predicts energy efficiency in hydropower reservoirs, optimizing
                energy production and resource management.
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          This integrated system improves water resource optimization, ensures
          timely flood prevention measures, identifies and analyzes structural
          cracks, and optimizes energy production, making it a highly efficient
          solution for dam and reservoir management in Sri Lanka.
        </p>
      </div>
    </div>
  );
};

export default Methodology;
