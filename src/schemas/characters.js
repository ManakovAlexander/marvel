import { schema } from 'normalizr'
import { listResponseSchema } from './factory'

const characterSchema = new schema.Entity('characters')
export const charactersListResponseSchema = listResponseSchema(characterSchema)