import mongoose, { Document } from "mongoose";

export interface Remind {
  company: string;
  startDate: string;
  endDate: string;
  content: string;
}
export interface RemindDoc extends Remind, Document {
  createdAt: Date;
  updatedAt: Date;
}

const remindScema = new mongoose.Schema<RemindDoc>(
  {
    company: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

export const RemindModel =
  mongoose.models.Remind || mongoose.model("Remind", remindScema, "remind");
