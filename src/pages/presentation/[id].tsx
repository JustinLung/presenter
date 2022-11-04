import { ComponentSwitch } from '@/components/ComponentSwitch'
import { Fullscreen } from '@/components/Fullscreen'
import FullSlide from '@/components/FullSlide'
import SlideList from '@/components/SlideList'
import { fullscreenStore } from '@/state/fullscreen'
import { slideStore } from '@/state/slide'
import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { nextClient } from '@lib/client'
import { Presentation } from '@lib/generated/sdk'

interface PageProps {
	data: Presentation
	id: string
}

export default function Page(props: PageProps) {
	const { data, id } = props
	const { activeIndex } = slideStore()
	const { isFullscreen } = fullscreenStore()

	function nextSlide() {
		if (activeIndex + 1 == data.slides.length) return
		slideStore.setState({ activeIndex: activeIndex + 1 })
	}

	function previousSlide() {
		if (activeIndex == 0) return
		slideStore.setState({ activeIndex: activeIndex - 1 })
	}

	return (
		<Box display="grid" gridTemplateColumns="15rem auto" h="100%">
			<SlideList>
				{data.slides.length ? <Fullscreen max={data.slides.length} /> : null}

				<ComponentSwitch data={data.slides} />
			</SlideList>
			<FullSlide>
				{data.slides.length ? (
					<ComponentSwitch data={data.slides[activeIndex]} />
				) : (
					<Flex
						gap="4"
						h="100%"
						justify="center"
						alignItems="center"
						flexDir="column">
						<Heading as="h2">Out of slides</Heading>
						<Text>
							Looks likes this presenation has no slides. Maybe add some.
						</Text>
						<Link
							href={`https://app.hygraph.com/d41469f3ff1b42a5bfeedf09936114d8/master/content/7cc0559de2bb4a689cfe4134fe2af694/view/57bfbe42b87d4f44b1eb4b1f591ff111/${id}`}
							target="_blank"
							rel="noreferrer"
							bg="purple"
							fontWeight="bold"
							px="1rem"
							py=".5rem"
							borderRadius=".2rem"
							_hover={{ textDecoration: 'none', bg: 'black' }}
							_focus={{ bg: 'black' }}>
							Add slides
						</Link>
					</Flex>
				)}
				{!isFullscreen ? (
					<>
						{data.slides.length > 0 ? (
							<Flex justify="flex-end" gap="1rem" pt="5" ml="auto">
								<Button onClick={previousSlide} bg="purple">
									Previous
								</Button>
								<Button onClick={nextSlide} bg="purple">
									Next
								</Button>
							</Flex>
						) : null}
					</>
				) : null}
			</FullSlide>
		</Box>
	)
}

export const getStaticProps = async ({ query }) => {
	const data = await nextClient.getPresentationId({ id: query.id })

	return {
		props: {
			data: data.presentation,
			id: query.id,
			headerTitle: `${data.presentation.title} - ${data.presentation.createdBy.name}`,
		},
		revalidate: 60,
	}
}
