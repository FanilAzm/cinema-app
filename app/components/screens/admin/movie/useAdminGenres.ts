import { useQuery } from 'react-query'
import { toastError } from 'utils/toast-error'

import { IOption } from '@/ui/select/select.interface'

import { GenreService } from '@/services/genre.service'

export const useAdminGenres = () => {
	const queryData = useQuery('list of genre', () => GenreService.getAll(), {
		select: ({ data }) =>
			data.map(
				(genre): IOption => ({
					label: genre.name,
					value: genre._id,
				})
			),
		onError(error) {
			toastError(error, 'genre list')
		},
	})

	return queryData
}
