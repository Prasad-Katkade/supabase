import React from 'react'
import DevelopersData from 'data/Developers.json'
import AnnouncementsData from 'data/Announcements.json'

const Developers = () => {
  const iconSections = Object.values(DevelopersData).map((company) => {
    const { text, description, url } = company

    const content = (
      <a
        href="#"
        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
      >
        {/* <!-- Heroicon name: support --> */}
        <svg
          className="flex-shrink-0 h-6 w-6 text-grey-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <div className="ml-4">
          <p className="text-base font-medium text-gray-900">{text}</p>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </a>
    )
    return url ? (
      <a
        key={name}
        href="#"
        className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition ease-in-out duration-150"
      >
        {content}
      </a>
    ) : (
      <div
        key={name}
        className="-m-3 p-3 flex flex-col justify-between rounded-lg transition ease-in-out duration-150"
      >
        {content}
      </div>
    )
  })

  return (
    <React.Fragment>
      <nav
        className="grid gap-y-10 px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
        aria-labelledby="solutionsHeading"
      >
        {iconSections}
      </nav>
      <div className="px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
        <div>
          <h3 className="text-sm font-medium tracking-wide text-gray-500 dark:text-dark-300 uppercase">
            Latest announcements
          </h3>
          <ul className="mt-6 space-y-12">
            {AnnouncementsData.map((caseStudy: any, idx: number) => (
              <li className="flow-root" key={`flyout_case_${idx}`}>
              <a
                href={caseStudy.url}
                className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition ease-in-out duration-150"
              >
                <div className="hidden sm:block flex-shrink-0">
                  <img
                    className="w-32 h-20 object-cover rounded-md"
                    src={caseStudy.imgUrl}
                    alt="caseStudyThumb"
                  />
                </div>
                <div className="min-w-0 flex-1 sm:ml-8">
                  <h4 className="text-base font-medium text-gray-900 dark:text-white truncate">
                    {caseStudy.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-500 dark:text-dark-300">
                    {caseStudy.description}
                  </p>
                </div>
              </a>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Developers
