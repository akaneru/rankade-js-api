# Rankade Javascript API implementation

Javascript implementation of the rankade API https://rankade.com/api

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

### Implemented API methods

#### Authentication

- <code>rankade.auth.auth()</code> perform authentication and obtain the JWT token used for other API calls
- <code>rankade.auth.getAccessToken()</code> retrieve the JWT token string
- <code>rankade.auth.isExpired()</code> check if the token provided with the <code>rankade.auth.auth()</code> method is expired or not

#### Games

- <code>rankade.games.popular()</code> retrieve rankade's popular games
- <code>rankade.games.list()</code> retrieve group's games
- <code>rankade.games.search(name)</code> search a game by giving a name or part of
- <code>rankade.games.create(name)</code> create a game by name and retrieve it

#### Matches

- <code>rankade.matches.create(matches, dryrun)</code> create matches by giving an array of objects accordant to specifications https://rankade.com/api#post-matches-match (see below the **Match's object properties detail** captcher)
- <code>rankade.matches.exists(id)</code> check if a match already exists
- <code>rankade.matches.status()</code>retrieve matches' queue/elaboration status

#### Players

- <code>rankade.players.players()</code> retrieve group's players

#### Quota

- <code>rankade.quota.quota()</code> retrieve group's API quota usage

## Change log

- 2019-05-29 added the <code>rankade.auth.isExpired()</code> method and updated the readme file
- 2019-05-23 api errors parsing
- 2019-05-22 started implementation of basic calls
