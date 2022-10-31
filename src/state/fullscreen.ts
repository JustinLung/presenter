import create from 'zustand'

interface fullscreenStoreProps {
	element: null | HTMLDivElement
	isFullscreen: boolean
}

export const fullscreenStore = create<fullscreenStoreProps>(() => ({
	element: null,
	isFullscreen: false,
}))
