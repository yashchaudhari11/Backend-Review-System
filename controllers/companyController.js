import Company from "../models/Company.js";

export const createCompany = async(req,res) => {
    try {
        const {name,location,industry,email} = req.body;
        
        const companyObj = new Company({
        name,
        location,
        industry,
        email
    })

    const savedcompanyObj = await companyObj.save();

    res.json({
        savedcompanyObj
    })
    } catch (error) {
        console.log(error);
        
        res.json({
            error : `Error occured ${error}`
        })
    }
}

export const getAllCompany = async(req,res) => {
    try {
        const getCompany = await Company.find();
        res.json({
            getCompany
        })
    } catch (error) {
        res.json({
            error : "Cannot fetch Data"
        })
        console.log(error);
    }
}