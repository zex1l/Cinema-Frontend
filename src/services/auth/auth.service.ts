import { axiosClassic } from '@/api/interceptors.api'
import { IAuthResponse } from '@/store/user/user.interface'
import { getAuthUrl } from '@/config/api.config'
import { removeTokens, saveTokensStorage, saveToStorage } from '@/services/auth/auth.helper'
import Cookies from 'js-cookie'
import { getContentType } from '@/api/api.helpers'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/register'),
			{ email, password }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},

	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/login'),
			{ email, password }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	},

	logout() {
		removeTokens()
		localStorage.removeItem('user')
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) saveTokensStorage(response.data)

		return response
	},
}
