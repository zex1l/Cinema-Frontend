import Heading from '@/components/ui/heading/Heading'
import AuthProvider from '@/providers/AuthProvider/AuthProvider'

const Home = () => {
	return (
		<AuthProvider Component={{}}>
			<Heading
				classNames="text-gray-300 text-xl mb-8"
				title="Watch movies online"
			/>
		</AuthProvider>
	)
}

export default Home
