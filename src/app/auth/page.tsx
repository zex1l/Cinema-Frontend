
import { Metadata, NextPage } from 'next'
import Auth from '@/screens/auth/Auth'

export const metadata: Metadata = {
	title: 'Authorization'
}

 const AuthPage: NextPage = () => {
	return <Auth/>
}

export default AuthPage
