import { api } from '../../actions/api'
import { DeleteProps } from '../../interfaces'
import { StyledDiv, StyledH3 } from '../tags'
import { ModalContainer, StyledButton } from './style'

const DeleteModal = ({
	openDeleteModal,
	setOpenDeleteModal,
	targetId,
}: DeleteProps) => {
	if (!openDeleteModal) return null

	const deletePost = (targetId: number) => {
		api.delete(`/careers/${targetId}/`).then((res) => res)
	}

	return (
		<ModalContainer>
			<StyledDiv style={{ height: 120, marginTop: 80 }}>
				<StyledH3>Are you sure you want to delete this item?</StyledH3>
				<div style={{ marginTop: 20 }}>
					<StyledButton onClick={() => setOpenDeleteModal(false)}>
						Cancel
					</StyledButton>
					<StyledButton
						onClick={() => {
							deletePost(targetId)
							setOpenDeleteModal(false)
						}}
					>
						OK
					</StyledButton>
				</div>
			</StyledDiv>
		</ModalContainer>
	)
}

export default DeleteModal
