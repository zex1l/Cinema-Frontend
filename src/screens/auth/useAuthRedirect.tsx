'use client'
import { useAuth } from '@/hooks/useAuth'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useAuthRedirect = () => {
	const { user } = useAuth()

	const router = useRouter()
	const searchParams = useSearchParams();

	const redirect = searchParams.get('redirect') || '/';

	useEffect(() => {
		if (user) {
			router.push(redirect);
		}
	}, [user, redirect, router]);
}
