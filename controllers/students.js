const StudentSchema = require("../Models/Student");

exports.getAllStudents = async (req, res) => {
    try {
        let payload = await StudentSchema.find({});
        res.status(200).json({ message: "fetched data", payload });
    } catch (error) {
        res.status(501).json({ message:"SERVER ERROR"})
    }
};
 



exports.getStudent = async (req, res) => {
    try {
        let payload = await StudentSchema.findOne({ _id: req.params.id });
        res.status(200).json({ message: "fetched student" }, payload);
    } catch (error) {
        res.status(501).json({ message: "SERVER ERROR" })
    }
 };
exports.createStudent = async (req, res) => {
    try {
        let { name, std_id, email, courses } = req.body;
        let payload = {
            name,
            std_id,
            email, courses,
        };
        //save payload into database
        let data = await StudentSchema.create(payload);
        res.status(201).json({ message: "successflly student created" });
    } catch (err) {
        console.log(err);
         res.status(501).json({ message: "SERVER ERROR" });
    }
}

exports.updateStudent = async (req, res) => {
    try {
        let { name, std_id, email, courses } = req.body;
        let payload = await StudentSchema.findByIdAndUpdate(
            req, params.id,
            {
                name,
                std_id,
                email,
                courses,
            },
            { new: true }
        );
        await payload.save();
        res.status(201).json({ message: "successfully student updated" }, payload);
    } catch (error) {
        res.status(501).json({ message: "SERVER ERROR" });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        await StudentSchema.findByIdAndUpdate(req.params.id);
        res.status(200).json({ message: "successfully student deleted" });
    } catch (error) {
        res.status(501).json({ message: "SERVER ERROR" });
    }
}