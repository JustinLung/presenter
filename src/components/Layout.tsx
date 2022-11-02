import Header from './Header'
import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface layoutProps {
	headerTitle?: string
	children: ReactNode
}

export default function Layout({ headerTitle, children }: layoutProps) {
	return (
		<>
			<Box display="grid" gridTemplateRows="5rem 1fr" minH="100vh">
				<Header headerTitle={headerTitle} />
				<Box as="main">{children}</Box>
			</Box>
		</>
	)
}
