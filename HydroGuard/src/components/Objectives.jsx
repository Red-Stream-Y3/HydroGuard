import {
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const Objectives = () => {
  const objectivesList = [
    {
      title: "Integrate Low-Cost IoT",
      description:
        "Leverage affordable IoT sensors to monitor water levels in real-time, enabling efficient and cost-effective dam management.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Flood Control Algorithm",
      description:
        "Develop an advanced algorithm to predict and control flood risks by releasing water at optimal times, based on weather data and reservoir capacity.",
      icon: ArrowPathIcon,
    },
    {
      title: "Automated Crack Detection",
      description:
        "Implement a smart detection system using image processing and computer vision algorithms to autonomously identify structural cracks, ensuring timely maintenance of dam infrastructure.",
      icon: AcademicCapIcon,
    },
    {
      title: "Optimize Hydropower Generation",
      description:
        "Utilize machine learning models to forecast energy demands and water availability, optimizing the efficiency of hydropower generation.",
      icon: BoltIcon,
    },
  ];

  return (
    <div id="research-objectives" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Research Objectives
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Our research aims to achieve the following key objectives to
          revolutionize dam control and management.
        </p>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {objectivesList.map((objective) => (
              <div key={objective.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <objective.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {objective.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {objective.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
