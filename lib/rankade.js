'use strict'

const Client = require('./client')
const players = require('./players/index')
const quota = require('./quota/index')
const games = require('./games/index')
const matches = require('./matches/index')
const auth = require('./auth/index')

function rankade(endPoint, key, secret)
{
  const client = new Client(endPoint, key, secret)
  this.auth = auth(client)
  this.players = players(client)
  this.quota = quota(client)
  this.games = games(client)
  this.matches = matches(client)
}

module.exports = rankade
