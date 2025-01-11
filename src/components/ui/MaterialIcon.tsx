import { TypeMaterialName } from '@/shared/types/icon.types'
import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

const MaterialIcon: FC<{ name: TypeMaterialName }> = ({ name }) => {
	const IconCompoennt = MaterialIcons[name]

	return <IconCompoennt />
}

export default MaterialIcon
