    import UserModel from "../models/user.js"

    export const isAdmin = async(req,res,next) => {
        try {
            const {email} = req.body;

            const userInfo = await UserModel.findOne({email})

            if (userInfo && userInfo.role == "Admin") {
                next();
                //proceed
            }
            else {
                res.status(500).json({
                    message : "Access Denied, Only admin can access this!!"
                })
            }

        } catch (error) {
            res.status(500).json ({
                message : `error occured ${error}`
            })
        }
    }