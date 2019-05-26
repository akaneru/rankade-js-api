'use strict'

const Resource = require('../resource')

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

}

function create(client)
{
  const auth = new Auth(client)
  return {
    auth: () => { return auth.auth() },
    getAccessToken: () => { return auth.getAccessToken() }
  }
}

module.exports = create
