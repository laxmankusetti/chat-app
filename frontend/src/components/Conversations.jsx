import useGetConversations from "../hooks/useGetConversations.js"
import Conversation from "./Conversation.jsx"


const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  
  return (
    <div className="flex flex-col">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={idx === (conversations.length - 1)}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  )
}

export default Conversations
