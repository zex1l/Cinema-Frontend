import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import LogoImage from '@/assets/icon/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/" className="px-layout mb-10 block">
			<Image
				width={247}
				height={34}
				src={LogoImage}
				alt="Логотип"
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
