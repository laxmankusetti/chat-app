
const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src="vite.svg" alt="vite" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-sky-500">
        Hey! what is upp!
      </div>
      <div className="chat-footer flex items-center gap-1 text-xs opacity-50 text-white font-semibold">12:42</div>
    </div>
  )
}

export default Message
