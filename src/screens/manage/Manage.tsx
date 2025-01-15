import AuthProvider from '@/providers/AuthProvider/AuthProvider'

const Manage = () => {
	return <AuthProvider Component={{ isOnlyAdmin: true }}>Manage</AuthProvider>
}

export default Manage
