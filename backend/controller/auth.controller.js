import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if(password !== confirmPassword ){
            return res.status(400).json({
                error : 'Passwords does not match'
            })
        }
        const user = await User.findOne({ username });

        if(user){
            return res.status(400).json({
                error : 'Username already exists!!!'
            })
        }
        const hashedPassword = bcrypt.hashSync(String(password), 10);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password : hashedPassword,
            gender,
            profilePic : gender === 'male' ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();
            res.status(201).json({
                _id : newUser._id,
                fullName : newUser.fullName,
                username : newUser.username,
                profilePic : newUser.profilePic
            })
        }else{
            res.status(400).json("Invalid user details")
        }

    } catch (error) {
        console.log('error in signup controller ', error)
        res.status(500).json("internal server error")
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = bcrypt.compareSync(password, user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error : 'Invalid username or password!!!'})
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id : user._id,
            fullName : user.fullName,
            username : user.username,
            profilePic : user.profilePic
        })

    } catch (error) {
        console.log('error in login controller ', error)
        res.status(500).json("internal server error")
    }
}

export const logout = (req, res) => {
    try {
        res.cookie('jwt', '', { maxAge : 0 });
        res.status(200).json('Loggedout Successful')
    } catch (error) {
        console.log('error in login controller ', error)
        res.status(500).json("internal server error")
    }
}