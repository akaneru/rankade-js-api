'use strict'

const Resource = require('../resource')

class Players extends Resource {
  constructor(client) {
    super(client, 'players')
  }

  list(page = 1) {
    return this.client.call('get', this.name, '', {}, {}, [page])
  }

  player(name) {
    return this.client.call('post', this.name, 'player', {}, this.stringify({ name: name }))
  }
}

function create(client) {
  return new Players(client)
}

module.exports = create

