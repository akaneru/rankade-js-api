'use strict'

const Resource = require('../resource')

class Quota extends Resource
{
  constructor(client)
  {
    super(client, 'quota')
  }

  quota()
  {
    return this.client.call('get', this.name)
  }
}

function create(client)
{
  const quota = new Quota(client)
  return {
    quota: () => { return quota.quota() }
  }
}

module.exports = create
