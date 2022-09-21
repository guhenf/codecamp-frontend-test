import styled from 'styled-components'
import { ButtonProps } from '../interfaces'

export const StyledButton = styled.button<ButtonProps>`
	background: ${(props) =>
		props.empty ? 'var(--primary-gray)' : 'var(--black)'};
	color: var(--white);
	padding: 7px 25px;
	position: absolute;
	right: 0;
	top: 5.5em;
	border: none;
	cursor: pointer;
`
