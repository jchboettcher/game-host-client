import gql from 'graphql-tag'

export const ALL_GAMES = gql`
  query allGames {
    allGames {
      id
      roomCode
      type
      numPlayers
      turn
      public
      createdAt
    }
  }
`

export const GET_GAME = gql`
  query gameByCode($roomCode: String!) {
    gameByCode (roomCode: $roomCode) {
      id
      roomCode
      type
      numPlayers
      turn
      public
      createdAt
    }
  }
`

export const GET_PLAYERS = gql`
  query playersInRoom($roomCode: String!) {
    playersInRoom (roomCode: $roomCode) {
      id
      name
      playerNumber
      joinedAt
      game {
        id
        roomCode
        numPlayers
      }
    }
  }
`

export const UPDATE_TURN = gql`
  mutation updateTurn($id: ID!, $newTurn: Int!) {
    updateTurn (id: $id, newTurn: $newTurn) {
      id
      roomCode
      type
      numPlayers
      turn
      public
      createdAt
    }
  }
`

export const ADD_GAME = gql`
  mutation addGame($gameInput: AddGame!) {
    addGame (input: $gameInput) {
      id
      roomCode
      type
      numPlayers
      turn
      public
      createdAt
    }
  }
`

export const ADD_PLAYER = gql`
  mutation addPlayer($playerInput: AddPlayer!) {
    addPlayer (input: $playerInput) {
      id
      name
      playerNumber
      joinedAt
      game {
        id
        roomCode
        numPlayers
      }
    }
  }
`

export const REDISTR_ORDER = gql`
  mutation redistrOrder($id: ID!) {
    redistrOrder (id: $id) {
      id
      roomCode
      type
      numPlayers
      turn
      public
      createdAt
    }
  }
`
