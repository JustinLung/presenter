import { Button } from '@chakra-ui/react'
import { fullscreenStore } from '@/state/fullscreen'
import { useCallback, useEffect } from 'react'
import { slideStore } from '@/state/slide'
import FullscreenIcon from '@/icons/FullscreenIcon'

interface FullscreenProps {
	max: number
}

export function Fullscreen(props: FullscreenProps) {
	const { element, isFullscreen } = fullscreenStore()
	const { activeIndex } = slideStore()
	const { max } = props

	const onClick = useCallback(() => {
		if (element) {
			if (element.requestFullscreen) {
				element.requestFullscreen()
			}
		}
	}, [element])

	const nextSlide = useCallback(
		(e: KeyboardEvent) => {
			if (!isFullscreen) return
			if (e.key === ' ' || e.key === 'Enter') {
				if (activeIndex + 1 === max) return
				slideStore.setState(state => {
					return { activeIndex: state.activeIndex + 1 }
				})
			} else if (e.key === 'Backspace') {
				if (activeIndex === 0) return
				slideStore.setState(state => {
					return { activeIndex: state.activeIndex - 1 }
				})
			}
		},
		[activeIndex, isFullscreen, max]
	)

	useEffect(() => {
		document.addEventListener('fullscreenchange', checkFullscreen)
		document.addEventListener('keydown', nextSlide)
		return () => {
			document.removeEventListener('fullscreenchange', checkFullscreen)
			document.removeEventListener('keydown', nextSlide)
		}
	}, [nextSlide])

	function checkFullscreen(e: any) {
		fullscreenStore.setState({
			isFullscreen: document.fullscreenElement ? true : false,
		})
	}

	return (
		<Button
			bgColor="purple"
			pos="absolute"
			bottom="5"
			right=" 5"
			_hover={{ bg: 'darkgrey' }}
			_focus={{ bg: 'darkgrey' }}
			onClick={onClick}>
			<FullscreenIcon width={24} heigth={24} />
		</Button>
	)
}
