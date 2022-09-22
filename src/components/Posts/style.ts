import styled from 'styled-components'

export const StyledContainer = styled.div`
	border-radius: 2px;
	width: 480px;

	margin-bottom: 1.5em;
`
export const StyledTop = styled.div`
	background: var(--black);

	display: flex;
	justify-content: space-between;
	padding: 0.8em;

	h2 {
		color: var(--white);
		font-size: medium;
	}
`
export const StyledBox = styled.div`
	border: none;
	display: flex;

	svg {
		fill: var(--white);
		width: 1.5em;
		height: 1.5em;

		margin-left: 10px;

		cursor: pointer;
	}
`

export const StyledContent = styled.div`
	border: 1.5px solid var(--secundary-gray);
`

export const StyledInfo = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.5em 1em;

	span:nth-child(2n) {
		color: var(--secundary-gray);
		font-weight: lighter;
	}
	span {
		color: var(--secundary-gray);
		font-weight: bold;
	}
`
export const StyledP = styled.p`
	padding: 1em;
	text-align: justify;
`
