import { AppProps } from 'next/app'
import './globals.scss'
import MainProvider from '@/providers/MainProvider'
import { TypeComponentsAuthFileds } from '@/shared/types/auth.types'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>

				<meta name="theme-color" content={'#181B1E'} />
				<meta name="msapplication-navbutton-color" content={'#181B1E'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#181B1E'}
				/>
			</head>
			<body>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	)
}
