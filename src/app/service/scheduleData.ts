import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
    {Id : 1, PlayingDate: new Date(2021,08,10), HomeTeam: 'Persija', AwayTeam: 'Bali United', HomeScore: 3, AwayScore: 2, RefName: 'Joko', Notes: 'Pertandingan Overtime'},
    {Id : 2, PlayingDate: new Date(2021,08,11), HomeTeam: 'EVOS', AwayTeam: 'Persipon', HomeScore: 1, AwayScore: 2, RefName: 'Kasjo', Notes: 'Pertandingan ngelek'},
    {Id : 3, PlayingDate: new Date(2021,08,12), HomeTeam: 'PERSIS SOLO', AwayTeam: 'Persipon', HomeScore: 2, AwayScore: 3, RefName: 'Parto', Notes: 'Pertandingan ada kerusuhan'},
    {Id : 4, PlayingDate: new Date(2021,08,14), HomeTeam: 'RRQ', AwayTeam: 'PERSIB', HomeScore: 2, AwayScore: 4, RefName: 'Kasjo', Notes: 'Pertandingan aman'},
    {Id : 5, PlayingDate: new Date(2021,08,15), HomeTeam: 'PERSIS SOLO', AwayTeam: 'Bali United', HomeScore: 1, AwayScore: 0, RefName: 'Rudi', Notes: 'Pertandingan aman'},
]

export const TEAM:Team[] = [
    {Id: 1, Name : 'EVOS', Type: 'Over 30'},
    {Id: 2, Name : 'Persija', Type: 'Over 30'},
    {Id: 3, Name : 'Bali United', Type: 'Over 30'},
    {Id: 4, Name : 'Persipon', Type: 'Over 30'},
    {Id: 5, Name : 'PERSIS SOLO', Type: 'Over 30'},
    {Id: 6, Name : 'RRQ', Type: 'Over 30'},
]