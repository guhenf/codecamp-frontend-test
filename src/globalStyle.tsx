import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
	--white: #ffffff;
	--black: #000;
	--primary-gray: #cccccc;
	--secundary-gray: #777777;

}

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
	color: #000;
}

#root {
    min-width: 100vw;
    min-height: 100vh;
	margin: 0 auto;
	text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    

	font-size: 16px;
	line-height: 24px;
	font-weight: 400;

	color-scheme: light dark;
	background-color: var(--primary-gray);

	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: 100%;
}

body {
	margin: 0;
	display: flex;
	place-items: center;
	min-width: 320px;
	min-height: 100vh;
}

::-webkit-scrollbar {
    display: none;
}

`
