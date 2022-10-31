import Header from './Header'
import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface layoutProps {
	children: ReactNode
}

export default function Layout({ children }: layoutProps) {
	return (
		<>
			<Box display="grid" gridTemplateRows="5rem 1fr" minH="100vh">
				<Header />
				<Box as="main">{children}</Box>
			</Box>
		</>
	)
}
