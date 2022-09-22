import { useEffect, useState } from 'react'
import { StyledInput } from '../input'
import { StyledDiv, StyledForm, StyledLabel, StyledP } from './style'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../button'

export const SignUp = () => {
	const navigate = useNavigate()

	const [empty, setEmpty] = useState(true)
	const [username, setUsername] = useState('')

	const handleSubmit = (event: any): void => {
		event.preventDefault()
		// precisarei do username na pagina de posts
		// localStorage.setItem('codeleapUsername', username)
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
			<StyledP>Welcome to CodeLeap Network!</StyledP>
			<StyledForm onSubmit={handleSubmit}>
				<StyledLabel>Please enter your username</StyledLabel>
				<StyledInput
					type="text"
					placeholder="John Doe"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<StyledButton type="submit" disabled={empty} empty={empty}>
					ENTER
				</StyledButton>
			</StyledForm>
		</StyledDiv>
	)
}
