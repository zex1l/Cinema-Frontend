import { forwardRef } from 'react'
import { IField } from '@/components/ui/form-elements/form.interface'
import styles from './form.module.scss'
import cn from 'classnames'

const Field = forwardRef<HTMLInputElement, IField>(({placeholder, error, type = 'text', style, ...rest}, ref) => {
	return <div className={cn(styles.common, styles.field)} style={style}>
		<label>
			<span>{placeholder}</span>
			<input type={type}  ref={ref} {...rest} autoComplete="new-password"/>
		</label>
		{error && <div className={styles.error}>{error.message?.toString()}</div>}
	</div>
})

Field.displayName = 'Field'

export default Field
