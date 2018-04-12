import { fetch } from '../services/api'
import { comicsListResponseSchema } from '../schemas/comics'

export const fetchComics = ({ characterId }) => fetch({
  url: `/characters/${characterId}/comics`,
  schema: comicsListResponseSchema
})