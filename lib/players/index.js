'use strict'

const Resource = require('../resource')

class Players extends Resource
{
  constructor(client)
  {
    super(client, 'players')
  }

  list(page = 1)
  {
    return this.client.call('get', this.name, '', {}, {}, [page])
  }
}

function create(client)
{
  const players = new Players(client)
  return {
    list: (page) => { return players.list(page) }
  }
}

module.exports = create
