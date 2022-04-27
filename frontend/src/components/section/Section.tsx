import { ISection } from '../../util/data/dataFunctions'

interface Props {
	section: ISection
}

export const Section = (props: Props) => {
	return (
		<div>
			<h1>{props.section.name}</h1>
		</div>
	)
}
