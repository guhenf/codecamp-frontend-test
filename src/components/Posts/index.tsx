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

export const Post = () => {
	return (
		<StyledContainer>
			<StyledTop>
				<h2>Teste de titulo grande para criacao de tela</h2>
				<StyledBox>
					<MdDeleteForever />
					<BiEdit />
				</StyledBox>
			</StyledTop>
			<StyledContent>
				<StyledInfo>
					<span>Username</span>
					<span>22 minutes ago</span>
				</StyledInfo>
				<StyledP>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius modi
					unde atque, debitis, illo facilis placeat molestiae beatae, consectetur
					incidunt voluptatibus obcaecati recusandae tenetur aliquam excepturi iure
					voluptate voluptates.
				</StyledP>
			</StyledContent>
		</StyledContainer>
	)
}
