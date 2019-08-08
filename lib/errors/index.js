'use strict'

const errors = require('./codes')

class ApiErrors
{
  parse(error)
  {
    for (let index in errors){
      if(errors[index] == error.response.status){
        return {
          status: error.response.status,
          details: error.response.data.errors,
        }
      }
    }
  }
}

module.exports = new ApiErrors
