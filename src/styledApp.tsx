import styled from 'styled-components'

interface Props {
	src: any
	react?: any
}

export const StyledImg = styled.img<Props>`
	height: 12em;
	padding: 1.5em;
	will-change: filter;

	:hover {
		filter: ${(props) =>
			props.react
				? 'drop-shadow(0 0 2em #61dafbaa)'
				: 'drop-shadow(0 0 2em #646cffaa)'};
	}
`

export const StyledDiv = styled.div`
	padding: 2em;
`
export const StyledP = styled.p`
	color: #888;
`
