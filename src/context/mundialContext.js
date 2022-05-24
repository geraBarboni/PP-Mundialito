import { createContext, useState } from 'react'

export const MundialContext = createContext([])

const initialPlayers = [
  { id: 1, player: 'cpu' },
  { id: 2, player: 'cpu' },
  { id: 3, player: 'cpu' },
  { id: 4, player: 'cpu' },
  { id: 5, player: 'cpu' },
  { id: 6, player: 'cpu' },
  { id: 7, player: 'cpu' },
  { id: 8, player: 'cpu' },
  { id: 9, player: 'cpu' },
  { id: 10, player: 'cpu' },
  { id: 11, player: 'cpu' },
  { id: 12, player: 'cpu' },
  { id: 13, player: 'cpu' },
  { id: 14, player: 'cpu' },
  { id: 15, player: 'cpu' },
  { id: 16, player: 'cpu' },
  { id: 17, player: 'cpu' },
  { id: 18, player: 'cpu' },
  { id: 19, player: 'cpu' },
  { id: 20, player: 'cpu' },
  { id: 21, player: 'cpu' },
  { id: 22, player: 'cpu' },
  { id: 23, player: 'cpu' },
  { id: 24, player: 'cpu' },
  { id: 25, player: 'cpu' },
  { id: 26, player: 'cpu' },
  { id: 27, player: 'cpu' },
  { id: 28, player: 'cpu' },
  { id: 29, player: 'cpu' },
  { id: 30, player: 'cpu' },
  { id: 31, player: 'cpu' },
  { id: 32, player: 'cpu' },
]
const initialGroups = [
  {
    group: 'A',
    id: 1,
    countrie: 'Qatar',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'A',
    id: 2,
    countrie: 'Ecuador',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'A',
    id: 3,
    countrie: 'Senegal',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'A',
    id: 4,
    countrie: 'Paises Bajos',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'B',
    id: 5,
    countrie: 'Inglaterra',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'B',
    id: 6,
    countrie: 'Iran',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'B',
    id: 7,
    countrie: 'USA',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'B',
    id: 8,
    countrie: 'Euro',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'C',
    id: 9,
    countrie: 'Argentina',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'C',
    id: 10,
    countrie: 'Arabia Saudita',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'C',
    id: 11,
    countrie: 'Mexico',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'C',
    id: 12,
    countrie: 'Polonia',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'D',
    id: 13,
    countrie: 'Francia',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'D',
    id: 14,
    countrie: 'ICPO',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'D',
    id: 15,
    countrie: 'Dinamarca',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'D',
    id: 16,
    countrie: 'Tusnia',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'E',
    id: 17,
    countrie: 'España',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'E',
    id: 18,
    countrie: 'ICPO',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'E',
    id: 19,
    countrie: 'Alemania',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'E',
    id: 20,
    countrie: 'Japon',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'F',
    id: 21,
    countrie: 'Belgica',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'F',
    id: 22,
    countrie: 'Canada',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'F',
    id: 23,
    countrie: 'Marruecos',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'F',
    id: 24,
    countrie: 'Croacia',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'G',
    id: 25,
    countrie: 'Brasil',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'G',
    id: 26,
    countrie: 'Serbia',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'G',
    id: 27,
    countrie: 'Suiza',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'G',
    id: 28,
    countrie: 'Camerun',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'H',
    id: 29,
    countrie: 'Portugal',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'H',
    id: 30,
    countrie: 'Ghana',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'H',
    id: 31,
    countrie: 'Uruguay',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
  {
    group: 'H',
    id: 32,
    countrie: 'Korea Del Sur',
    points: 0,
    goalsPlus: 0,
    goalsRest: 0,
    goalsDiference: 0,
    eighths: false,
    quertesFinals: false,
    semiFinals: false,
    finals: false,
  },
]
const initialGroupFasesMatches = [
  {
    igGroup: 'A',
    idMatch: 'A1',
    home: 1,
    away: 2,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'A',
    idMatch: 'A2',
    home: 3,
    away: 4,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'A',
    idMatch: 'A3',
    home: 1,
    away: 3,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'A',
    idMatch: 'A4',
    home: 2,
    away: 4,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'A',
    idMatch: 'A5',
    home: 4,
    away: 1,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'A',
    idMatch: 'A6',
    home: 2,
    away: 3,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'B',
    idMatch: 'B1',
    home: 5,
    away: 6,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'B',
    idMatch: 'B2',
    home: 7,
    away: 8,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'B',
    idMatch: 'B3',
    home: 5,
    away: 7,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'B',
    idMatch: 'B4',
    home: 6,
    away: 8,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'B',
    idMatch: 'B5',
    home: 8,
    away: 5,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'B',
    idMatch: 'B6',
    home: 6,
    away: 7,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'C',
    idMatch: 'C1',
    home: 9,
    away: 10,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'C',
    idMatch: 'C2',
    home: 11,
    away: 12,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'C',
    idMatch: 'C3',
    home: 9,
    away: 11,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'C',
    idMatch: 'C4',
    home: 10,
    away: 12,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'C',
    idMatch: 'C5',
    home: 12,
    away: 9,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'C',
    idMatch: 'C6',
    home: 10,
    away: 11,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'D',
    idMatch: 'D1',
    home: 13,
    away: 14,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'D',
    idMatch: 'D2',
    home: 15,
    away: 16,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'D',
    idMatch: 'D3',
    home: 13,
    away: 15,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'D',
    idMatch: 'D4',
    home: 14,
    away: 16,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'D',
    idMatch: 'D5',
    home: 16,
    away: 13,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'D',
    idMatch: 'D6',
    home: 14,
    away: 15,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'E',
    idMatch: 'E1',
    home: 17,
    away: 18,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'E',
    idMatch: 'E2',
    home: 19,
    away: 20,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'E',
    idMatch: 'E3',
    home: 17,
    away: 19,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'E',
    idMatch: 'E4',
    home: 18,
    away: 20,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'E',
    idMatch: 'E5',
    home: 20,
    away: 17,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'E',
    idMatch: 'E6',
    home: 18,
    away: 19,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'F',
    idMatch: 'F1',
    home: 21,
    away: 22,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'F',
    idMatch: 'F2',
    home: 23,
    away: 24,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'F',
    idMatch: 'F3',
    home: 21,
    away: 23,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'F',
    idMatch: 'F4',
    home: 22,
    away: 24,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'F',
    idMatch: 'F5',
    home: 24,
    away: 21,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'F',
    idMatch: 'F6',
    home: 22,
    away: 23,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'G',
    idMatch: 'G1',
    home: 25,
    away: 26,
    homeScore: null,
    awayScore: null,
  },
  {
    igGroup: 'G',
    idMatch: 'G2',
    home: 27,
    away: 28,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'G',
    idMatch: 'G3',
    home: 25,
    away: 27,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'G',
    idMatch: 'G4',
    home: 26,
    away: 28,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'G',
    idMatch: 'G5',
    home: 28,
    away: 25,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'G',
    idMatch: 'G6',
    home: 26,
    away: 27,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'H',
    idMatch: 'H1',
    home: 29,
    away: 30,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'H',
    idMatch: 'H2',
    home: 31,
    away: 32,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'H',
    idMatch: 'H3',
    home: 29,
    away: 31,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'H',
    idMatch: 'H4',
    home: 30,
    away: 32,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'H',
    idMatch: 'H5',
    home: 32,
    away: 29,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'H',
    idMatch: 'H6',
    home: 30,
    away: 31,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
]
const initialGamesRoundOf16 = [
  {
    igGroup: 'AB',
    idMatch: 'AB1',
    homeI: 1,
    awayI: 4,
    homeGroup: 'A',
    awayGroup: 'B',
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'AB',
    idMatch: 'AB2',
    homeI: 3,
    awayI: 2,
    homeGroup: 'B',
    awayGroup: 'A',
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'CD',
    idMatch: 'CD1',
    homeI: 5,
    awayI: 8,
    homeGroup: 'C',
    awayGroup: 'D',
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'CD',
    idMatch: 'CD2',
    homeI: 7,
    awayI: 6,
    homeGroup: 'D',
    awayGroup: 'C',
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'EF',
    idMatch: 'EF1',
    homeI: 9,
    awayI: 12,
    homeGroup: 'E',
    awayGroup: 'F',
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'EF',
    idMatch: 'EF2',
    homeI: 11,
    awayI: 10,
    homeGroup: 'F',
    awayGroup: 'E',
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'GH',
    idMatch: 'GH1',
    homeI: 13,
    awayI: 16,
    homeGroup: 'G',
    awayGroup: 'H',
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    igGroup: 'GH',
    idMatch: 'GH2',
    homeI: 15,
    awayI: 14,
    homeGroup: 'H',
    awayGroup: 'G',
    homeScore: null,
    awayScore: null,
    finished: false,
  },
]

const initialGamesRoundOf8 = [
  {
    idMatch: 'RO81',
    homeI: 1,
    awayI: 2,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    idMatch: 'RO82',
    homeI: 3,
    awayI: 4,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    idMatch: 'RO83',
    homeI: 5,
    awayI: 6,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    idMatch: 'RO84',
    homeI: 7,
    awayI: 8,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
]

const initialGamesRoundOfSemiFinales = [
  {
    idMatch: 'SF81',
    homeI: 1,
    awayI: 2,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
  {
    idMatch: 'SF82',
    homeI: 3,
    awayI: 4,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
]

const initialGamesRoundOfFinales = [
  {
    idMatch: 'F1',
    homeI: 1,
    awayI: 2,
    homeScore: null,
    awayScore: null,
    finished: false,
  },
]
export const MundialProvider = ({ children }) => {
  const [players, setPlayers] = useState(initialPlayers)
  const [groups, setGroups] = useState(initialGroups)
  const [groupsId, setGroupsId] = useState([
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
  ])
  const [groupFasesMatches, setGroupFasesMatches] = useState(
    initialGroupFasesMatches,
  )
  const [in16, setIn16] = useState([])
  //
  const [gamesRoundOf16, setGamesRoundOf16] = useState(initialGamesRoundOf16)
  const [roundOf16Finished, setRoundOf16Finished] = useState(true)
  const [in8, setIn8] = useState([])
  //
  const [gamesRoundOf8, setGamesRoundOf8] = useState(initialGamesRoundOf8)
  const [roundOf8Finished, setRoundOf8Finished] = useState(true)
  const [inSF, setInSF] = useState([])
  //
  const [gamesRoundOfSF, setGamesRoundOfSF] = useState(
    initialGamesRoundOfSemiFinales,
  )
  const [roundOfSFFinished, setRoundOfSFFinished] = useState(true)
  const [inF, setInF] = useState([])
  //
  const [gamesRoundOfF, setGamesRoundOfF] = useState(initialGamesRoundOfFinales)
  const [roundOfFFinished, setRoundOfFFinished] = useState(true)
  const [inW, setInW] = useState([])

  //1 Asigno los nombres a los usuarios
  const handlePlayersName = (id, newUser) => {
    const newPlayer = players.map((p) => {
      if (p.id === id) {
        return {
          ...players,
          id: p.id,
          player: newUser,
        }
      }
      return p
    })
    setPlayers(newPlayer)
  }

  //2 Ordeno aleatoreamente los usuarios
  const shufflePlayers = (arr) => {
    setPlayers(arr.sort(() => Math.random() - 0.5))
  }

  //3 Manejar los resultados
  const handleMatches = (m, hScore, aScore) => {
    const newScore = groupFasesMatches.map((gfm) => {
      if (gfm.idMatch === m.idMatch) {
        return {
          igGroup: m.igGroup,
          idMatch: m.idMatch,
          home: m.home,
          away: m.away,
          homeScore: parseInt(hScore),
          awayScore: parseInt(aScore),
          finished: m.finished,
        }
      }
      return gfm
    })
    setGroupFasesMatches(newScore)
  }

  //4 Asignar puntos
  const handleScore = (especificMatch) => {
    const thisMatch = groupFasesMatches.find(
      (gfm) => gfm.idMatch === especificMatch,
    )

    if (thisMatch.homeScore > thisMatch.awayScore) {
      const pointsForLocal = groups.map((t) => {
        if (t.id === thisMatch.home) {
          return {
            group: t.group,
            id: t.id,
            countrie: t.countrie,
            points: t.points + 3,
            goalsPlus: t.goalsPlus + thisMatch.homeScore,
            goalsRest: t.goalsRest + thisMatch.awayScore,
            goalsDiference: t.goalsPlus - t.goalsRest,
            eighths: t.eighths,
            quertesFinals: t.quertesFinals,
            semiFinals: t.semiFinals,
            finals: t.finals,
          }
        }
        if (t.id === thisMatch.away) {
          return {
            group: t.group,
            id: t.id,
            countrie: t.countrie,
            points: t.points,
            goalsPlus: t.goalsPlus + thisMatch.awayScore,
            goalsRest: t.goalsRest + thisMatch.homeScore,
            goalsDiference: t.goalsPlus - t.goalsRest,
            eighths: t.eighths,
            quertesFinals: t.quertesFinals,
            semiFinals: t.semiFinals,
            finals: t.finals,
          }
        }
        return t
      })
      setGroups(pointsForLocal)
    } else if (thisMatch.homeScore < thisMatch.awayScore) {
      const pointsForAway = groups.map((t) => {
        if (t.id === thisMatch.away) {
          return {
            group: t.group,
            id: t.id,
            countrie: t.countrie,
            points: t.points + 3,
            goalsPlus: t.goalsPlus + thisMatch.awayScore,
            goalsRest: t.goalsRest + thisMatch.homeScore,
            goalsDiference: t.goalsPlus - t.goalsRest,
            eighths: t.eighths,
            quertesFinals: t.quertesFinals,
            semiFinals: t.semiFinals,
            finals: t.finals,
          }
        }
        if (t.id === thisMatch.home) {
          return {
            group: t.group,
            id: t.id,
            countrie: t.countrie,
            points: t.points,
            goalsPlus: t.goalsPlus + thisMatch.homeScore,
            goalsRest: t.goalsRest + thisMatch.awayScore,
            goalsDiference: t.goalsPlus - t.goalsRest,
            eighths: t.eighths,
            quertesFinals: t.quertesFinals,
            semiFinals: t.semiFinals,
            finals: t.finals,
          }
        }
        return t
      })
      setGroups(pointsForAway)
    } else if (thisMatch.homeScore === thisMatch.awayScore) {
      const pointsForBoth = groups.map((t) => {
        if (t.id === thisMatch.away) {
          return {
            group: t.group,
            id: t.id,
            countrie: t.countrie,
            points: t.points + 1,
            goalsPlus: t.goalsPlus + thisMatch.awayScore,
            goalsRest: t.goalsRest + thisMatch.homeScore,
            goalsDiference: t.goalsPlus - t.goalsRest,
            eighths: t.eighths,
            quertesFinals: t.quertesFinals,
            semiFinals: t.semiFinals,
            finals: t.finals,
          }
        }
        if (t.id === thisMatch.home) {
          return {
            group: t.group,
            id: t.id,
            countrie: t.countrie,
            points: t.points + 1,
            goalsPlus: t.goalsPlus + thisMatch.homeScore,
            goalsRest: t.goalsRest + thisMatch.awayScore,
            goalsDiference: t.goalsPlus - t.goalsRest,
            eighths: t.eighths,
            quertesFinals: t.quertesFinals,
            semiFinals: t.semiFinals,
            finals: t.finals,
          }
        }
        return t
      })
      setGroups(pointsForBoth)
    }
    const isFinished = groupFasesMatches.map((gfm) => {
      if (gfm.idMatch === thisMatch.idMatch) {
        return {
          igGroup: thisMatch.igGroup,
          idMatch: thisMatch.idMatch,
          home: thisMatch.home,
          away: thisMatch.away,
          homeScore: thisMatch.homeScore,
          awayScore: thisMatch.awayScore,
          finished: true,
        }
      }
      return gfm
    })
    setGroupFasesMatches(isFinished)
  }

  //5 Seleccionar equipos en octavos
  const passToRoundOf16 = () => {
    const r16 = groupsId
      .map((idGroups) =>
        groups
          .filter((g) => g.group === idGroups)
          .sort(
            (a, b) =>
              b.points - a.points || b.goalsDiference - a.goalsDiference,
          )
          .slice(0, 2),
      )
      .flat()
    setIn16(r16)
  }

  //6 Manejar resultados de octavos
  const handleMatchesOf16 = (m, hScore, aScore) => {
    const newScore = gamesRoundOf16.map((gr16) => {
      if (gr16.idMatch === m.idMatch) {
        return {
          igGroup: m.igGroup,
          idMatch: m.idMatch,
          homeI: m.homeI,
          awayI: m.awayI,
          homeGroup: m.homeGroup,
          awayGroup: m.awayGroup,
          homeScore: parseInt(hScore),
          awayScore: parseInt(aScore),
          finished: m.finished,
        }
      }
      return gr16
    })
    setGamesRoundOf16(newScore)
  }

  //7 Verificar si todos los partidos se han jugado
  const readyToRoundOf8 = () => {
    const allGamesFinished = gamesRoundOf16.some((e) => e.homeScore === null)
    setRoundOf16Finished(allGamesFinished)
  }

  //8 Seleccionar equipos en cuartos
  const passToRoundOf8 = () => {
    const teamsI = []
    gamesRoundOf16.map((g) =>
      g.homeScore > g.awayScore ? teamsI.push(g.homeI) : teamsI.push(g.awayI),
    )
    const passToRO8 = []
    in16.forEach((t, i) => {
      teamsI.map((to8) => to8 - 1 === i && passToRO8.push(t))
    })
    setIn8(passToRO8)
  }

  //9 Manejar resultados de octavos
  const handleMatchesOf8 = (m, hScore, aScore) => {
    const newScore = gamesRoundOf8.map((gr8) => {
      if (gr8.idMatch === m.idMatch) {
        return {
          idMatch: m.idMatch,
          homeI: m.homeI,
          awayI: m.awayI,
          homeScore: parseInt(hScore),
          awayScore: parseInt(aScore),
          finished: m.finished,
        }
      }
      return gr8
    })
    setGamesRoundOf8(newScore)
  }

  //10 Verificar si todos los partidos se han jugado
  const readyToSemifinals = () => {
    const allGamesFinished = gamesRoundOf8.some((e) => e.homeScore === null)
    setRoundOf8Finished(allGamesFinished)
  }

  //11 Seleccionar equipos en semifinales
  const passToSemifinals = () => {
    const teamsI = []
    gamesRoundOf8.map((g) =>
      g.homeScore > g.awayScore ? teamsI.push(g.homeI) : teamsI.push(g.awayI),
    )
    const passToSF = []
    in8.forEach((t, i) => {
      teamsI.map((tSF) => tSF - 1 === i && passToSF.push(t))
    })
    setInSF(passToSF)
  }

  //12 Manejar resultados de semifinales
  const handleMatchesOfSF = (m, hScore, aScore) => {
    const newScore = gamesRoundOfSF.map((grSF) => {
      if (grSF.idMatch === m.idMatch) {
        return {
          idMatch: m.idMatch,
          homeI: m.homeI,
          awayI: m.awayI,
          homeScore: parseInt(hScore),
          awayScore: parseInt(aScore),
          finished: m.finished,
        }
      }
      return grSF
    })
    setGamesRoundOfSF(newScore)
  }

  //13 Verificar si todos los partidos se han jugado
  const readyToFinals = () => {
    const allGamesFinished = gamesRoundOfSF.some((e) => e.homeScore === null)
    setRoundOfSFFinished(allGamesFinished)
  }

  //14 Seleccionar equipos en semifinales
  const passToFinals = () => {
    const teamsI = []
    gamesRoundOfSF.map((g) =>
      g.homeScore > g.awayScore ? teamsI.push(g.homeI) : teamsI.push(g.awayI),
    )
    const passToF = []
    inSF.forEach((t, i) => {
      teamsI.map((tF) => tF - 1 === i && passToF.push(t))
    })
    setInF(passToF)
  }

  //15 Manejar resultados de semifinales
  const handleMatchesOfF = (m, hScore, aScore) => {
    const newScore = gamesRoundOfF.map((grF) => {
      if (grF.idMatch === m.idMatch) {
        return {
          idMatch: m.idMatch,
          homeI: m.homeI,
          awayI: m.awayI,
          homeScore: parseInt(hScore),
          awayScore: parseInt(aScore),
          finished: m.finished,
        }
      }
      return grF
    })
    setGamesRoundOfF(newScore)
  }

  //16 Verificar si todos los partidos se han jugado
  const readyToWin = () => {
    const allGamesFinished = gamesRoundOfF.some((e) => e.homeScore === null)
    setRoundOfFFinished(allGamesFinished)
  }

  //17 Seleccionar equipos en semifinales
  const passToWinning = () => {
    const teamsI = []
    gamesRoundOfF.map((g) =>
      g.homeScore > g.awayScore ? teamsI.push(g.homeI) : teamsI.push(g.awayI),
    )
    const passToW = []
    /*
    inF.forEach((t, i) => {
      teamsI.map((tF) => tF - 1 === i && passToW.push(t))
    })
    setInF(passToW)
    */
  }

  const context = {
    //States
    players,
    setPlayers,
    groupsId,
    groups,
    setGroups,
    groupFasesMatches,
    setGroupFasesMatches,
    gamesRoundOf16,
    setGamesRoundOf16,
    in16,
    setIn16,
    roundOf16Finished,
    setRoundOf16Finished,
    in8,
    setIn8,
    gamesRoundOf8,
    setGamesRoundOf8,
    roundOf8Finished,
    setRoundOf8Finished,
    inSF,
    setInSF,
    gamesRoundOfSF,
    setGamesRoundOfSF,
    roundOfSFFinished,
    setRoundOfSFFinished,
    inF,
    setInF,
    gamesRoundOfF,
    setGamesRoundOfF,
    roundOfFFinished,
    setRoundOfFFinished,
    inW,
    setInW,
    //Functions
    handlePlayersName,
    shufflePlayers,
    handleMatches,
    handleScore,
    passToRoundOf16,
    handleMatchesOf16,
    readyToRoundOf8,
    passToRoundOf8,
    readyToSemifinals,
    passToSemifinals,
    handleMatchesOf8,
    handleMatchesOfSF,
    readyToFinals,
    passToFinals,
    handleMatchesOfF,
    readyToWin,
    passToWinning,
  }

  return (
    <MundialContext.Provider value={context}>
      {children}
    </MundialContext.Provider>
  )
}
