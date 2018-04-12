import { fetch } from '../services/api'
import { charactersListResponseSchema } from '../schemas/characters'

export const fetchCharacters = ({ nameStartsWith, offset }) => fetch({
  url: `/characters`,
  queryParams: {
    nameStartsWith,
    offset
  },
  schema: charactersListResponseSchema
})