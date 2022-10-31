import { Badge } from '@/components/Badge'
import { getColorScheme } from '@/helpers/getColorScheme'
import { fullscreenStore } from '@/state/fullscreen'
import { Box, Image } from '@chakra-ui/react'
import { SlideImage } from '@lib/generated/sdk'

interface SlideImageProps {
	data: SlideImage
}

export function SlideImage(props: SlideImageProps) {
	const { data } = props
	const { rightSide } = data
	const { isFullscreen } = fullscreenStore()

	return (
		<Box display="flex" h="100%">
			<Box p="2%" w="50%">
				{data.badge ? (
					<Badge colors={getColorScheme(data.colorScheme)}>{data.badge}</Badge>
				) : null}
				<Box
					pl="4%"
					sx={{
						'> *': {
							fontSize: isFullscreen ? '2.4vw' : '1.8vw',
							marginBottom: '2%',
						},
						ul: {
							listStylePos: 'inside',
							div: {
								display: 'inline',
							},
						},
					}}
					dangerouslySetInnerHTML={{ __html: data.contents.html }}
				/>
			</Box>
			<Image
				order={rightSide ? 1 : -1}
				objectFit="cover"
				h="100%"
				w="50%"
				src={data.image.url}
				alt="title"
			/>
		</Box>
	)
}

export function SlideImageThumbnail(props: SlideImageProps) {
	const { data } = props
	return (
		<Box display="flex">
			<Box p="2" w="50%" h="100%">
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
			<Image
				pos="absolute"
				right="0"
				objectFit="cover"
				w="50%"
				h="100%"
				src={data.image.url}
				alt="title"
			/>
		</Box>
	)
}
