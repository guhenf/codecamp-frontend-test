import { api } from '../../actions/api'
import { useState } from 'react'
import { EditProps } from '../../interfaces'
import { ModalContainer, StyledButton, StyledForm } from './style'
import {
	StyledArea,
	StyledDiv,
	StyledH3,
	StyledInput,
	StyledLabel,
} from '../tags'
import { StyledP } from '../Posts/style'

const EditModal = ({
	openEditModal,
	setOpenEditModal,
	targetId,
	content,
	title,
}: EditProps) => {
	const [newData, setNewData] = useState({ title, content })

	if (!openEditModal) return null

	const editPost = (targetId: number) => {
		api
			.patch(`/careers/${targetId}/`, newData)
			.then(() => setOpenEditModal(false))
		console.log(newData)
	}

	return (
		<ModalContainer>
			<StyledDiv style={{ marginTop: 80, height: 285 }}>
				<StyledH3>Edit Item</StyledH3>
				<StyledForm onSubmit={(e) => e.preventDefault()}>
					<StyledLabel>Title</StyledLabel>
					<StyledInput
						type="text"
						placeholder="Edit your title"
						defaultValue={title}
						onChange={(e) => setNewData({ ...newData, title: e.target.value })}
					/>
					<StyledLabel>Content</StyledLabel>
					<StyledArea
						placeholder="Edit your content"
						defaultValue={content}
						onChange={(e) => setNewData({ ...newData, content: e.target.value })}
					></StyledArea>
					<div>
						<StyledButton
							style={{ marginTop: 15 }}
							onClick={() => {
								editPost(targetId)
							}}
						>
							Save
						</StyledButton>
					</div>
				</StyledForm>
			</StyledDiv>
		</ModalContainer>
	)
}

export default EditModal
