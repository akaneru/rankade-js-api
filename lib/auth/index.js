'use strict'

const Resource = require('../resource')
const jws = require('jws')

class Auth extends Resource
{
  constructor(client)
  {
    super(client, 'auth')
  }

  auth()
  {
    return this.client.auth()
  }

  getAccessToken()
  {
      return this.client.getAccessToken()
  }

  setAccessToken(token)
  {
      return this.client.setAccessToken(token)
  }

  isExpired()
  {
      let jwt = this.client.getAccessToken()
      if(!jwt)
        return true

      let decoded = jws.decode(jwt)
      let expireDate = new Date();
      expireDate.setTime(decoded.payload.exp*1000)

      let now = new Date()
      let nowUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
 now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()))

      return nowUTC.getTime() > expireDate.getTime()
  }
}

function create(client)
{
  const auth = new Auth(client)
  return {
    auth: () => { return auth.auth() },
    getAccessToken: () => { return auth.getAccessToken() },
    isExpired: () => { return auth.isExpired() },
    setAccessToken: (token) => { return auth.setAccessToken(token) }
  }
}

module.exports = create
