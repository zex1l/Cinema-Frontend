// import { siteName, titleMerge } from '@/config/seo.config'
// import logoImage from '@/assets/icon/logo.svg'

// import Head from 'next/head'
// import { ISeo } from './meta.interface'
// import { FC, PropsWithChildren } from 'react'
// import { useRouter } from 'next/router'
// import { onlyText } from '../string/clearText.utils'
// import { Metadata } from 'next'

// export const Meta: FC<ISeo & PropsWithChildren> = ({
// 	title,
// 	description,
// 	image = null,
// 	children,
// }) => {
// 	const { pathname } = useRouter()
// 	const currentUrl = `${process.env.APP_URL}${pathname}`

// 	return (
// 		<Head>
// 			{description ? (
// 				<>
// 					<title itemProp="headline">{titleMerge(title)}</title>
// 					<meta
// 						itemProp="description"
// 						name="description"
// 						content={onlyText(description, 152)}
// 					/>
// 					<link rel="canonical" href={currentUrl} />
// 					<meta property="og:locale" content="en" />
// 					<meta property="og:title" content={titleMerge(title)} />
// 					<meta property="og:url" content={currentUrl} />
// 					<meta property="og:image" content={image || logoImage} />
// 					<meta property="og:site_name" content={siteName} />
// 					<meta
// 						property="og:description"
// 						content={onlyText(description, 197)}
// 					/>
// 				</>
// 			) : (
// 				<>
// 					<title>{titleMerge(title)}</title>
// 					<meta name="robots" content="noindex, nofollow" />
// 				</>
// 			)}
// 			{children}
// 		</Head>
// 	)
// }
