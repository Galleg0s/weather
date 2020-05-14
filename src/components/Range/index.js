import React from "react"
import PropTypes from "prop-types"
import InputRange from "react-input-range"
import { Paragraph } from "../ui"
import { StyledRange, Wrapper } from "./styles"
import formatTemperature from "../../utils"

const Range = ({ temperature, handleRangeChange, title }) => {
	return (
		<Wrapper>
			<Paragraph paddings="0 0 12px 0">{title}</Paragraph>
			<StyledRange>
				<InputRange
					step={1}
					maxValue={40}
					minValue={-20}
					value={temperature}
					formatLabel={formatTemperature}
					onChange={degrees => handleRangeChange(degrees)}
				/>
			</StyledRange>
		</Wrapper>
	)
}

Range.propTypes = {
	temperature: PropTypes.number.isRequired,
	handleRangeChange: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
}

export default Range
