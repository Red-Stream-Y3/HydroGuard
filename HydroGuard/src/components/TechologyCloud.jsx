const technologies = [
  { name: "Arduino", src: "src/assets/technology/arduino.svg" },
  { name: "AWS", src: "src/assets/technology/aws.svg" },
  { name: "C++", src: "src/assets/technology/c++.svg" },
  { name: "Google Colab", src: "src/assets/technology/colab.svg" },
  { name: "Docker", src: "src/assets/technology/docker-4.svg" },
  { name: "Express", src: "src/assets/technology/express.svg" },
  { name: "Flask", src: "src/assets/technology/flask.svg" },
  { name: "JavaScript", src: "src/assets/technology/javascript.svg" },
  { name: "MongoDB", src: "src/assets/technology/mongodb.svg" },
  { name: "Node.js", src: "src/assets/technology/nodejs.svg" },
  { name: "Python", src: "src/assets/technology/python.svg" },
  { name: "React", src: "src/assets/technology/react.svg" },
  { name: "Tailwind CSS", src: "src/assets/technology/tailwind.svg" },
  { name: "TensorFlow", src: "src/assets/technology/tensorflow.svg" },
  { name: "Vite.js", src: "src/assets/technology/vitejs.svg" },
];

const TechologyCloud = () => {
  return (
    <div className="py-6 lg:py-16">
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

export default TechologyCloud;
