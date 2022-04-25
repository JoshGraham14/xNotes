import mongoose, { model } from 'mongoose'

export interface ISection {
	user: mongoose.Schema.Types.ObjectId
	name: string
}

const sectionSchema = new mongoose.Schema<ISection>(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		name: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

export const Section = model<ISection>('Section', sectionSchema)
