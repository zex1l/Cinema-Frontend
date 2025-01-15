import Profile from '@/screens/profile/Profile'
import { NextAuthPage } from '@/shared/types/auth.types'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Profile',
	robots: {
		index: false,
		follow: true,
	},
}

const ProfilePage: NextAuthPage = () => {
	return <Profile />
}

export default ProfilePage
