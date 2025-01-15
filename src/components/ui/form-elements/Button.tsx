import { ButtonHTMLAttributes, FC } from 'react'
import cn from 'classnames'
import styles from './form.module.scss'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
	{ children, className, onClick },
	...rest
) => {
	return (
		<button
			className={cn(styles.button, className)}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
