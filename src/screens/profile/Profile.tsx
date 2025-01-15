import AuthProvider from '@/providers/AuthProvider/AuthProvider'
import React from 'react'

const Profile = () => {
	return <AuthProvider Component={{ isOnlyUser: true }}>Profile</AuthProvider>
}

export default Profile
