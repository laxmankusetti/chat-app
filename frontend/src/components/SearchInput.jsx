import { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import toast from 'react-hot-toast';
import useGetConversations from '../hooks/useGetConversations';
import useConversation from '../zustand/useConversation';

const SearchInput = () => {

  const [search, setSearch] = useState('');
  const { conversations } = useGetConversations();
  const { setSelectedConversations } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search){
      return
    }
    if(search.length < 3){
      return toast.error('Search term must be atleast 3 or more characters long')
    }

    const conversation = conversations.find(c => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversations(conversation)
      setSearch('')
    }else{
      return toast.error('No such user found!!!')
    }
  }

  return (
    <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
      <input
       type="text" 
       placeholder="Search..." 
       className="input input-bordered rounded-full" 
       value={search}
       onChange={(e) => {setSearch(e.target.value)}}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className='w-6 h-6 outline-none'/>
    </button>
    </form>
  )
}

export default SearchInput
