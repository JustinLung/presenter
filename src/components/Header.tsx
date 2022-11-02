import { Flex, Link, Text } from '@chakra-ui/react'

interface HeaderProps {
	headerTitle?: string
}

export default function Header(props: HeaderProps) {
	return (
		<Flex
			as="header"
			justify="space-between"
			alignItems="center"
			bg="darkgrey"
			p="1.5rem"
			textDecoration="none">
			<Link href="/" fontWeight="bold" fontSize="1.5rem">
				fdnd.presenter
			</Link>
			{props.headerTitle && <Text fontWeight="bold">{props.headerTitle}</Text>}
			<Link
				href="https://app.hygraph.com/d41469f3ff1b42a5bfeedf09936114d8/master/content/7cc0559de2bb4a689cfe4134fe2af694/view/57bfbe42b87d4f44b1eb4b1f591ff111"
				target="_blank"
				rel="noreferrer"
				bg="purple"
				fontWeight="bold"
				px="1rem"
				py=".5rem"
				borderRadius=".2rem"
				_hover={{ textDecoration: 'none', bg: 'black' }}
				_focus={{ bg: 'black' }}>
				Create Presentation
			</Link>
		</Flex>
	)
}
