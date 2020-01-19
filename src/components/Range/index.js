import React from "react"
import InputRange from "react-input-range"
import styled from "styled-components"
import Paragraph from "../Paragraph"
import "./styles.css"

const Wrapper = styled.div`
	margin-left: auto;
`

class Range extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			value: 5,
		}
	}

	render() {
		return (
			<Wrapper>
				<Paragraph paddings="0 0 12px 0">Где сейчас теплее, чем</Paragraph>
				<InputRange
					step={1}
					maxValue={40}
					minValue={-10}
					value={this.state.value}
					formatLabel={value => (value > 0 ? `+${value} ℃	` : `${value} ℃`)}
					onChange={value => this.setState({ value })}
					onChangeComplete={value => console.log(value)}
				/>
			</Wrapper>
		)
	}
}

export default Range
