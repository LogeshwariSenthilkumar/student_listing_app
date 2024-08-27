const { default: mongoose } = require("mongoose");
const mongooese = require("mongoose");

const studentSchema = new mongooese.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  regno: {
    type: String,
    required: true,
  },
  DateofBirth: {
    type: Date,
    required: true,
  },
  departmentid: {
    type: mongoose.Schema.Types.ObjectId,ref: 'Department',
    required: true,
  },
});

const Student = mongooese.model("Student", studentSchema);

module.exports = Student;