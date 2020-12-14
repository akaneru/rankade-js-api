'use strict'

const errors = require('./codes')

class ApiErrors {
  parse(error) {
    if (typeof (error) != 'object' || !error.hasOwnProperty('response')) {
      throw Error('The object passed to the parse() function is not valid');
    }

    for (let index in errors) {
      if (errors[index] == error.response.status) {
        return {
          status: error.response.status,
          details: error.response.data.errors,
        }
      }
    }
  }
}

module.exports = new ApiErrors
