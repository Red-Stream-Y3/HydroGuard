const technologies = [
  { name: "Arduino", src: "src/assets/technology/arduino.svg" },
  { name: "AWS", src: "src/assets/technology/aws.svg" },
  { name: "Colab", src: "src/assets/technology/colab.svg" },
  { name: "Docker", src: "src/assets/technology/docker-4.svg" },
  { name: "Express", src: "src/assets/technology/express.svg" },
  { name: "Flask", src: "src/assets/technology/flask.svg" },
  { name: "JavaScript", src: "src/assets/technology/javascript.svg" },
  { name: "MongoDB", src: "src/assets/technology/mongodb.svg" },
  { name: "Node.js", src: "src/assets/technology/nodejs.svg" },
  { name: "Python", src: "src/assets/technology/python.svg" },
  { name: "React", src: "src/assets/technology/react.svg" },
  { name: "TensorFlow", src: "src/assets/technology/tensorflow.svg" },
  { name: "Vite.js", src: "src/assets/technology/vitejs.svg" },
];

const TechologyCloud = () => {
  return (
    <div className="bg-slate-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Cutting-Edge Technologies
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore the powerful technologies we use to build modern solutions.
        </p>
        <div className="mx-auto mt-12 grid max-w-lg grid-cols-4 items-center gap-x-12 gap-y-12 sm:max-w-xl sm:grid-cols-6 lg:max-w-none lg:grid-cols-5">
          {technologies.map((tech) => (
            <img
              key={tech.name}
              alt={tech.name}
              src={tech.src}
              className="col-span-2 max-h-16 w-full object-contain transition-transform duration-300 hover:scale-125 lg:col-span-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechologyCloud;
