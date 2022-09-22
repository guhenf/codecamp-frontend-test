import {
	StyledContent,
	StyledBox,
	StyledContainer,
	StyledInfo,
	StyledP,
	StyledTop,
} from './style'

import { BiEdit } from 'react-icons/Bi'
import { MdDeleteForever } from 'react-icons/Md'
import dayJS from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { PostProp } from '../../interfaces'
import { useState } from 'react'
import DeleteModal from '../Modals/Delete'
import EditModal from '../Modals/Edit'

export const Post = ({ post }: PostProp) => {
	const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
	const [openEditModal, setOpenEditModal] = useState<boolean>(false)
	const [targetId, setTargetId] = useState<number>(0)

	dayJS.extend(relativeTime)
	const time = dayJS(new Date(post.created_datetime)).fromNow()

	return (
		<StyledContainer>
			<DeleteModal
				openDeleteModal={openDeleteModal}
				setOpenDeleteModal={setOpenDeleteModal}
				targetId={targetId}
			/>
			<EditModal
				openEditModal={openEditModal}
				setOpenEditModal={setOpenEditModal}
				targetId={targetId}
				content={post.content}
				title={post.title}
			/>
			<StyledTop>
				<h2>{post.title}</h2>
				{post.username === localStorage.getItem('codeleapUsername') ? (
					<StyledBox>
						<MdDeleteForever
							onClick={() => {
								setOpenDeleteModal(true)
								setTargetId(post.id)
							}}
						/>
						<BiEdit
							onClick={() => {
								setOpenEditModal(true)
								setTargetId(post.id)
							}}
						/>
					</StyledBox>
				) : (
					''
				)}
			</StyledTop>
			<StyledContent>
				<StyledInfo>
					<span>@{post.username}</span>
					<span>{time}</span>
				</StyledInfo>
				<StyledP>{post.content}</StyledP>
			</StyledContent>
		</StyledContainer>
	)
}
