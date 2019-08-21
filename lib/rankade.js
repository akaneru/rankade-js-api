'use strict'

const Client = require('./client')
const players = require('./players/index')
const quota = require('./quota/index')
const games = require('./games/index')
const matches = require('./matches/index')
const subsets = require('./subsets/index')
const rankings = require('./rankings/index')
const auth = require('./auth/index')
const errors = require('./errors/index')

function rankade(endPoint, key, secret, timeout)
{
  const client = new Client(endPoint, key, secret, timeout)

  this.setEndPoint = function(endPoint){
    client.setEndPoint(endPoint)
  }

  this.setKey = function(key){
    client.setKey(key)
  }

  this.setSecret = function(secret){
    client.setSecret(secret)
  }

  this.auth = auth(client)
  this.players = players(client)
  this.quota = quota(client)
  this.games = games(client)
  this.matches = matches(client)
  this.subsets = subsets(client)
  this.rankings = rankings(client)
  this.errors = errors
}

module.exports = rankade
