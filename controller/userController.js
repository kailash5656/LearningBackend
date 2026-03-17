const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    //Destructing form / json data
    const { firstName, lastName, email, password } = req.body;
    try {
        
        if(!firstName || !lastName || !email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const existingUser = await User.findOne({'email': email});
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exist.."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName, lastName, email, password: hashedPassword
        })

        await newUser.save();
        const token = jwt.sign({
            id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
        }, process.env.JWT_SECRET, {expiresIn: "1d" } )
        return res.status(201).json({
            success: true,
            message: "User Registered Successfullly!!",
            token,
            newUser
        });



    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Error while registering is ${error}`,
        });
    }
} 

module.exports = {
    register
}