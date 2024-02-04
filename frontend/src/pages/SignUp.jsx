import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox.jsx"
import { useState } from "react";
import useSignUp from "../hooks/useSignup.js";



const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName : '',
    username : '',
    password : '',
    confirmPassword : '',
    gender : '',
  });

  const { signup, loading } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
     <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl text-center font-semibold text-gray-300">
        SignUp
        <span className="text-black"> ChatApp</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Full Name</span>
          </label>
          <input
           type="text" 
           placeholder="Enter Full Name" 
           className="input input-bordered w-full h-10"
           value={inputs.fullName}
           onChange={(e) => {setInputs({ ...inputs, fullName : e.target.value })}}
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Username</span>
          </label>
          <input
           type="text" 
           placeholder="Enter Username" 
           className="input input-bordered w-full h-10" 
           value={inputs.username}
           onChange={(e) => {setInputs({ ...inputs, username : e.target.value })}}
          />
        </div>

        <div>
          <label className={`label p-2`}>
            <span className="text-base label-text">Password</span>
          </label>
          <input
           type="password" 
           placeholder="Enter Password" 
           className="input input-bordered w-full h-10"
           value={inputs.password}
           onChange={(e) => {setInputs({ ...inputs, password : e.target.value })}}
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Confirm Password</span>
          </label>
          <input
           type="password" 
           placeholder="Enter confirm Password" 
           className="input input-bordered w-full h-10"
           value={inputs.confirmPassword}
           onChange={(e) => {setInputs({ ...inputs, confirmPassword : e.target.value })}}
          />
        </div>
        <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
        <Link to="/login" className="hover:underline hover:text-gray-300 inline-block text-sm mt-3">
          Already have an account?
        </Link>
        <div>
          <button className="btn btn-block btn-sm mt-2" disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span> : 'Sign Up'}
          </button>
        </div>
      </form>
     </div>
    </div>
  )
}

export default SignUp
