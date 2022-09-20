import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { StyledDiv, StyledImg, StyledP } from './styledApp'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<StyledImg src="/vite.svg" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<StyledImg react src={reactLogo} alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<StyledDiv>
				<button
					style={{ marginBottom: 24 }}
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</StyledDiv>
			<StyledP>Click on the Vite and React logos to learn more</StyledP>
		</div>
	)
}

export default App
