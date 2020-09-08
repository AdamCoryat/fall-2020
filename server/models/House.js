import mongoose from "mongoose"
const Schema = mongoose.Schema;

const House = new Schema(
  {
    price: { type: Number, required: true }
  }
)

export default House;