'use strict'

const Resource = require('../resource')

class Subsets extends Resource {
  constructor(client) {
    super(client, 'subsets')
  }

  list() {
    return this.client.call('get', this.name)
  }
}

function create(client) {
  const subsets = new Subsets(client)
  return {
    list: () => { return subsets.list() }
  }
}

module.exports = create
