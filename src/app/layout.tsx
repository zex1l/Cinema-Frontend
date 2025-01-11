import './globals.scss'
import Layout from '@/components/layout/Layout'
import MainProvider from '@/providers/MainProvider'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<MainProvider>
					<Layout>{children}</Layout>
				</MainProvider>
			</body>
		</html>
	)
}
