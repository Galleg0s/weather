import styled from "styled-components"

const Paragraph = styled.p`
  font-size: ${props => (props.fontSize ? props.fontSize : 16)},
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${props => (props.margin ? props.margin : 0)};
  padding: ${props => (props.padding ? props.padding : 0)};
`

export default Paragraph
