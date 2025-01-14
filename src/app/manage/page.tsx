import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Admin panel',
	robots: {
		index: false,
		follow: true,
	},
}

const ManagePage: NextPage = () => {
	return <div>
		Manage
	</div>
}

export default ManagePage
