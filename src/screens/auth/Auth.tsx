'use client'
import { FC, useState } from 'react'
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'
import { useAuth } from '@/hooks/useAuth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthInput } from '@/screens/auth/auth.interface'
import styles from './Auth.module.scss'
import Heading from '@/components/ui/heading/Heading'
import Button from '@/components/ui/form-elements/Button'
import AuthFields from '@/screens/auth/AuthFields'
import { useActions } from '@/hooks/useActions'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: RegisterInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { register, login } = useActions()

	const onHandleSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<section className={styles.wrapper}>
			<form onSubmit={handleSubmit(onHandleSubmit)} autoComplete="off">
				<Heading title="Auth" classNames="mb-6" />
				<AuthFields
					register={RegisterInput}
					formState={formState}
					isPasswordRequired={true}
				/>
				<div className={styles.buttons}>
					<Button onClick={() => setType('login')} disabled={isLoading}>
						Login
					</Button>
					<Button onClick={() => setType('register')} disabled={isLoading}>
						Register
					</Button>
				</div>
			</form>
		</section>
	)
}

export default Auth
