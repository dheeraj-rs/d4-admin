import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: String,
  type: String,
  category: String,
  technologies: [String],
  price: Number,
  image: String,
  description: String,
  framework: String,
  rating: Number,
  downloads: Number,
  features: [String],
  screenshots: [String],
  longDescription: String,
  techStack: [String],
  version: String,
  author: String,
  support: String,
  fileSize: String,
  title: String,
  timeToComplete: String,
  estimatedTime: String
}, {
  timestamps: true
});

const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);

export default Item;