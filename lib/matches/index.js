'use strict'

const Resource = require('../resource')

class Matches extends Resource {
  constructor(client) {
    super(client, 'matches')
  }

  status() {
    return this.client.call('get', this.name, 'status')
  }

  exists(id) {
    return this.client.call('get', this.name, 'match/exists', { id: id })
  }

  create(matches, dryrun = 0) {
    return this.client.call('post', this.name, 'match', { dryrun: dryrun }, matches)
  }

  list(subset = 'main', page = 1) {
    return this.client.call('get', this.name, '', {}, {}, [subset, page])
  }
}

function create(client) {
  return new Matches(client)
}

module.exports = create
