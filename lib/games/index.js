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
  const games = new Games(client)
  return {
    list: () => { return games.list() },
    popular: () => { return games.popular() },
    search: name => { return games.search(name) },
    create: name => { return games.create(name) }
  }
}

module.exports = create
