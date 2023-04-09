import React, { FC, memo } from "react"
import { Article } from "../../../../types"
import { withMultiContext, MultiContextProps } from "../../../../hoc"
import { DevToContext } from "../../providers"

type TitleProps = {
  className?: string
  style?: React.CSSProperties
} & MultiContextProps<Article>

const Title: FC<TitleProps> = ({ className, style, contextValue }) => {
  const { title } = contextValue

  return (
    <h1 className={className} style={style}>
      {title}
    </h1>
  )
}

export default memo(withMultiContext(Title, [DevToContext]))
