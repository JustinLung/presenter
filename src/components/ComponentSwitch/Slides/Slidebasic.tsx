import { Box } from '@chakra-ui/react'
import { SlideBasic } from '@lib/generated/sdk'

interface SlideBasicProps {
	data: SlideBasic
}

export function SlideBasic(props: SlideBasicProps) {
	const { data } = props
	return <Box dangerouslySetInnerHTML={{ __html: data.contents.html }} />
}

export function SlideBasicThumbnail() {
	return <Box>SlideBasicThumb</Box>
}
