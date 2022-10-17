import type { NextPage } from "next"
import Image from "next/image"
import ContactsSidebar from "./contactsSidebar"
import ChatBox from "./chatBox"

const ChatHome: NextPage = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="mx-3 my-2 text-justify font-medium" style={{ color: "#efeef2" }}>
                Next Chat
            </div>

            <div className="mx-auto flex flex-col sm:flex-row mt-10">
                <div className="sm:w-2/5">
                    <ContactsSidebar />
                </div>
                <div className="sm:w-3/5 mx-6">
                    <ChatBox />
                </div>
            </div>

        </section>
    )
}

export default ChatHome