import { Routes, Route } from 'react-router-dom'
import { HomeScreen } from './pages/homeScreen'
import { SignUpScreen } from './pages/signUpScreen'
import GlobalStyle from './globalStyle'

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Routes>
				<Route index element={<SignUpScreen />} />
				<Route path="/dashboard" element={<HomeScreen />} />
			</Routes>
		</div>
	)
}

export default App
