const ExamReg = require('../models/ExamRegmodel');
const Student = require('../models/Student.js');

const registerForExam = async (req, res) => {
    const studentId = req.studentId; 
    const { year, semester, paperNames } = req.body;

    if (!year || !semester || !Array.isArray(paperNames)) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const student = await Student.findById(studentId);
        if (!student) return res.status(404).json({ message: "Student not found" });

        const registrationNumber = student.registrationNumber;

        const newExamReg = await ExamReg.create({
            studentId,
            registrationNumber,
            year,
            semester,
            paperNames
        });

        res.status(201).json({ message: "Exam registered", exam: newExamReg });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

module.exports = { registerForExam }