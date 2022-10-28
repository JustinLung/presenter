import { PresentationslidesUnion } from '@lib/generated/sdk'
//Components
import SlideBasic from './Slides/Slidebasic'
import SlideImage from './Slides/SlideImage'
import SlideImageFull from './Slides/SlideImageFull'
import SlidePlanning from './Slides/SlidePlanning'

interface ComponentSwitchProps {
	data: PresentationslidesUnion[]
}

export function ComponentSwitch(props: ComponentSwitchProps) {
	const { data } = props

	if (!data) return null

	return (
		//TODO: Built slide components
		<>
			{data.map(slide => {
				switch (slide.__typename) {
					case 'SlideBasic':
						return <SlideBasic key={slide.id} />
					case 'SlideImage':
						return <SlideImage key={slide.id} />
					case 'SlideImageFull':
						return <SlideImageFull key={slide.id} />
					case 'SlidePlanning':
						return <SlidePlanning key={slide.id} />
					default:
						console.log('Component not found', slide)
						return null
				}
			})}
		</>
	)
}
