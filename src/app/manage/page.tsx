import Manage from '@/screens/manage/Manage'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Admin panel',
	robots: {
		index: false,
		follow: true,
	},
}

const ManagePage: NextPage = () => {
	return <Manage />
}

export default ManagePage
