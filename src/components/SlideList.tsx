import { ListProps, UnorderedList } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface SlideListProps extends ListProps {
	children: ReactNode
}

export default function SlideList(props: SlideListProps) {
	const { children, ...rest } = props
	return (
		<UnorderedList
			py="1rem"
			display="flex"
			flexDir="column"
			alignItems="center"
			gap="2rem"
			justifyContent="flex-start"
			listStyleType="none"
			bgColor="darkgrey"
			h="calc(100vh - 5rem)"
			__css={{
				'&::-webkit-scrollbar': {
					width: '5px',
				},
				'&::-webkit-scrollbar-track': {
					bgColor: 'transparent',
				},
				'&::-webkit-scrollbar-thumb': {
					bgColor: 'purple',
				},
			}}
			m="0"
			overflow="auto"
			{...rest}>
			{children}
		</UnorderedList>
	)
}
