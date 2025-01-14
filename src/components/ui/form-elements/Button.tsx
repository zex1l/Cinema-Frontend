import { FC } from 'react'
import { IButton } from '@/components/ui/form-elements/form.interface'
import cn from 'classnames'
import styles from './form.module.scss'

const Button:FC<IButton> = ({children, className, onClick}, ...rest) => {
	return (
		<button className={cn(styles.button, className)} onClick={onClick} {...rest}>
			{children}
		</button>
	)
}

export default Button