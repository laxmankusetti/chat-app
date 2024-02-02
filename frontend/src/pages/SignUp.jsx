import GenderCheckBox from "./GenderCheckBox.jsx"


const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
     <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl text-center font-semibold text-gray-300">
        SignUp
        <span className="text-black"> ChatApp</span>
      </h1>
      <form>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Full Name</span>
          </label>
          <input type="text" placeholder="Enter Full Name" className="input input-bordered w-full h-10" />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Username</span>
          </label>
          <input type="text" placeholder="Enter Username" className="input input-bordered w-full h-10" />
        </div>

        <div>
          <label className="label p-2">
            <span className="text-base label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-10" />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-10" />
        </div>
        <GenderCheckBox />
        <a href="#" className="hover:underline hover:text-gray-300 inline-block text-sm mt-3">
          Already have an account?
        </a>
        <div>
          <button className="btn btn-block btn-sm mt-2">Sign Up</button>
        </div>
      </form>
     </div>
    </div>
  )
}

export default SignUp
