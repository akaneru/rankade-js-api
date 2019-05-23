'use strict'

const Resource = require('../resource')

class Matches extends Resource
{
  constructor(client)
  {
    super(client, 'matches')
  }

  status()
  {
    return this.client.call('get', this.name, 'status')
  }

  exists(id)
  {
    return this.client.call('get', this.name, 'match/exists', {id: id})
  }

  create(matches, dryrun = 0)
  {
    return this.client.call('post', this.name, 'match', {dryrun: dryrun}, matches)
  }
}

function create(client)
{
  const matches = new Matches(client)
  return {
    status: () => { return matches.status() },
    exists: id => { return matches.exists(id) },
    create: (matchesArray, dryrun = 0) => { return matches.create(matchesArray, dryrun) }
  }
}

module.exports = create
