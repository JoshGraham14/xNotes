import asyncHandler from 'express-async-handler'
import { Response } from 'express'
import { Section, ISection } from '../models/sectionModel'
import { IUserAuthRequest } from '../interfaces'

// @desc    Get sections
// @route   GET /api/sections
// @access  Private
export const getSections = asyncHandler(
	async (req: IUserAuthRequest, res: Response) => {
		const sections = await Section.find({ user: req.user.id })
		res.status(200).json(sections)
	}
)

// @desc    Set section
// @route   POST /api/sections
// @access  Private
export const setSection = asyncHandler(
	async (req: IUserAuthRequest, res: Response) => {
		if (!req.body.name) {
			res.status(400)
			throw new Error('Please add a name field')
		}

		const section = await Section.create({
			name: req.body.name,
			user: req.user.id,
		} as ISection)

		res.status(200).json(section)
	}
)

// @desc    Update Section
// @route   PUT /api/sections/:id
// @access  Private
export const updateSection = asyncHandler(
	async (req: IUserAuthRequest, res: Response) => {
		if (!req.params.id) {
			res.status(400)
			throw new Error('No ID supplied in the URL')
		}

		const section = await Section.findById(req.params.id)

		if (section === null) {
			res.status(404)
			throw new Error('Section not found')
		} else if (`${section.user}` === `${req.user.id}`) {
			const updatedSection = await Section.findByIdAndUpdate(
				req.params.id,
				req.body,
				{
					new: true,
				}
			)
			res.status(200).json(updatedSection)
		} else {
			res.status(401)
			throw new Error('You are not authorized to update this note')
		}
	}
)

// @desc    Delete Section
// @route   DELETE /api/sections/:id
// @access  Private
export const deleteSection = asyncHandler(
	async (req: IUserAuthRequest, res: Response) => {
		if (!req.params.id) {
			res.status(400)
			throw new Error('No ID supplied in the URL')
		}

		const section = await Section.findById(req.params.id)

		if (section === null) {
			res.status(404)
			throw new Error('Section not found')
		} else if (`${section.user}` === `${req.user.id}`) {
			const deletedSection = await Section.findByIdAndDelete(
				req.params.id
			)
			res.status(200).json(deletedSection)
		} else {
			res.status(401)
			throw new Error('You are not authorized to delete this section')
		}
	}
)
