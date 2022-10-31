import { Badge } from '@/components/Badge'
import { getColorScheme } from '@/helpers/getColorScheme'
import { Box } from '@chakra-ui/react'
import { SlideBasic } from '@lib/generated/sdk'

interface SlideBasicProps {
	data: SlideBasic
}

export function SlideBasic(props: SlideBasicProps) {
	const { data } = props

	return (
		<Box p="2%">
			{data.badge ? (
				<Badge colors={getColorScheme(data.colorScheme)}>{data.badge}</Badge>
			) : null}
			<Box
				pl="4%"
				sx={{
					'> *': {
						fontSize: '1.8vw',
						marginBottom: '2%',
					},
					ul: {
						listStylePos: 'inside',
						div: {
							display: 'inline',
						},
					},
				}}
				dangerouslySetInnerHTML={{ __html: data.contents.html }}></Box>
		</Box>
	)
}

export function SlideBasicThumbnail() {
	return (
		<Box p="2">
			<Box
				w="2rem"
				h="0.5rem"
				bgColor="currentColor"
				borderRadius="3rem"
				mb="0.8rem"
			/>
			<Box w="100%" h="0.5rem" bgColor="currentColor" mb="0.3rem" />
			<Box w="100%" h="0.5rem" bgColor="currentColor" mb="0.3rem" />
			<Box w="100%" h="0.5rem" bgColor="currentColor" mb="0.3rem" />
			<Box w="100%" h="0.5rem" bgColor="currentColor" mb="0.3rem" />
			<Box w="85%" h="0.5rem" bgColor="currentColor" mb="0.3rem" />
		</Box>
	)
}
