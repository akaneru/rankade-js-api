'use strict'

const Resource = require('../resource')

class Games extends Resource {
  constructor(client) {
    super(client, 'games')
  }

  list() {
    return this.client.call('get', this.name)
  }

  popular() {
    return this.client.call('get', this.name, 'popular')
  }

  search(name) {
    return this.client.call('get', this.name, 'search', { name: name })
  }

  create(name) {
    return this.client.call('post', this.name, 'game', {}, this.stringify({ name: name }))
  }
}

function create(client) {
  return new Games(client)
}

module.exports = create
