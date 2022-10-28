import { nextClient } from '@lib/client'
import { Presentation } from '@lib/generated/sdk'
import { ComponentSwitch } from '@lib/graphql/components/ComponentSwitch'

interface PageProps {
	presentation: Presentation
}

export default function Page(props: PageProps) {
	const { presentation } = props
	return (
		<>
			<ComponentSwitch data={presentation.slides} />
		</>
	)
}

export const getStaticProps = async () => {
	const data = await nextClient.getPresentationId({
		id: 'cl9pxhz8j07oo0aw9pekd5tgs',
	})

	return {
		props: {
			presentation: data.presentation,
		},
	}
}
