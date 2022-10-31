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
			gap="1rem"
			justifyContent="flex-start"
			listStyleType="none"
			bgColor="darkgrey"
			h="100%"
			m="0"
			{...rest}>
			{children}
		</UnorderedList>
	)
}
