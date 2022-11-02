import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }) {
	const { headerTitle } = pageProps

	return (
		<ChakraProvider theme={theme}>
			<Layout headerTitle={headerTitle}>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}

export default MyApp
