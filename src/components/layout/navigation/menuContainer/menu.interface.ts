import { TypeMaterialName } from '@/shared/types/icon.types'

export interface IMenuItem {
	icon: TypeMaterialName
	title: string
	link: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
