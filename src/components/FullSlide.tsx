import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface FullSlideProps {
	children: ReactNode
}

export default function FullSlide(props: FullSlideProps) {
	const { children } = props
	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<Box
				w="80%"
				bgColor="purple"
				sx={{
					aspectRatio: '16/9',
				}}>
				{children}
			</Box>
		</Box>
	)
}
