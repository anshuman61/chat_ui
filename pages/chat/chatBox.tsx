import type { NextPage } from "next"
const ChatBox: NextPage = () => {
    return (
        <>
            <div className="p-6 mx-auto">
                <div className="float-left">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <div className="relative">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                                    alt=""
                                />
                                <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
                            </div>

                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate dark:text-white">
                                Neil Sims
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                Last seen at 09:12 pm
                            </p>
                        </div>
                    </div>

                </div>
                <div className="float-right">
                    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">More</button>
                </div>

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
                        <p className="mb-3 font-light text-gray-200 dark:text-white-200 w-2/3">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                    </div>
                </li>
            </ul>
        </>
    );
}
export default ChatBox