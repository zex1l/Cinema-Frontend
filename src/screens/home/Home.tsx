import { FC } from 'react'
import { IHome } from './home.interface'
import Heading from '@/components/ui/heading/Heading'

const Home: FC<IHome> = () => {
	return (
		<>
			<Heading
				classNames="text-gray-300 text-xl mb-8"
				title="Watch movies online"
			/>
		</>
	)
}

export default Home
