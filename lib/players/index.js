'use strict'

const Resource = require('../resource')

class Players extends Resource
{
  constructor(client)
  {
    super(client, 'players')
  }

  list()
  {
    return this.client.call('get', this.name)
  }
}

function create(client)
{
  const players = new Players(client)
  return {
    list: () => { return players.list() }
  }
}

module.exports = create
