import { useEffect, useState } from 'react'
import { api } from '../../actions/api'
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
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [allPosts, setAllPosts] = useState([])
	const username = localStorage.getItem('codeleapUsername')

	useEffect(() => {
		if (title === '' || content === '') {
			setEmpty(true)
		} else {
			setEmpty(false)
		}
	}, [title, content])

	useEffect(() => {
		api.get('/careers/').then((res) => {
			setAllPosts(res.data.results)
		})
	}, [allPosts])

	const createPost = (username: string, title: string, content: string) => {
		const postContent = { username, title, content }
		api.post('/careers/', postContent)
		setTitle('')
		setContent('')
	}

	if (!username) {
		throw new Error('Required')
	}

	return (
		<StyledMain>
			<StyledHeader>
				<h1>CodeLeap Network</h1>
			</StyledHeader>
			<section style={{ marginTop: 80 }}>
				<StyledPostForm
					onSubmit={(e) => {
						e.preventDefault()
						createPost(username, title, content)
					}}
				>
					<StyledH3>What's on your mind?</StyledH3>
					<StyledLabel>Title</StyledLabel>
					<StyledInput
						type="text"
						placeholder="Hello world"
						onChange={(e) => setTitle(e.target.value)}
					/>
					<StyledLabel style={{ marginTop: 10 }}>Content</StyledLabel>
					<StyledArea
						placeholder="Content here"
						onChange={(e) => setContent(e.target.value)}
					/>

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
				{allPosts.map((post, index) => {
					return <Post post={post} key={index} />
				})}
			</article>
		</StyledMain>
	)
}
