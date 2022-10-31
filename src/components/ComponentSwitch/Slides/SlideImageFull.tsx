import { Box, Image } from '@chakra-ui/react'
import { SlideImageFull } from '@lib/generated/sdk'

interface SlideImageFullProps {
	data: SlideImageFull
}

export function SlideImageFull(props: SlideImageFullProps) {
	const { data } = props

	return (
		<Box>
			<Image src={data.image.url} alt="title" />
		</Box>
	)
}

export function SlideImageFullThumbnail(props: SlideImageFullProps) {
	const { data } = props

	return (
		<Box>
			<Image
				boxSize="100%"
				w="100%"
				maxW="auto"
				objectFit="cover"
				src={data.image.url}
				alt="title"
			/>
		</Box>
	)
}
