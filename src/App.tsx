import { Routes, Route } from 'react-router-dom'
import { HomeScreen } from './pages/homeScreen'
import { SignUpScreen } from './pages/signUpScreen'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<SignUpScreen />} />
				<Route path="/dashboard" element={<HomeScreen />} />
			</Routes>
		</div>
	)
}

export default App
