import User from "../models/user.js";

export const createAdmin = async(req,res) => {
    try {
        const {name,email,password} = req.body;
        
        const user = new User({
        name,
        email,
        password,
        role : "Admin"
    })

    const savedUser = await user.save();

    res.json({
        savedUser
    })
    } catch (error) {
        res.json({
            error : `Error occured ${error}`
        })
    }
}

export const createAlummi = async(req,res) => {
    try {
        const {name,email,password} = req.body;
        
        const user = new User({
        name,
        email,
        password,
        role : "Alumni"
    })

    const savedUser = await user.save();

    res.json({
        savedUser
    })
    } catch (error) {
        res.json({
            error : `Error occured ${error}`
        })
    }
}


export const createStudent = async(req,res) => {
    try {
        const {name,email,password} = req.body;
        
        const user = new User({
        name,
        email,
        password,
        role : "Student"
    })

    const savedUser = await user.save();

    res.json({
        savedUser
    })
    } catch (error) {
        res.json({
            error : `Error occured ${error}`
        })
    }
}

export const getAllUsers = async(req,res) => {
    try {
        const getusers = await User.find();
        res.json({
            getusers
        })
    } catch (error) {
        res.json({
            error : "Cannot fetch Data"
        })
        console.log(error);
    }
}