import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useSignUp = () => {

    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });

        if(!success) return

        setLoading(true)

        try {
            const res = await fetch('/api/auth/signup', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({fullName, username, password, confirmPassword, gender})
            })

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);
            
        } catch (error) {
            console.log(error.message)
        }finally{
            setLoading(false)
        }

    }

    return { signup, loading }
}

export default useSignUp;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error('Please fill in all the details!');
        return false;
    }

    if(password !== confirmPassword){
        toast.error('Passwords doen not match!!!');
        return false;
    }

    if(password.length < 6){
        toast.error('Password length should be 6 or more characters!');
    }

    return true
}