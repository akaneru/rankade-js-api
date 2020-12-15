# Node.js module for rankade API

API reference https://rankade.com/api

## Install

    yarn add rankade-js-api

## Usage

### API access

In order to use API for your group you need to obtain API credentials by following that instructions https://rankade.com/api#intro

### Example


    'use strict'

    const Rankade = require('rankade-js-lib')

    // obtain credentials from group's API setting page
    const rankade = new Rankade(
      'https://api.endpoint',
      'key',
      'secret',
      1500 // timeout
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

### Reference

#### Authentication

- <code>rankade.auth.auth()</code> perform authentication and obtain the JWT token used for other API calls
- <code>rankade.auth.getAccessToken()</code> retrieve the JWT token string
- <code>rankade.auth.setAccessToken(token)</code> set the JWT token string
- <code>rankade.auth.isExpired()</code> check if the token provided with the <code>rankade.auth.auth()</code> method is expired or not

#### Games

- <code>rankade.games.popular()</code> retrieve rankade's popular games
- <code>rankade.games.list()</code> retrieve group's games
- <code>rankade.games.search(name)</code> search a game by giving a name or part of
- <code>rankade.games.create(name)</code> create a game by name and retrieve it

#### Matches

- <code>rankade.matches.create(matches, dryrun)</code> create matches by giving an array of objects accordant to specifications https://rankade.com/api#post-matches-match (see below the **Match's object properties detail** captcher)
- <code>rankade.matches.exists(id)</code> check if a match already exists
- <code>rankade.matches.status()</code> retrieve matches' queue/elaboration status
- <code>rankade.matches.list(subset = 'main', page = 1)</code> retrieve group's matches

#### Players

- <code>rankade.players.players(page)</code> retrieve group's players
- <code>rankade.players.player(name)</code> create a ghost player

#### Subsets

- <code>rankade.subsets.list()</code> retrieve group's subsets

#### Rankings

- <code>rankade.rankings.list(subset = 'main', match = 'last', page = 1)</code> retrieve group's rankings

#### Quota

- <code>rankade.quota.quota()</code> retrieve group's API quota usage

## Change log

- 2020-12-15 error object check in parse() function, readme edits
- 2020-07-18 reformat code
- 2020-04-01 added the <code>rankade.matches.list</code> method
- 2019-08-21 added the <code>rankade.rankings.list and rankade.subsets.list</code> methods
- 2019-08-08 added the <code>rankade.players.player(name)</code> method
- 2019-06-26 added the <code>rankade.auth.setAccessToken(token)</code> method and updated the readme file
- 2019-06-18 added the <code>rankade.setKey(key)</code>, <code>rankade.setSecret(secret)</code> methods and players pagination
- 2019-05-29 added the <code>rankade.auth.isExpired()</code> method and updated the readme file
- 2019-05-23 api errors parsing
- 2019-05-22 started implementation of basic calls
