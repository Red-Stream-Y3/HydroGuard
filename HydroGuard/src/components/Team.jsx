import { AtSymbolIcon, LinkIcon } from "@heroicons/react/24/outline";

import sachiniImage from "../assets/Sachini.png";
import navodImage from "../assets/Navod.jpeg";
import dinushkaImage from "../assets/Dinushka.jpeg";
import janinduImage from "../assets/Janindu.jpeg";
import samadhiImage from "../assets/Samadhi.jpeg";
import nelumImage from "../assets/Nelum.jpeg";
import sudathImage from "../assets/Sudath.png";

const people = [
  {
    name: "Sachini Lekamge",
    title: "Group Leader",
    organization: "Sri Lanka Institute of Information Technology",
    department: "Software Engineering",
    imageUrl: sachiniImage,
    linkedInUrl: "https://www.linkedin.com/in/sachini-lekamge/",
    email: "sachini.lekamge@gmail.com",
  },
  {
    name: "Navod Weerawarna",
    title: "Group Member",
    organization: "Sri Lanka Institute of Information Technology",
    department: "Software Engineering",
    imageUrl: navodImage,
    linkedInUrl: "https://www.linkedin.com/in/navodweerawarna/",
    email: "navodveduth@gmail.com",
  },
  {
    name: "Dinushka Samaranayake",
    title: "Group Member",
    organization: "Sri Lanka Institute of Information Technology",
    department: "Software Engineering",
    imageUrl: dinushkaImage,
    linkedInUrl: "https://www.linkedin.com/in/dinushkasam/",
    email: "dinushkasam@gmail.com",
  },
  {
    name: "Janindu Dissanayake",
    title: "Group Member",
    organization: "Sri Lanka Institute of Information Technology",
    department: "Software Engineering",
    imageUrl: janinduImage,
    linkedInUrl: "https://www.linkedin.com/in/janindu-dissanayake/",
    email: "janindu001@gmail.com",
  },
  {
    name: "Mr. Samadhi Rathnayake",
    title: "Supervisor",
    organization: "Sri Lanka Institute of Information Technology",
    department: "Information Technology",
    imageUrl: samadhiImage,
    linkedInUrl: "https://www.linkedin.com/in/samadhi-chathuranga-rathnayake/",
    email: "samadhi.r@sliit.lk",
  },
  {
    name: "Mr. Nelum Amarasena",
    title: "Co-Supervisor",
    organization: "Sri Lanka Institute of Information Technology",
    department: "Information Technology",
    imageUrl: nelumImage,
    linkedInUrl:
      "https://www.linkedin.com/in/nelum-chathuranga-amarasena-703a66176/",
    email: "samadhi.r@sliit.lk",
  },
  {
    name: "Mr. Sudath Hewadeva",
    title: "External Supervisor",
    organization: "Mahaweli Authority, Sri Lanka",
    department: "Civil Engineering",
    imageUrl: sudathImage,
    linkedInUrl: "https://www.linkedin.com/in/sudath-kumara-hewadewa-0a00888a/",
    email: "",
  },
];

const TeamMember = ({ person }) => (
  <li className="flex flex-col items-center hover:shadow-lg transition-shadow bg-white p-4 lg:p-6 rounded-lg shadow-md bg-opacity-70 lg:bg-opacity-50">
    <img
      className="h-32 w-32 rounded-full object-cover"
      src={person.imageUrl}
      alt={person.name}
    />
    <div className="mt-6 text-center">
      <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
        {person.name}
      </h3>
      <p className="text-sm font-semibold leading-6 text-indigo-600">
        {person.title}
      </p>
      <p className="text-sm leading-6 text-gray-500">{person.organization}</p>
      <p className="text-sm leading-6 text-gray-500">{person.department}</p>
      <div className="mt-3 flex justify-center gap-4">
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className="text-gray-400 hover:text-gray-500"
          >
            <AtSymbolIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        )}
        <a
          href={person.linkedInUrl}
          className="text-gray-400 hover:text-gray-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  </li>
);

const Team = () => {
  return (
    <div id="about-us" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our dedicated team, composed of undergraduate students and expert
            supervisors, brings together diverse knowledge and skills to drive
            innovation and research. Together, we are committed to delivering
            impactful solutions and advancing the field through collaborative
            efforts.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 lg:gap-y-12 mt-12"
        >
          {people.slice(0, 4).map((person) => (
            <TeamMember key={person.name} person={person} />
          ))}
        </ul>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 lg:gap-y-12 mt-4 lg:mt-12"
        >
          {people.slice(4).map((person) => (
            <TeamMember key={person.name} person={person} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
