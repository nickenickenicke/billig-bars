import { HappyHours } from '@/models/Bar'
import { getWeekdayName, normalizeTimeFromDB } from '../timeTools'
import * as timeTools from '../timeTools'

let mockedGetTodaysWeekday: jest.SpyInstance<number>
let mockedGetCurrentHour: jest.SpyInstance<number>

describe('Testing getWeekdayName', () => {
  test('should return Måndag', () => {
    //Assign
    const monday = 1
    //Act
    const result = getWeekdayName(monday)
    //Assert
    expect(result).toBe('Måndag')
  })

  test('should return Söndag', () => {
    //Assign
    const sunday = 0
    //Act
    const result = getWeekdayName(sunday)
    //Assert
    expect(result).toBe('Söndag')
  })
})

describe('Testing normalizeTimeFromDB', () => {
  test('should return 00', () => {
    //Assign
    const hour = 0
    //Act
    const result = normalizeTimeFromDB(hour)
    //Assert
    expect(result).toBe('00')
  })
  test('should return 10', () => {
    //Assign
    const hour = 10
    //Act
    const result = normalizeTimeFromDB(hour)
    //Assert
    expect(result).toBe('10')
  })
  test('should return 01:30', () => {
    //Assign
    const hour = 130
    //Act
    const result = normalizeTimeFromDB(hour)
    //Assert
    expect(result).toBe('01:30')
  })
  test('should return 22:30', () => {
    //Assign
    const hour = 2230
    //Act
    const result = normalizeTimeFromDB(hour)
    //Assert
    expect(result).toBe('22:30')
  })
})
