import WebApp from "../assets/web-app-2.png";

const Hero = () => {
  return (
    <div id="home" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:pt-0">
          <div className=" max-w-md text-center lg:mx-0 lg:flex-auto mx-2 lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              HygroGuard
              <br />
              Smart Dam Control System
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Leverage cutting-edge technology for efficient dam management.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#literature-survey"
                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform transform hover:bg-gray-800 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative h-full">
            <img
              alt="App screenshot"
              src={WebApp}
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-gray-100 shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
