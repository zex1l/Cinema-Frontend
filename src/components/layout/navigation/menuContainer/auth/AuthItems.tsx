import { useAuth } from '@/hooks/useAuth'
import MenuItem from '@/components/layout/navigation/menuContainer/MenuItem'
import LogoutButton from '@/components/ui/LogoutButton/LogoutButton'
import { getAdminHomeUrl } from '@/config/url.config'

const AuthItems = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{ icon: 'MdSettings', link: '/profile', title: 'Profile' }}
					/>
					<LogoutButton />
				</>
			) : (
				<>
					<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Auth' }} />
				</>
			)}
			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
