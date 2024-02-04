import Message from "./Message.jsx";
import useGetMessages from "../hooks/useGetMessages.js";
import MessageSkeleton from "./MessageSkeleton.jsx";
import { useEffect, useRef } from "react";
import useListenMessages from "../hooks/useListenMessages.js";

const Messages = () => {
  const { messages, loading } = useGetMessages();

  useListenMessages();

  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior:'smooth' })
    }, 100)
  }, [messages])

  return (
    <div className="flex-1 px-4 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Start a messzge to start a conversation.</p>
      )}
    </div>
  );
};

export default Messages;
