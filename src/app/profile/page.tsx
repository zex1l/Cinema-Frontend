import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Profile',
	robots: {
		index: false,
		follow: true,
	},
}

const ProfilePage: NextPage = () => {
	return <div>
		ProfilePage
	</div>
}

export default ProfilePage
