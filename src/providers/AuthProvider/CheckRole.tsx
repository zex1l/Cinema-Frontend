import { useAuth } from '@/hooks/useAuth'
import { TypeComponentsAuthFileds } from '@/shared/types/auth.types'
import { useRouter } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'

const CheckRole: FC<TypeComponentsAuthFileds & PropsWithChildren> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()

	const { replace } = useRouter()

	const Children = () => <>{children}</>

	if (user?.isAdmin) return <Children />

	if (isOnlyAdmin) {
		replace('/not-found')
		return null
	}

	const isUser = user && !user.isAdmin

	if (isUser && isOnlyUser) return <Children />
	else {
		replace('/auth')
		return null
	}
}

export default CheckRole
