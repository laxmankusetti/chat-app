import { useEffect } from "react";
import useConversation from "../zustand/useConversation.js";
import MessageInput from "./MessageInput.jsx";
import Messages from "./Messages.jsx";
import { TiMessages } from 'react-icons/ti';
import { useAuthContext } from "../context/AuthContext.jsx";

const MessagesContainer = () => {
  const { selectedConversations, setSelectedConversations } = useConversation();

  useEffect(() => {
    return () => setSelectedConversations(null)
  }, [setSelectedConversations])
  return (
    <div className="flex flex-col md:min-w-[450px]">
      { !selectedConversations ? <NoChatSelected /> 
      : 
      <>
        <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold">
                {selectedConversations.fullName}
            </span>
        </div>
        <Messages />
        <MessageInput />
      </>
      }
    </div>
  )
}

export default MessagesContainer

const NoChatSelected = () => {

  const { authUser } = useAuthContext();

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>👋 Welcome {authUser.fullName}  </p>
        <p>Please select a chat to start!</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  )
}
