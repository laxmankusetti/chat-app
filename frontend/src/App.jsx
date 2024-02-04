import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';

function App() {

  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center h-screen p-4">
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'}/>} />
        <Route path='/login' element={authUser ? <Navigate to={'/'}/> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to={'/'}/> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
