import { InputHTMLAttributes } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export interface IFieldProps {
	placeholder: string
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export type IField = TypeInputPropsField
