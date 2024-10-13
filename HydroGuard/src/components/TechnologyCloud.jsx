import arduinoImg from "../assets/technology/arduino.svg";
import awsImg from "../assets/technology/aws.svg";
import cppImg from "../assets/technology/c++.svg";
import colabImg from "../assets/technology/colab.svg";
import dockerImg from "../assets/technology/docker-4.svg";
import expressImg from "../assets/technology/express.svg";
import flaskImg from "../assets/technology/flask.svg";
import javascriptImg from "../assets/technology/javascript.svg";
import mongodbImg from "../assets/technology/mongodb.svg";
import nodejsImg from "../assets/technology/nodejs.svg";
import pythonImg from "../assets/technology/python.svg";
import reactImg from "../assets/technology/react.svg";
import tailwindImg from "../assets/technology/tailwind.svg";
import tensorflowImg from "../assets/technology/tensorflow.svg";
import vitejsImg from "../assets/technology/vitejs.svg";

const technologies = [
  { name: "Arduino", src: arduinoImg },
  { name: "AWS", src: awsImg },
  { name: "C++", src: cppImg },
  { name: "Google Colab", src: colabImg },
  { name: "Docker", src: dockerImg },
  { name: "Express", src: expressImg },
  { name: "Flask", src: flaskImg },
  { name: "JavaScript", src: javascriptImg },
  { name: "MongoDB", src: mongodbImg },
  { name: "Node.js", src: nodejsImg },
  { name: "Python", src: pythonImg },
  { name: "React", src: reactImg },
  { name: "Tailwind CSS", src: tailwindImg },
  { name: "TensorFlow", src: tensorflowImg },
  { name: "Vite.js", src: vitejsImg },
];

const TechnologyCloud = () => {
  return (
    <div id="technologies" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Cutting-Edge Technologies
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore the powerful technologies we use to build modern solutions.
        </p>
        <div className="mx-auto mt-12 grid max-w-lg grid-cols-4 items-center gap-x-12 gap-y-12 sm:max-w-xl sm:grid-cols-6 lg:max-w-none lg:grid-cols-8">
          {technologies.map((tech) => (
            <div
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110"
              key={tech.name}
            >
              <div className="flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white shadow-md">
                <img
                  alt={tech.name}
                  src={tech.src}
                  className="w-10 h-10 lg:h-14 lg:w-14 object-contain"
                />
              </div>
              <p className="mt-3 text-xs lg:text-sm font-medium leading-6 text-gray-900 whitespace-nowrap">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyCloud;
