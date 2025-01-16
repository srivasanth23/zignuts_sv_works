const { mongoose, Schema } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slugName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnailImage: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
