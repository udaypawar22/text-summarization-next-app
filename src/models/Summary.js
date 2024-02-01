const mongoose = require("mongoose");
const { Schema } = mongoose;
const summarySchema = new Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    input: { type: String, required: true },
    summary: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Summary ||
  mongoose.model("Summary", summarySchema);
