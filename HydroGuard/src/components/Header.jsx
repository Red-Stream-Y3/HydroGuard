import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#home", current: true },
  {
    name: "Project Scope",
    current: false,
    subItems: [
      { name: "Literature Survey", href: "#literature-survey" },
      { name: "Research Gap", href: "#research-gap" },
      {
        name: "Research Problem & Solution",
        href: "#research-problem-solution",
      },
      { name: "Research Objectives", href: "#research-objectives" },
      { name: "Methodology", href: "#methodology" },
      { name: "Technologies", href: "#technologies" },
    ],
  },
  { name: "Milestones", href: "#milestones", current: false },
  {
    name: "Downloads",
    href: "#downloads",
    current: false,
    subItems: [
      { name: "Reports", href: "#reports" },
      { name: "Presentations", href: "#presentations" },
    ],
  },
  { name: "About Us", href: "#about-us", current: false },
  { name: "Achievements", href: "#achievements", current: false },
  { name: "Contact Us", href: "#contact-us", current: false },
];

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                alt="HydroGuard Logo"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-8"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className={
                      item.current
                        ? "bg-indigo-600 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "text-gray-700 hover:bg-gray-200 hover:text-indigo-600 rounded-md px-3 py-2 text-sm font-medium"
                    }
                  >
                    {item.name}
                  </a>
                  {/* Dropdown for Project Scope */}
                  {item.subItems && (
                    <div className="absolute left-0 z-10 hidden w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={
                item.current
                  ? "bg-indigo-600 text-white block rounded-md px-3 py-2 text-base font-medium"
                  : "text-gray-700 hover:bg-gray-200 hover:text-indigo-600 block rounded-md px-3 py-2 text-base font-medium"
              }
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Header;
