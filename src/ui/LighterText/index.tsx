import cl from './LighterText.module.scss'
import { forwardRef } from 'react'
import cn from 'classnames'

interface LighterTextTextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string | undefined
  children: React.ReactNode
}

const LighterText = forwardRef<HTMLDivElement, LighterTextTextProps>(
  (props, ref) => {
    const { className, children, ...otherProps } = props
    return (
      <div ref={ref} {...otherProps} className={cn(cl.text, className)}>
        {children}
      </div>
    )
  }
)

LighterText.displayName = 'LighterText'

export default LighterText
