import { FC } from 'react'
import cn from 'classnames'

interface IHeading {
	title: string
	classNames?: string
}

const Heading: FC<IHeading> = ({ title, classNames }) => {
	const classNamesHeading = cn(
		'text-white text-opacity-80 font-semibold',
		classNames,
		classNames?.includes('xl') ? '' : 'text-3xl'
	)

	return <h1 className={classNamesHeading}>{title}</h1>
}

export default Heading
