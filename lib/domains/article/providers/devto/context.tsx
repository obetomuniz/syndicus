import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useEffect,
} from "react"
import { Article } from "../../../../types"
import { fetchDEVToArticle } from "../../../../platforms"

interface DevToProps extends PropsWithChildren {
  article: string
}

export const DevToContext = createContext<Article | null>({})

export const DevTo: React.FC<DevToProps> = ({ article, children }) => {
  const [contextValue, setContextValue] = useState<Article | null>({})

  useEffect(() => {
    if (article) {
      const fetchArticle = async () => {
        const { title, body_html } = await fetchDEVToArticle(article)

        setContextValue({
          title,
          content: body_html,
        })
      }

      fetchArticle()
    }

    return () => {
      setContextValue({})
    }
  }, [article])

  return (
    <DevToContext.Provider value={contextValue}>
      {children}
    </DevToContext.Provider>
  )
}

export const useDevTo = () => {
  const context = useContext(DevToContext)
  if (!context) {
    throw new Error("useDevTo must be used within a DevTo")
  }
  return context
}
