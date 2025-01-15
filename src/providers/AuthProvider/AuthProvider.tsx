'use client'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { TypeComponentsAuthFileds } from '@/shared/types/auth.types'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentsAuthFileds & PropsWithChildren> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()

	const { checkAuth, logout } = useActions()

	const pathname = usePathname()

	// Проверка токена и перезаписываения его
	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Выход из системы если refreshToken отсутвует
	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')

		if (!refreshToken && user) logout()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
