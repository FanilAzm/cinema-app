import { useQuery } from 'react-query'
import { toastError } from 'utils/toast-error'

import { IOption } from '@/ui/select/select.interface'

import { ActorService } from '@/services/actor.service'

export const useAdminActors = () => {
	const queryData = useQuery('list of actor', () => ActorService.getAll(), {
		select: ({ data }) =>
			data.map(
				(actor): IOption => ({
					label: actor.name,
					value: actor._id,
				})
			),
		onError(error) {
			toastError(error, 'actor list')
		},
	})

	return queryData
}
