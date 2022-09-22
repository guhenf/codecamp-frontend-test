import styled from 'styled-components'

export const StyledMain = styled.main`
	background: var(--white);
	height: 100vh;
	width: 550px;

	display: flex;
	flex-direction: column;
	align-items: center;
`

export const StyledHeader = styled.header`
	background: var(--black);
	width: 550px;
	height: 3em;

	position: fixed;
	top: 0;

	h1 {
		font-size: medium;
		color: var(--white);
		line-height: 3em;
		text-align: left;
		margin-left: 40px;
	}
`

export const StyledPostForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 480px;
	height: 295px;
	border: 1.5px solid var(--secundary-gray);
	border-radius: 2px;

	padding: 1em;

	position: relative;
`
