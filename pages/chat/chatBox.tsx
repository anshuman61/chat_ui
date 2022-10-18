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

                <li className="flex justify-start">

                    <div className="flex-shrink-0">
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://xsgames.co/randomusers/avatar.php?g=male"
                            alt="Neil image"
                        />
                    </div>
                    <p className="mb-3 p-4 ml-2 font-light text-gray-200 rounded-xl dark:text-gray-200 w-2/3" style={{ backgroundColor: "#4d426d" }}>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

                </li>
                <li className="flex justify-end">
                    <p className="mb-3 p-4 mr-2 font-light text-gray-200 rounded-xl dark:text-gray-200 w-2/3" style={{ backgroundColor: "#efa985" }}>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                    <div className="flex-shrink-0">
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://xsgames.co/randomusers/avatar.php?g=male"
                            alt="Neil image"
                        />
                    </div>
                </li>
            </ul>
            <div className="pl-2 mx-auto rounded-2xl shadow-xl" style={{ backgroundColor: "#5c4f82" }}>
                <div className="float-left w-11/12">
                    <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                            </svg>

                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Type a message"

                        />
                        <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                            </svg>

                        </button>
                    </div>
                </div>
                <div className="float-right">
                    <button
                        type="button"
                        className="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>

                        <span className="sr-only">Send</span>
                    </button>
                </div>

            </div>
        </>
    );
}
export default ChatBox