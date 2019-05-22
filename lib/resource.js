'use strict'

const queryString = require('query-string')

class Resource{

  constructor(client, name)
  {
    this.client = client
    this.name = name
  }

  stringify(data)
  {
    return queryString.stringify(data)
  }

}

module.exports = Resource
