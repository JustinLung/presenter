import { ColorScheme } from '@lib/generated/sdk'

export function getColorScheme(scheme: ColorScheme) {
	switch (scheme) {
		case 'green':
			return { bgColor: '#66e5bf', color: '#050542' }
		case 'blue':
			return { bgColor: '#050542', color: '#66e5bf' }
		case 'purple':
			return { bgColor: '#a675f5', color: '#050542' }
		default:
			return null
	}
}
