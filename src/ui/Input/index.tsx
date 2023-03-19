import cl from './Input.module.scss'
import { forwardRef } from 'react'
import cn from 'classnames'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string | undefined
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...otherProps } = props
  return <input ref={ref} {...otherProps} className={cn(cl.input, className)} />
})

Input.displayName = 'Input'

export default Input
