import type { NextPage } from "next"
const ContactsSidebar: NextPage = () => {
    return (

        <div className="p-6 mx-auto max-w-md">
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    id="voice-search"
                    style={{ backgroundColor: "#5c4f82" }}
                    className="w-full mx-auto bg-transparent border  text-white text-sm focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
                    placeholder="Search"
                />
            </div>


            <ul className="w-full mt-9 p-8 rounded-2xl shadow-xl" style={{ backgroundColor: "#5c4f82" }}>
                <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img
                                className="w-8 h-8 rounded-full"
                                src="https://xsgames.co/randomusers/avatar.php?g=male"
                                alt="Neil image"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate dark:text-white">
                                Neil Sims
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@example.com
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white dark:text-white">
                            <div className="inline-flex justify-center items-center w-6 h-6 text-xs font-bold text-white bg-green-500 rounded-full dark:border-gray-900">20</div>
                        </div>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img
                                className="w-8 h-8 rounded-full"
                                src="https://xsgames.co/randomusers/avatar.php?g=male"
                                alt="Neil image"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate dark:text-white">
                                Bonnie Green
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@example.com
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white dark:text-white">
                            <div className="inline-flex justify-center items-center w-6 h-6 text-xs font-bold text-white bg-green-500 rounded-full dark:border-gray-900">20</div>
                        </div>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img
                                className="w-8 h-8 rounded-full"
                                src="https://xsgames.co/randomusers/avatar.php?g=male"
                                alt="Neil image"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate dark:text-white">
                                Michael Gough
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@example.com
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white dark:text-white">
                            <div className="inline-flex justify-center items-center w-6 h-6 text-xs font-bold text-white bg-green-500 rounded-full dark:border-gray-900">20</div>
                        </div>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img
                                className="w-8 h-8 rounded-full"
                                src="https://xsgames.co/randomusers/avatar.php?g=male"
                                alt="Neil image"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate dark:text-white">
                                Thomas Lean
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@example.com
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white dark:text-white">
                            <div className="inline-flex justify-center items-center w-6 h-6 text-xs font-bold text-white bg-green-500 rounded-full dark:border-gray-900">20</div>
                        </div>
                    </div>
                </li>
                <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img
                                className="w-8 h-8 rounded-full"
                                src="https://xsgames.co/randomusers/avatar.php?g=male"
                                alt="Neil image"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate dark:text-white">
                                Lana Byrd
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@example.com
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white dark:text-white">
                            <div className="inline-flex justify-center items-center w-6 h-6 text-xs font-bold text-white bg-green-500 rounded-full dark:border-gray-900">20</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default ContactsSidebar;
