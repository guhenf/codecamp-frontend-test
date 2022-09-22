import { useState } from 'react'
import { Post } from '../Posts'
import {
	StyledArea,
	StyledButton,
	StyledH3,
	StyledInput,
	StyledLabel,
} from '../tags'
import { StyledHeader, StyledMain, StyledPostForm } from './style'

export const Dashboard = () => {
	const [empty, setEmpty] = useState(true)
	const username = localStorage.getItem('username')

	return (
		<StyledMain>
			<StyledHeader>
				<h1>CodeLeap Network</h1>
			</StyledHeader>
			<section style={{ marginTop: 80 }}>
				<StyledPostForm>
					<StyledH3>What's on your mind?</StyledH3>
					<StyledLabel>Title</StyledLabel>
					<StyledInput placeholder="Hello world" />
					<StyledLabel style={{ marginTop: 10 }}>Content</StyledLabel>
					<StyledArea placeholder="Content here" />

					<StyledButton
						style={{ bottom: 15, right: 15 }}
						type="submit"
						disabled={empty}
						empty={empty}
					>
						CREATE
					</StyledButton>
				</StyledPostForm>
			</section>
			<article style={{ marginTop: 25, maxHeight: 600, overflow: 'scroll' }}>
				<Post />
			</article>
		</StyledMain>
	)
}
