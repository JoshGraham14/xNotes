import mongoose, {model, connect } from "mongoose";

export interface INote {
    content: string
}

const noteSchema = new mongoose.Schema<INote>(
    {
        content: {
            type: String, 
            required: true
        },
    },
    {
        timestamps: true,
    }
)

export const Note = model<INote>('Note', noteSchema)