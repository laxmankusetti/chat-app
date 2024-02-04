import { useSocketContext } from "../context/SocketContextProvider";
import useConversation from "../zustand/useConversation";

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversations, setSelectedConversations } = useConversation();
  const isSelected = selectedConversations?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center rounded hover:bg-sky-500 p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversations(conversation)}
      >
        <div className={`avatar ${isOnline === true ? 'online' : ''}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
