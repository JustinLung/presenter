import { ComponentSwitch } from '@/components/ComponentSwitch'
import { Fullscreen } from '@/components/Fullscreen'
import FullSlide from '@/components/FullSlide'
import SlideList from '@/components/SlideList'
import { slideStore } from '@/state/slide'
import { Box } from '@chakra-ui/react'
import { nextClient } from '@lib/client'
import { Presentation } from '@lib/generated/sdk'
import { useEffect, useState } from 'react'

interface PageProps {
	data: Presentation
}

export default function Page(props: PageProps) {
	const { data } = props
	const { activeIndex } = slideStore()

	return (
		<Box display="grid" gridTemplateColumns="15rem auto" h="100%">
			<SlideList>
				<ComponentSwitch data={data.slides} />
				<Fullscreen />
			</SlideList>
			<FullSlide>
				<ComponentSwitch data={data.slides[activeIndex]} />
			</FullSlide>
		</Box>
	)
}

export const getServerSideProps = async ({ query }) => {
	const data = await nextClient.getPresentationId({ id: query.id })

	return {
		props: {
			data: data.presentation,
		},
	}
}
