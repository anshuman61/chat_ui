import type { NextPage } from "next"
const ContactsSidebar: NextPage = () => {
    return (

        <div className="p-6 mx-auto max-w-md">
            <input
                type="text"
                id="voice-search"
                style={{ backgroundColor: "#5c4f82" }}
                className="w-full mx-auto bg-transparent border  text-white text-sm focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
                placeholder="Search"
            />
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
                                email@flowbite.com
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white dark:text-white">
                            $320
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
                                email@flowbite.com
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white dark:text-white">
                            $3467
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
                                email@flowbite.com
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white dark:text-white">
                            $67
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
                                email@flowbite.com
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white dark:text-white">
                            $2367
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
                                email@flowbite.com
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-white dark:text-white">
                            $367
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default ContactsSidebar;
