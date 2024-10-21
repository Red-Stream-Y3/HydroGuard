import React from "react";
import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/24/outline";

const ContactUs = () => {
  const teamMembers = [
    {
      name: "Sachini Lekamge",
      phone: "+94 760113714",
      email: "sachini.lekamge@gmail.com",
    },
    {
      name: "Navod Weerawarna",
      phone: "+94 764441458",
      email: "navodveduth@gmail.com",
    },
    {
      name: "Dinushka Samaranayake",
      phone: "+94 776283129",
      email: "dinushkasam@gmail.com",
    },
    {
      name: "Janindu Dissanayake",
      phone: "+94 769392692",
      email: "janindu001@gmail.com",
    },
  ];

  return (
    <div id="contact-us" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We are here to help you. Please reach out to us for any queries or
          assistance.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <div className="mt-4">
                <div className="flex items-center">
                  <a
                    href={`tel:${member.phone}`}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {member.phone}
                  </a>
                </div>
                <div className="flex items-center mt-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <AtSymbolIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <span>{member.email}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
