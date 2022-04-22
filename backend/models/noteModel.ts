import mongoose, { model } from "mongoose";

export interface INote {
    user: mongoose.Schema.Types.ObjectId
    content: string
}

const noteSchema = new mongoose.Schema<INote>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        content: {
            type: String, 
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Note = model<INote>('Note', noteSchema)