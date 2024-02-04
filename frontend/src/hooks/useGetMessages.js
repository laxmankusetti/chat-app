import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation";
// import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversations } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
        setLoading(true)
      try {
        const res = await fetch(`/api/message/${selectedConversations._id}`)
        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        setMessages(data)
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }

    if(selectedConversations?._id) getMessages();
  }, [selectedConversations?._id, setMessages])

  return { loading, messages }

}

export default useGetMessages
