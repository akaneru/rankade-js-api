'use strict'

const axios = require('axios')
const https = require('https')

class Client
{
  constructor(endPoint, key, secret)
  {
    this.endPoint = endPoint
    this.key = key
    this.secret = secret
    this.tokenExpired = true
    this.token = false

    this.axios = axios.create({
      timeout: 1000,
      headers: {'Accept' : 'application/json'},
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })
  }

  setEndPoint(endPoint)
  {
    this.endPoint = endPoint
  }

  setKey(key)
  {
    this.key = key
  }

  setSecret(secret)
  {
    this.secret = secret
  }

  getAccessToken()
  {
      return this.token
  }

  setAccessToken(token)
  {
      this.token = token
  }

  async auth()
  {
    let token
    await this.call('get', 'auth', '', {key: this.key, secret: this.secret})
    .then(response => {
      token = response.data.success.token
    })
    this.setAccessToken(token)
  }

  call(method, resource, action = '', parameters = {}, data = {}, pathParams = [])
  {
    let headers = {}
    if(this.token)
      headers.Authorization = 'Bearer '+this.token

    return this.axios({
      method: method,
      url: this.buildUrl(resource, action, pathParams),
      params: parameters,
      headers: headers,
      data: data
    })
  }

  buildUrl(resource, action = '', pathParams = [])
  {
    let url = this.endPoint+'/'+resource
    if(action) url += '/' + action
    if(pathParams.length) url += '/' + pathParams.join('/')
    return url
  }
}

module.exports = Client
