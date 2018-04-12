import { schema } from 'normalizr'
import { listResponseSchema } from './factory'

const comicSchema = new schema.Entity('comics')
export const comicsListResponseSchema = listResponseSchema(comicSchema)