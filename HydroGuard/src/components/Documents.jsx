import { DocumentTextIcon } from "@heroicons/react/24/outline";

const posts = [
  {
    title: "Topic Assessment",
    submittedOn: "2024/02/25",
    type: "group",
    downloadLink: "driveLink1",
  },
  {
    title: "Project Charter",
    submittedOn: "2024/02/25",
    type: "group",
    downloadLink: "driveLink2",
  },
  {
    title: "Project Proposal",
    submittedOn: "2024/03/22",
    type: "individual",
    downloadLink: "driveLink3",
  },
  {
    title: "Status Document I",
    submittedOn: "2024/07/05",
    type: "group",
    downloadLink: "driveLink4",
  },
  {
    title: "Status Document II",
    submittedOn: "2024/08/30",
    type: "group",
    downloadLink: "driveLink5",
  },
  {
    title: "Research Paper",
    submittedOn: "2024/10/13",
    type: "group",
    downloadLink: "driveLink6",
  },
  {
    title: "Final Report",
    submittedOn: "2024/10/13",
    type: "individual",
    downloadLink: "driveLink5",
  },
  {
    title: "Poster",
    submittedOn: "2024/10/13",
    type: "group",
    downloadLink: "driveLink6",
  },
];

const Documents = () => {
  return (
    <div id="documents" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Documents
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Please find all documents related to this project below.
        </p>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {posts.map((post, index) => (
            <article
              key={index}
              className="flex flex-col items-start justify-between border rounded-lg p-6 shadow-md bg-white bg-opacity-50 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-x-2 text-xs">
                <time dateTime={post.submittedOn} className="text-gray-500">
                  {post.submittedOn}
                </time>
                <span
                  className={`relative z-10 rounded-full ${
                    post.type === "group" ? "bg-indigo-400" : "bg-slate-500 bg-"
                  } px-2 py-1 text-xs text-white scale-95`}
                >
                  {post.type === "group" ? "Group" : "Individual"}
                </span>
              </div>
              <div className="group relative mt-4 flex items-center">
                <DocumentTextIcon className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-indigo-600">
                  <a
                    href={post.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </div>
              <a
                href={post.downloadLink}
                className={`mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 ${
                  post.downloadLink === "#"
                    ? "pointer-events-none text-gray-400"
                    : ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
