import { useEffect, useState } from 'react'
import { StyledForm } from './style'
import { useNavigate } from 'react-router-dom'
import {
	StyledButton,
	StyledDiv,
	StyledH3,
	StyledInput,
	StyledLabel,
} from '../tags'

export const SignUp = () => {
	const navigate = useNavigate()

	const [empty, setEmpty] = useState(true)
	const [username, setUsername] = useState('')

	const handleSubmit = (event: any): void => {
		event.preventDefault()
		localStorage.setItem('codeleapUsername', username)
		navigate('/dashboard')
	}

	useEffect(() => {
		if (username === '') {
			setEmpty(true)
		} else {
			setEmpty(false)
		}
	}, [username])

	return (
		<StyledDiv>
			<StyledH3>Welcome to CodeLeap Network!</StyledH3>
			<StyledForm onSubmit={handleSubmit}>
				<StyledLabel style={{ marginBottom: 5 }}>
					Please enter your username
				</StyledLabel>
				<StyledInput
					type="text"
					placeholder="John Doe"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<StyledButton
					style={{ top: 75 }}
					type="submit"
					disabled={empty}
					empty={empty}
				>
					ENTER
				</StyledButton>
			</StyledForm>
		</StyledDiv>
	)
}
