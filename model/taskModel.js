import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },

    description: {
      type: String,
      required: true
    
    }

  },
  {
    timestamps: true,
  }
);

TaskSchema.plugin(uniqueValidator);
let Task = mongoose.model('Task', TaskSchema);

export default Task;