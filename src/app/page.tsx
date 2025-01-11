import Home from '@/screens/home/Home'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Watch movies online',
	description:
		'Watch MovieApp movies and TV shows online or stream right to your browser.',
}

const HomePage: NextPage = () => {
	return <Home />
}

export default HomePage
