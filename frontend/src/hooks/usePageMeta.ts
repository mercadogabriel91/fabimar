import { useEffect } from 'react'

type PageMeta = {
  title: string
  description?: string
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title

    if (!description) {
      return
    }

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.append(meta)
    }

    meta.content = description
  }, [title, description])
}
