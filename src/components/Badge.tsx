import { Box } from '@chakra-ui/react'
import { ColorScheme } from '@lib/generated/sdk'
import { ReactNode } from 'react'

interface BadgeProps {
	colors: { bgColor: string; color: string }
	children: ReactNode
}

export function Badge(props: BadgeProps) {
	const { colors } = props

	return (
		<Box
			px="3%"
			py="1%"
			mb="2.5%"
			fontSize="1vw"
			display="inline-flex"
			justifyContent="center"
			alignItems="center"
			bgColor={colors.color}
			color={colors.bgColor}
			borderRadius="2rem">
			{props.children}
		</Box>
	)
}
