import { Routes, Route } from 'react-router-dom'
import { SignUpScreen } from './pages/signUpScreen'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<SignUpScreen />} />
				<Route path="/dashboard" element={<h1>Dashboard - Home</h1>} />
			</Routes>
		</div>
	)
}

export default App
