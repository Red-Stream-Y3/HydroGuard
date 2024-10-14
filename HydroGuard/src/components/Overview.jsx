import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const Overview = () => {
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="literature-survey"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Smart Dam Control
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Modernizing Dam Operations in Sri Lanka
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                The current operational model for dams presents challenges that
                can be addressed by a smart, automated dam control system,
                optimizing safety, efficiency, and flood prevention.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Dam Control System"
            src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
            className="w-48rem max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Predictive Flood Prevention.
                    </strong>
                    Utilizing real-time data and predictive models to
                    proactively release water and prevent flooding.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Automated Dam Control.
                    </strong>
                    Automates gate operations based on fluctuating water levels
                    and weather forecasts, reducing human error.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Real-Time Communication.
                    </strong>
                    A robust warning system to alert downstream communities,
                    preventing property loss and road blockages.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                The smart dam control system integrates IoT, machine learning,
                and real-time data, ensuring a safer and more efficient
                management of dam operations in Sri Lanka.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Transforming Infrastructure.
              </h2>
              <p className="mt-6">
                By implementing this system, dam operations can transition from
                reactive to proactive, safeguarding communities and
                infrastructure from floods and ensuring optimal water resource
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
