'use strict'

const Resource = require('../resource')

class Quota extends Resource {
  constructor(client) {
    super(client, 'quota')
  }

  quota() {
    return this.client.call('get', this.name)
  }
}

function create(client) {
  return new Quota(client)
}

module.exports = create
