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
    <div className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Timeline
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Here's a brief timeline of our project's key milestones.
        </p>
        <div className="py-10">
          {/* timeline */}
          <div className="relative">
            {milestones.map((milestone, index) => (
              <div key={index} className="mb-8 pb-3">
                <div className="flex items-center mb-2">
                  <div className="bg-indigo-500 rounded-full h-9 w-9 flex items-center justify-center z-50">
                    <span className="text-sm font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {milestone.title}
                    </h3>
                    <p className="text-indigo-600">{milestone.date}</p>
                  </div>
                </div>
                <div className="ml-12">
                  <p className="text-gray-700">{milestone.description}</p>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-indigo-500 rounded-full"
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
            <div
              className="border-r-2 border-indigo-500 absolute h-full top-0 z-0 mt-4 "
              style={{ left: "17px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
