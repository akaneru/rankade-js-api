# Rankade Javascript API implementation

Javascript implementation of the rankade api https://rankade.com/api

## Install

    yarn add rankade-api

## Usage

### API access

In order to use API for your group you need to obtain API credentials by following that istructions https://rankade.com/api#intro

### Usage


    'use strict'
    
    const Rankade = require('rankade-js-lib')
    
    // obtain credentials from group's API setting page
    const rankade = new Rankade(
      'https://api.endpoint',
      'key',
      'secret'
    )
    
    rankade.auth.auth()
      .then(success => {
    
        rankade.quota.quota()
          .then(success => {
            
            let quota = success.data.success
            console.log(quota)
            
        }).catch(error => {
          
            let errorFound = rankade.errors.parse(error)
            console.log(errorFound)
            
        })
    
    }).catch(error => {
      
      let errorFound = rankade.errors.parse(error)
      console.log(errorFound)
      
    })

## Change log

- 2019-05-23 api errors parse
- 2019-05-22 started implementation of basic calls
