import React, { FC, memo } from "react"
import { Article } from "../../../../../../types"
import { withMultiContext, MultiContextProps } from "../../../../../../hoc"
import { DevToContext } from "../../provider"

type ContentProps = {
  className?: string
  style?: React.CSSProperties
} & MultiContextProps<Article>

const Content: FC<ContentProps> = ({ className, style, contextValue }) => {
  const { content } = contextValue

  return (
    <div
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: content ?? "" }}
    />
  )
}

export default memo(withMultiContext(Content, [DevToContext]))
