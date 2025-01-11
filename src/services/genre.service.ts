import { axiosClassic } from '@/api/interceptors.api'
import { getGenresUrl } from '@/config/api.config'
import { IGenre } from '@/shared/types/movie.types'

export const GenreService = {
	async getPopularGenres() {
		return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'), {})
	},
}
