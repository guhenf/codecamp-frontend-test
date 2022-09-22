import styled from 'styled-components'
import { ButtonProps } from '../../interfaces'

export const StyledDiv = styled.div`
	background: var(--white);
	width: 480px;
	height: 200px;
	padding: 2em;
	border: 1px solid var(--secundary-gray);
`

export const StyledButton = styled.button<ButtonProps>`
	background: ${(props) =>
		props.empty ? 'var(--primary-gray)' : 'var(--black)'};
	color: var(--white);
	padding: 5px 25px;
	position: absolute;
	right: 0;
	border: none;
	cursor: pointer;
`

export const StyledH3 = styled.h3`
	font-weight: bold;
	text-align: left;

	margin-bottom: 1em;
`

export const StyledInput = styled.input`
	background: #ffffff;
	border: var(--secundary-gray) 1.5px solid;
	border-radius: 4px;
	padding: 0.3em;
	width: 100%;
`
export const StyledArea = styled.textarea`
	background: #ffffff;
	border: var(--secundary-gray) 1.5px solid;
	border-radius: 4px;
	padding: 0.3em;
	height: 6em;
	width: 100%;
`

export const StyledLabel = styled.label`
	font-size: small;
	text-align: left;
`
