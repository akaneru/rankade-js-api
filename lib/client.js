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

  getAccessToken()
  {
      return this.token
  }

  async auth()
  {
    let token
    await this.call('get', 'auth', '', {key: this.key, secret: this.secret})
    .then(response => {
      token = response.data.success.token
    })
    this.token = token
  }

  call(method, resource, action = '', parameters = {}, data = {})
  {
    let headers = {}
    if(this.token)
      headers.Authorization = 'Bearer '+this.token

    return this.axios({
      method: method,
      url: this.buildUrl(resource, action),
      params: parameters,
      headers: headers,
      data: data
    })
  }

  buildUrl(resource, action = '')
  {
    let url = this.endPoint+'/'+resource
    if(action) url += '/' + action
    return url
  }
}

module.exports = Client
