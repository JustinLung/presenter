import { Button } from '@chakra-ui/react'
import { fullscreenStore } from '@/state/fullscreen'
import { useCallback, useEffect } from 'react'
import { slideStore } from '@/state/slide'

export function Fullscreen({}) {
	const { element, isFullscreen } = fullscreenStore()

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
			console.log(e.key)
			if (e.key === ' ' || e.key === 'Enter') {
				slideStore.setState(state => {
					return { activeIndex: state.activeIndex + 1 }
				})
			} else if (e.key === 'Backspace') {
				slideStore.setState(state => {
					return { activeIndex: state.activeIndex - 1 }
				})
			}
		},
		[isFullscreen]
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
			right="2"
			bottom="2"
			onClick={onClick}>
			Enable fullscreen
		</Button>
	)
}