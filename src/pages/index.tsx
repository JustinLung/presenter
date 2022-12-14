import { Flex } from '@chakra-ui/react'
import PresentationCard from '@/components/PresentationCard'
import { nextClient } from '@lib/client'
import { Presentation } from '@lib/generated/sdk'

interface PageProps {
	data: Presentation[]
}

export default function Page(props: PageProps) {
	const { data } = props
	return (
		<>
			<Flex
				direction="row"
				gap="2rem"
				flexWrap="wrap"
				maxW="90rem"
				m="0 auto"
				justify={{ sm: 'center' }}>
				{data.map(data => {
					return (
						<PresentationCard
							key={data?.id}
							presentationBackground={
								// @ts-ignore
								data.slides.length ? data.slides[0].colorScheme : 'purple'
							}
							presentationTitle={data.title}
							presentationAuthor={data.createdBy.name}
							presentationDate={data.createdAt
								.slice(0, 10)
								.split('-')
								.reverse()
								.join('-')}
							presentationLink={`presentation/${data.id}`}
						/>
					)
				})}
			</Flex>
		</>
	)
}

export const getStaticProps = async () => {
	const data = await nextClient.getPresentation()
	const presentations = data.presentations.sort((a, b) => {
		const dateA = new Date(a.createdAt)
		const dateB = new Date(b.createdAt)
		return dateA > dateB ? -1 : 1
	})
	return {
		props: {
			data: presentations,
		},
		revalidate: 60,
	}
}
