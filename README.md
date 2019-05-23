# Rankade Javascript API implementation

Javascript implementation of the rankade api https://rankade.com/api

## Install

    yarn add rankade-js-api

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
    
### Implemented methods

#### Auth

- <code>rankade.auth.auth()</code> perform authentication

#### Games

- <code>rankade.games.popular()</code> retrieve rankade's popular games
- <code>rankade.games.list()</code> retrieve group's games
- <code>rankade.games.search(name)</code> search a game by giving a name or part of
- <code>rankade.games.create(name)</code> create a game by name and retrieve it

#### Matches

- <code>rankade.matches.create(matches, dryrun)</code> create matches by giving an array of objects accordant to specifications https://rankade.com/api#post-matches-match (see below the **Match's object properties detail** captcher)

#### Players

- <code>rankade.players.players()</code> retrieve group's players

#### Quota

- <code>rankade.quota.quota()</code> retrieve group's API quota usage

## Change log

- 2019-05-23 api errors parse
- 2019-05-22 started implementation of basic calls
