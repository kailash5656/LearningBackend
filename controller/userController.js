const User = require("../model/userModel")

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

        const existingUser = await User.findOne({email: email});
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exist.."
            });
        }

        const newUser = new User({
            firstName, lastName, email, password
        })

        await newUser.save();
        return res.status(201).json({
            success: true,
            message: "User Registered Successfullly!!",
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