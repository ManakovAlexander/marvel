// @flow
import { normalize } from 'normalizr';
var md5 = require('md5');
import keys from './keys.json'

const baseUrl = `http://gateway.marvel.com/v1/public`

export const fetch = ({ url, method = 'GET', queryParams, data, schema }) => {
  const authQueryParams = getAuthQueryParams()
  const queryString = getQueryString(queryParams ? { ...queryParams, ...authQueryParams } : authQueryParams)

  return window.fetch({
    url: `${baseUrl}${url}?${queryString}`,
    method,
    data
  })
    .then(resp => resp.json())
    .then(resp => resp.data)
    .then(jsonResp => schema ? normalize(jsonResp, schema) : jsonResp)
}

const getQueryString = (params) => {
  return Object
    .keys(params)
    .map(k => {
      if (Array.isArray(params[k])) {
        return params[k]
          .map(val => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
          .join('&')
      }

      return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
    })
    .join('&')
}

const getAuthQueryParams = () => {
  const ts = Number(new Date())
  const hash = md5(`${ts}${keys.private}${keys.public}`)
  return { ts, apikey: keys.public, hash }
}