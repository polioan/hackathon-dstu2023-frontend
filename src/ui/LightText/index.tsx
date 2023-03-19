import cl from './LightText.module.scss'
import { forwardRef } from 'react'
import cn from 'classnames'

interface LightTextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string | undefined
  children: React.ReactNode
}

const LightText = forwardRef<HTMLDivElement, LightTextProps>((props, ref) => {
  const { className, children, ...otherProps } = props
  return (
    <div ref={ref} {...otherProps} className={cn(cl.text, className)}>
      {children}
    </div>
  )
})

LightText.displayName = 'LightText'

export default LightText
