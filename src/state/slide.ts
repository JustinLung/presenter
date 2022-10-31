import create from 'zustand'

interface SlideStoreProps {
	activeIndex: number
}

const slideStore = create<SlideStoreProps>(() => ({
	activeIndex: 0,
}))

export default slideStore
