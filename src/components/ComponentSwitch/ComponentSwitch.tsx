import { Box, Button, ListItem, ListItemProps } from '@chakra-ui/react'
import { ColorScheme, PresentationslidesUnion } from '@lib/generated/sdk'
import { Dispatch, ReactNode, SetStateAction } from 'react'
//Components
import { SlideBasic, SlideBasicThumbnail } from './Slides/Slidebasic'
import { SlideImage, SlideImageThumbnail } from './Slides/SlideImage'
import {
	SlideImageFull,
	SlideImageFullThumbnail,
} from './Slides/SlideImageFull'
import { slideStore } from './../../state/slide'
import { getColorScheme } from '@/helpers/getColorScheme'

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
								slideEl = <SlideImageThumbnail data={slide} />
								break

							case 'SlideImageFull':
								slideEl = <SlideImageFullThumbnail data={slide} />
								break

							default:
								console.log('Component not found', slide)
						}

						return (
							<Slide
								key={`${slide.__typename}-${slide.id}`}
								//@ts-ignore
								scheme={slide?.colorScheme ? slide.colorScheme : null}
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
						let slideEl = null
						switch (slide.__typename) {
							case 'SlideBasic':
								slideEl = <SlideBasic data={slide} />
								break
							case 'SlideImage':
								slideEl = <SlideImage data={slide} />
								break
							case 'SlideImageFull':
								slideEl = <SlideImageFull data={slide} />
								break

							default:
								console.log('Component not found', slide)
								slideEl = null
						}
						//@ts-ignore
						const colors = getColorScheme(slide.colorScheme)
						return (
							<Box
								w="100%"
								h="100%"
								key={`${slide.__typename}-${slide.id}`}
								{...colors}>
								{slideEl}
							</Box>
						)
					})}
				</>
			)}
		</>
	)
}

interface SlideProps extends ListItemProps {
	scheme?: ColorScheme
	children: ReactNode
}

function Slide(props: SlideProps) {
	const { scheme, children, ...rest } = props
	const colors = getColorScheme(scheme)

	return (
		<ListItem
			width="90%"
			position="relative"
			border="2px solid transparent"
			{...colors}
			sx={{
				aspectRatio: '16/9',
			}}
			_focusWithin={{
				boxShadow: '0px 0 0 4px white',
			}}
			{...rest}>
			<Button
				outline="0"
				border="none"
				w="100%"
				h="100%"
				p="0"
				display="block"
				bgColor="transparent">
				{children}
			</Button>
		</ListItem>
	)
}
