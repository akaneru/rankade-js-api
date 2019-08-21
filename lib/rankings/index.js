'use strict'

const Resource = require('../resource')

class Rankings extends Resource
{
  constructor(client)
  {
    super(client, 'rankings')
  }

  list(subset = 'main', match = 'last', page = 1)
  {
    console.log(subset)
    return this.client.call('get', this.name, '', {}, {}, [subset, match, page])
  }
}

function create(client)
{
  const rankings = new Rankings(client)
  return {
    list: (subset, match, page) => { return rankings.list(subset, match, page) }
  }
}

module.exports = create
