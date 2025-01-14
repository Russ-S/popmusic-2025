import { Document, Model, model, models, Schema } from 'mongoose'
import { IRecordingInput } from '@/types'

export interface IRecording extends Document, IRecordingInput {
  _id: string
  createdAt: Date
  updatedAt: Date
}

const recordingSchema = new Schema<IRecording>(
  {
    artists: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    coverImage: [String],
    label: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      trim: true,
    },
    year: {
      type: String,
      required: true,
    },
    media: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      default: 0,
    },
    number_in_set: {
      type: String,
      required: true,
    },
    num_tracks: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Recording =
  (models.Recording as Model<IRecording>) ||
  model<IRecording>('Recording', recordingSchema)

export default Recording
