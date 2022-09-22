export interface ButtonProps {
	empty: boolean
}

interface ApiData {
	title: string
	content: string
	username: string
	created_datetime: string
	id: number
}

export interface PostProp {
	post: ApiData
}

export interface EditProps {
	openEditModal: boolean
	setOpenEditModal: (value: boolean) => void
	targetId: number
	content: string
	title: string
}

export interface DeleteProps {
	openDeleteModal: boolean
	setOpenDeleteModal: (value: boolean) => void
	targetId: number
}
