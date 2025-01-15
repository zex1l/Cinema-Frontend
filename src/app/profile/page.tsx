import Profile from '@/screens/profile/Profile'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Profile',
	robots: {
		index: false,
		follow: true,
	},
}

const ProfilePage: NextPage = () => {
	return <Profile />
}

export default ProfilePage
