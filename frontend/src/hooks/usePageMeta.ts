import { useEffect } from 'react'
import { defaultPageDescription, defaultPageTitle } from '../lib/pageMetaDefaults.ts'

type PageMeta = {
  title: string
  description?: string
}

function upsertMetaByName(name: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)

  if (!meta) {
    meta = document.createElement('meta')
    meta.name = name
    document.head.append(meta)
  }

  meta.content = content
}

function upsertMetaByProperty(property: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('property', property)
    document.head.append(meta)
  }

  meta.content = content
}

function upsertCanonical(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.append(link)
  }

  link.href = href
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title

    const resolvedDescription = description ?? defaultPageDescription
    upsertMetaByName('description', resolvedDescription)
    upsertMetaByProperty('og:title', title)
    upsertMetaByProperty('og:description', resolvedDescription)
    upsertMetaByProperty('og:type', 'website')
    upsertMetaByProperty('og:locale', 'es_AR')
    upsertMetaByName('twitter:card', 'summary')
    upsertMetaByName('twitter:title', title)
    upsertMetaByName('twitter:description', resolvedDescription)
    upsertCanonical(window.location.href)

    return () => {
      document.title = defaultPageTitle
      upsertMetaByName('description', defaultPageDescription)
      upsertMetaByProperty('og:title', defaultPageTitle)
      upsertMetaByProperty('og:description', defaultPageDescription)
      upsertMetaByName('twitter:title', defaultPageTitle)
      upsertMetaByName('twitter:description', defaultPageDescription)
    }
  }, [title, description])
}
