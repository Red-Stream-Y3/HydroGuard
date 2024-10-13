const milestones = [
  {
    date: "March 2024",
    title: "Project Proposal",
    description:
      "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
    marks: 6,
    percentage: "6%",
  },
  {
    date: "June 2024",
    title: "Progress Presentation I",
    description:
      "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
    marks: 6,
    percentage: "6%",
  },
  {
    date: "July 2024",
    title: "Research Paper",
    description:
      "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred to in making new knowledge.",
    marks: 10,
    percentage: "10%",
  },
  {
    date: "September 2024",
    title: "Progress Presentation II",
    description:
      "Reviews the 90% completion status demonstration of the project, including a Poster presentation describing the project as a whole.",
    marks: 18,
    percentage: "18%",
  },
  {
    date: "October 2024",
    title: "Website Assessment",
    description:
      "The Website helps to promote our research project and reveals all details related to the project.",
    marks: 2,
    percentage: "2%",
  },
  {
    date: "November 2024",
    title: "Logbook",
    description:
      "The project status is validated through the Logbook, which includes Status Documents 1 & 2.",
    marks: 3,
    percentage: "3%",
  },
  {
    date: "November 2024",
    title: "Final Report",
    description:
      "The Final Report evaluates the completed project done throughout the year, including individual, group, and final reports.",
    marks: 19,
    percentage: "19%",
  },
  {
    date: "November 2024",
    title: "Final Presentation & Viva",
    description:
      "Viva is held individually to assess each member's contribution to the project.",
    marks: 20,
    percentage: "20%",
  },
];

const Milestones = () => {
  return (
    <div id="milestones" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Timeline
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Here's a brief timeline of our project's key milestones.
        </p>
        <div className="py-10">
          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center lg:col-span-2 relative group"
              >
                <div className="flex items-center lg:ml-6 z-10">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 group-hover:bg-indigo-700 rounded-full group-hover:rounded-md relative transition-all duration-100 transform">
                    <span className="text-lg font-semibold text-white">
                      {index + 1}
                    </span>
                    {index !== milestones.length - 1 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 bg-indigo-500 group-hover:bg-indigo-700 w-2px top-100 h-250px lg:h-150px transition-colors duration-300"></div>
                    )}
                  </div>
                </div>

                <div className="ml-12 bg-white bg-opacity-80 shadow-lg rounded-lg p-6 w-full z-10 transform transition-transform hover:scale-105">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {milestone.title}
                  </h3>
                  <p className="text-indigo-600">{milestone.date}</p>
                  <p className="text-gray-700">{milestone.description}</p>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-indigo-500 rounded-full group-hover:bg-indigo-700"
                            style={{ width: milestone.percentage }}
                          ></div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <span className="text-sm font-semibold text-gray-800">
                          {milestone.marks} Marks
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
