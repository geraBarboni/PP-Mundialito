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
    id: 'A',
    countries: [
      { group: 'A', id: 1, countrie: 'Qatar', points: 0 },
      { group: 'A', id: 2, countrie: 'Ecuador', points: 0 },
      { group: 'A', id: 3, countrie: 'Senegal', points: 0 },
      { group: 'A', id: 4, countrie: 'Paises Bajos', points: 0 },
    ],
  },
  {
    id: 'B',
    countries: [
      { group: 'B', id: 5, countrie: 'Inglaterra', points: 0 },
      { group: 'B', id: 6, countrie: 'Iran', points: 0 },
      { group: 'B', id: 7, countrie: 'USA', points: 0 },
      { group: 'B', id: 8, countrie: 'Euro', points: 0 },
    ],
  },
  {
    id: 'C',
    countries: [
      { group: 'C', id: 9, countrie: 'Argentina', points: 0 },
      { group: 'C', id: 10, countrie: 'Arabia Saudita', points: 0 },
      { group: 'C', id: 11, countrie: 'Mexico', points: 0 },
      { group: 'C', id: 12, countrie: 'Polonia', points: 0 },
    ],
  },
  {
    id: 'D',
    countries: [
      { group: 'D', id: 13, countrie: 'Francia', points: 0 },
      { group: 'D', id: 14, countrie: 'ICPO', points: 0 },
      { group: 'D', id: 15, countrie: 'Dinamarca', points: 0 },
      { group: 'D', id: 16, countrie: 'Tusnia', points: 0 },
    ],
  },
  {
    id: 'E',
    countries: [
      { group: 'E', id: 17, countrie: 'España', points: 0 },
      { group: 'E', id: 18, countrie: 'ICPO', points: 0 },
      { group: 'E', id: 19, countrie: 'Alemania', points: 0 },
      { group: 'E', id: 20, countrie: 'Japon', points: 0 },
    ],
  },
  {
    id: 'F',
    countries: [
      { group: 'F', id: 21, countrie: 'Belgica', points: 0 },
      { group: 'F', id: 22, countrie: 'Canada', points: 0 },
      { group: 'F', id: 23, countrie: 'Marruecos', points: 0 },
      { group: 'F', id: 24, countrie: 'Croacia', points: 0 },
    ],
  },
  {
    id: 'G',
    countries: [
      { group: 'G', id: 25, countrie: 'Brasil', points: 0 },
      { group: 'G', id: 26, countrie: 'Serbia', points: 0 },
      { group: 'G', id: 27, countrie: 'Suiza', points: 0 },
      { group: 'G', id: 28, countrie: 'Camerun', points: 0 },
    ],
  },
  {
    id: 'H',
    countries: [
      { group: 'H', id: 29, countrie: 'Portugal', points: 0 },
      { group: 'H', id: 30, countrie: 'Ghana', points: 0 },
      { group: 'H', id: 31, countrie: 'Uruguay', points: 0 },
      { group: 'H', id: 32, countrie: 'Korea Del Sur', points: 0 },
    ],
  },
]

const initialGroupFasesMatches = [
  { igGroup: 'A', idMatch: 'A1', home: 1, away: 2, homeScore: 0, awayScore: 0 },
  { igGroup: 'A', idMatch: 'A2', home: 3, away: 4, homeScore: 0, awayScore: 0 },
  { igGroup: 'A', idMatch: 'A3', home: 1, away: 3, homeScore: 0, awayScore: 0 },
  { igGroup: 'A', idMatch: 'A4', home: 2, away: 4, homeScore: 0, awayScore: 0 },
  { igGroup: 'A', idMatch: 'A5', home: 4, away: 1, homeScore: 0, awayScore: 0 },
  { igGroup: 'A', idMatch: 'A6', home: 2, away: 3, homeScore: 0, awayScore: 0 },
  { igGroup: 'B', idMatch: 'B1', home: 5, away: 6, homeScore: 0, awayScore: 0 },
  { igGroup: 'B', idMatch: 'B2', home: 7, away: 8, homeScore: 0, awayScore: 0 },
  { igGroup: 'B', idMatch: 'B3', home: 5, away: 7, homeScore: 0, awayScore: 0 },
  { igGroup: 'B', idMatch: 'B4', home: 6, away: 8, homeScore: 0, awayScore: 0 },
  { igGroup: 'B', idMatch: 'B5', home: 8, away: 5, homeScore: 0, awayScore: 0 },
  { igGroup: 'B', idMatch: 'B6', home: 6, away: 7, homeScore: 0, awayScore: 0 },
  {
    igGroup: 'C',
    idMatch: 'C1',
    home: 9,
    away: 10,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'C',
    idMatch: 'C2',
    home: 11,
    away: 12,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'C',
    idMatch: 'C3',
    home: 9,
    away: 11,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'C',
    idMatch: 'C4',
    home: 10,
    away: 12,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'C',
    idMatch: 'C5',
    home: 12,
    away: 9,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'C',
    idMatch: 'C6',
    home: 10,
    away: 11,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'D',
    idMatch: 'D1',
    home: 13,
    away: 14,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'D',
    idMatch: 'D2',
    home: 15,
    away: 16,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'D',
    idMatch: 'D3',
    home: 13,
    away: 15,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'D',
    idMatch: 'D4',
    home: 14,
    away: 16,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'D',
    idMatch: 'D5',
    home: 16,
    away: 13,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'D',
    idMatch: 'D6',
    home: 14,
    away: 15,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'E',
    idMatch: 'E1',
    home: 17,
    away: 18,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'E',
    idMatch: 'E2',
    home: 19,
    away: 20,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'E',
    idMatch: 'E3',
    home: 17,
    away: 19,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'E',
    idMatch: 'E4',
    home: 18,
    away: 20,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'E',
    idMatch: 'E5',
    home: 20,
    away: 17,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'E',
    idMatch: 'E6',
    home: 18,
    away: 19,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'F',
    idMatch: 'F1',
    home: 21,
    away: 22,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'F',
    idMatch: 'F2',
    home: 23,
    away: 24,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'F',
    idMatch: 'F3',
    home: 21,
    away: 23,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'F',
    idMatch: 'F4',
    home: 22,
    away: 24,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'F',
    idMatch: 'F5',
    home: 24,
    away: 21,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'F',
    idMatch: 'F6',
    home: 22,
    away: 23,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'G',
    idMatch: 'G1',
    home: 25,
    away: 26,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'G',
    idMatch: 'G2',
    home: 27,
    away: 28,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'G',
    idMatch: 'G3',
    home: 25,
    away: 27,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'G',
    idMatch: 'G4',
    home: 26,
    away: 28,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'G',
    idMatch: 'G5',
    home: 28,
    away: 25,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'G',
    idMatch: 'G6',
    home: 26,
    away: 27,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'H',
    idMatch: 'H1',
    home: 29,
    away: 30,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'H',
    idMatch: 'H2',
    home: 31,
    away: 32,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'H',
    idMatch: 'H3',
    home: 29,
    away: 31,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'H',
    idMatch: 'H4',
    home: 30,
    away: 32,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'H',
    idMatch: 'H5',
    home: 32,
    away: 29,
    homeScore: 0,
    awayScore: 0,
  },
  {
    igGroup: 'H',
    idMatch: 'H6',
    home: 30,
    away: 31,
    homeScore: 0,
    awayScore: 0,
  },
]

export const MundialProvider = ({ children }) => {
  const [players, setPlayers] = useState(initialPlayers)
  const [groups, setGroups] = useState(initialGroups)
  const [groupFasesMatches, setGroupFasesMatches] = useState(
    initialGroupFasesMatches,
  )

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
  const shufflePlayers = (playersArray) => {
    setPlayers(playersArray.sort(() => Math.random() - 0.5))
  }

  //3 Manejar los resultados
  const handleMatches = (m, hScore, aScore) => {
    const newScore = groupFasesMatches.map((gfm) => {
      if (gfm.idMatch === m.idMatch) {
        return {
          //...groupFasesMatches,
          igGroup: m.igGroup,
          idMatch: m.idMatch,
          home: m.home,
          away: m.away,
          homeScore: parseInt(hScore),
          awayScore: parseInt(aScore),
        }
      }
      return gfm
    })
    setGroupFasesMatches(newScore)
    //handleScore(m.idMatch)
  }

  //4 Asignar puntos
  const handleScore = (especificMatch) => {
    console.log(especificMatch)

    const thisMatch = groupFasesMatches.find(
      (gfm) => gfm.idMatch === especificMatch,
    )

    console.log(thisMatch)

    /*
    const matchPoints = groups.forEach((g) =>
      g.countries.map((g) => {
        if (thisMatch.homeScore > thisMatch.awayScore) {
          if (g.group === thisMatch.igGroup) {
            console.log('tuki')
          }
        }
      }),
    )*/
  }

  const context = {
    players,
    setPlayers,
    groups,
    setGroups,
    handlePlayersName,
    shufflePlayers,
    handleMatches,
    groupFasesMatches,
    setGroupFasesMatches,
    handleScore,
  }

  return (
    <MundialContext.Provider value={context}>
      {children}
    </MundialContext.Provider>
  )
}
