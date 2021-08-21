import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    section: {
        type: String,
        default: 'A'
    }

});

const Student = mongoose.model('Student', studentSchema);

export default Student;