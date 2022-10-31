import { ColorScheme } from '@lib/generated/sdk'

export function getColorScheme(scheme: ColorScheme) {
	switch (scheme) {
		case 'green':
			return { bgColor: 'fdndGreen', color: 'fdndBlue' }
		case 'blue':
			return { bgColor: 'fdndBlue', color: 'fdndGreen' }
		case 'purple':
			return { bgColor: 'fdndPurple', color: 'fdndBlue' }
		default:
			return null
	}
}
