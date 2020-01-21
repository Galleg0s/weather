import React from "react"
import InputRange from "react-input-range"
import Paragraph from "../Paragraph"
import { StyledRange, Wrapper } from "./styles"

const Range = props => {
	return (
		<Wrapper>
			<Paragraph paddings="0 0 12px 0">Где сейчас теплее, чем</Paragraph>
			<StyledRange>
				<InputRange
					step={1}
					maxValue={40}
					minValue={-10}
					value={props.temperature}
					formatLabel={value => (value > 0 ? `+${value} ℃	` : `${value} ℃`)}
					onChange={degrees => props.handleRangeChange(degrees)}
				/>
			</StyledRange>
		</Wrapper>
	)
}

export default Range
