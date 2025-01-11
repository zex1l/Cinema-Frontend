import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import cn from 'classnames'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			highlightColor="#292A2E"
			baseColor="#1F2125"
			className={cn('rounded-lg', className)}
		/>
	)
}
export default SkeletonLoader
