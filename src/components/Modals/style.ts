import styled from 'styled-components'

export const ModalContainer = styled.div`
	background: rgba(150, 150, 150, 0.8);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;

	div {
		div {
			display: flex;
			justify-content: end;
			gap: 1em;
		}
	}
`

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`

export const StyledButton = styled.button`
	background: var(--white);
	border: 1.5px solid var(--black);

	width: 5em;

	padding: 0.1em 0.7em;
	cursor: pointer;
`
