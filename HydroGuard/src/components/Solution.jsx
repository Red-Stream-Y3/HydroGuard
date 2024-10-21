import React from "react";
import sachiniImage from "../assets/Sachini.png";
import navodImage from "../assets/Navod.jpeg";
import dinushkaImage from "../assets/Dinushka.jpeg";
import janinduImage from "../assets/Janindu.jpeg";

const items = [
  {
    id: 1,
    title: "Dam Gate Automation",
    description:
      "The smart dam management system begins with IoT sensors deployed around the dam to monitor real-time environmental and operational metrics, such as water levels, flow rates, and weather conditions. These sensors continuously collect and transmit data to the central system, which is vital for immediate decision-making and for feeding into predictive models.",
    author: {
      name: "Sachini Lekamge",
      imageUrl: sachiniImage,
    },
  },
  {
    id: 2,
    title: "Flood Prevention with Pre-releasing",
    description:
      "The pre-release algorithm is the critical component of the proposed flood prevention strategy. It is designed to proactively manage reservoir water levels by calculating and executing controlled water releases before the water level reaches a critical threshold. The algorithm operates by predicting future water levels based on various inputs and adjusting the spill amount accordingly in an iterative process, util the desired outcome is achieved. Figure 3 illustrates the step-by-step process of the algorithm.",
    author: {
      name: "Dinushka Samaranayake",
      imageUrl: dinushkaImage,
    },
  },
  {
    id: 3,
    title: "Dam Crack Analysis",
    description:
      "The proposed system involves several key steps aimed at developing a mobile application for dam crack analysis. To begin, we utilized React Native for cross-platform mobile app development, ensuring compatibility across different devices and operating systems. The user-friendly interfaces of the mobile app allow users to upload dam crack images, either by selecting from the device's gallery or capturing images using the device's camera. React Native image processing libraries were implemented to enhance the user experience. Furthermore, the app will seamlessly integrate functionalities for users to submit images for analysis within the mobile app interface.",
    author: {
      name: "Navod Weerawarna",
      imageUrl: navodImage,
    },
  },
  {
    id: 4,
    title: "Improve Hydro Power Generation",
    description:
      "The hydro power generation optimization model is designed to maximize power output while considering various constraints and objectives. The model utilizes historical data, real-time sensor readings, and weather forecasts to predict future water availability and optimize power generation schedules. By incorporating machine learning algorithms, the model continuously learns and adapts to changing conditions, ensuring efficient and sustainable power generation.",
    author: {
      name: "Janindu Dissanayake",
      imageUrl: janinduImage,
    },
  },
];

const Solution = () => {
  return (
    <div id="research-problem-solution" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Proposed Solution
        </h2>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-2 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {items.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between bg-white p-6 rounded-lg shadow-lg bg-opacity-60"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {post.title}
                </h3>
                <p
                  className={`mt-5 text-sm text-justify leading-6 text-gray-600 overflow-hidden transition-all duration-500 ease-in-out max-h-24 group-hover:max-h-96 opacity-80 group-hover:opacity-100`}
                >
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solution;
