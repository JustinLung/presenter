import { Box, ListItem, ListItemProps } from '@chakra-ui/react'
import { PresentationslidesUnion } from '@lib/generated/sdk'
import { Dispatch, ReactNode, SetStateAction } from 'react'
//Components
import { SlideBasic, SlideBasicThumbnail } from './Slides/Slidebasic'
import { SlideImage, SlideImageThumbnail } from './Slides/SlideImage'
import {
	SlideImageFull,
	SlideImageFullThumbnail,
} from './Slides/SlideImageFull'
import { SlidePlanning, SlidePlanningThumbnail } from './Slides/SlidePlanning'
import slideStore from './../../state/slide'

interface ComponentSwitchProps {
	data: PresentationslidesUnion[] | PresentationslidesUnion
}

export function ComponentSwitch(props: ComponentSwitchProps) {
	const { data } = props
	const { activeIndex } = slideStore()

	if (!data) return null

	return (
		//TODO: Built slide components
		<>
			{Array.isArray(data) ? (
				<>
					{data.map((slide, index) => {
						let slideEl = null
						switch (slide.__typename) {
							case 'SlideBasic':
								slideEl = <SlideBasicThumbnail />
								break

							case 'SlideImage':
								slideEl = <SlideImageThumbnail />
								break

							case 'SlideImageFull':
								slideEl = <SlideImageFullThumbnail />
								break

							case 'SlidePlanning':
								slideEl = <SlidePlanningThumbnail />
								break

							default:
								console.log('Component not found', slide)
						}

						return (
							<Slide
								key={`${slide.__typename}-${slide.id}`}
								borderColor={activeIndex === index ? 'white' : 'transparent'}
								onClick={() => slideStore.setState({ activeIndex: index })}>
								{slideEl}
							</Slide>
						)
					})}
				</>
			) : (
				<>
					{[data].map(slide => {
						switch (slide.__typename) {
							case 'SlideBasic':
								return (
									<SlideBasic data={slide} key={`slidebasic-${slide.id}`} />
								)
							case 'SlideImage':
								return <SlideImage key={`slideimage-${slide.id}`} />
							case 'SlideImageFull':
								return <SlideImageFull key={`slideimagefull-${slide.id}`} />
							case 'SlidePlanning':
								return <SlidePlanning key={`slideplanning-${slide.id}`} />
							default:
								console.log('Component not found', slide)
								return null
						}
					})}
				</>
			)}
		</>
	)
}

interface SlideProps extends ListItemProps {
	children: ReactNode
}

function Slide(props: SlideProps) {
	const { children, ...rest } = props
	return (
		<ListItem
			width="90%"
			bgColor="purple	"
			position="relative"
			border="2px solid transparent"
			sx={{
				aspectRatio: '16/9',
			}}
			{...rest}>
			{children}
		</ListItem>
	)
}
