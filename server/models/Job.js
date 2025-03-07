import mongoose from "mongoose"
const Schema = mongoose.Schema

const Job = new Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String },
    description: { type: String, maxlength: 250, default: "No Description" },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)

export default Job