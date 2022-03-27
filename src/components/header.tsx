import { Link } from 'gatsby';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { classNames } from './../util';

type page = {
  link: string;
  name: string;
};

const pages: page[] = [
  { link: '/', name: 'LITC' },
  { link: '/faq', name: 'FAQ' },
  { link: '/location', name: 'Location' },
  { link: '/speakers', name: 'Speakers' },
  { link: '/sponsors', name: 'Sponsors' },
];

const getLinkAttributes = (isCurrent: boolean, classNames: string) => {
  return {
    className: classNames,
    'aria-current': isCurrent ? 'page' : undefined,
  };
};

const Header = (): JSX.Element => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {pages.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        getProps={({ isCurrent }) =>
                          getLinkAttributes(
                            isCurrent,
                            classNames(
                              isCurrent
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )
                          )
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {pages.map((page) => (
                <Disclosure.Button
                  key={page.name}
                  as={Link}
                  to={page.link}
                  getProps={({ isCurrent }: { isCurrent: boolean }) =>
                    getLinkAttributes(
                      isCurrent,
                      classNames(
                        isCurrent
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )
                    )
                  }
                >
                  {page.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
