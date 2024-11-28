import * as dateFns from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDate = (date: Date, { pattern }: { pattern: string }) => dateFns.format(date, pattern, {
  locale: ptBR
})

export const formatDistanceToNow = (date: Date, options = { preffix: true }) => dateFns.formatDistanceToNow(date, {
  locale: ptBR,
  addSuffix: options?.preffix ?? true
})