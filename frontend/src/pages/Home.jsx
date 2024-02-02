import MessagesContainer from "../components/MessagesContainer.jsx"
import Sidebar from "../components/Sidebar.jsx"


const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdropblur-lg bg-opacity-0">
      <Sidebar />
      <MessagesContainer />
    </div>
  )
}

export default Home
