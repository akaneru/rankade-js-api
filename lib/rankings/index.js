'use strict'

const Resource = require('../resource')

class Rankings extends Resource {
  constructor(client) {
    super(client, 'rankings')
  }

  list(subset = 'main', match = 'last', page = 1) {
    return this.client.call('get', this.name, '', {}, {}, [subset, match, page])
  }
}

function create(client) {
  return new Rankings(client)
}

module.exports = create

