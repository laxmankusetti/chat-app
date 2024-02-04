import { useAuthContext } from "../context/AuthContext"
import { extractTime } from "../utils/extractTime.js";
import useConversation from "../zustand/useConversation.js";

const Message = ({ message }) => {

  const { authUser } = useAuthContext();
  const { selectedConversations } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';

  const formattedTime = extractTime(message.createdAt);

  const profilePic = fromMe ? authUser.profilePic : selectedConversations?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-sky-500' : '';

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src={profilePic} alt={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer flex items-center gap-1 text-xs opacity-50 text-white font-semibold">{formattedTime}</div>
    </div>
  )
}

export default Message
