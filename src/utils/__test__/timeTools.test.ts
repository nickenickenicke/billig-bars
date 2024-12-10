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
    const min = 0
    //Act
    const result = normalizeTimeFromDB(hour, min)
    //Assert
    expect(result).toBe('00')
  })
  test('should return 01', () => {
    //Assign
    const hour = 1
    const min = 0
    //Act
    const result = normalizeTimeFromDB(hour, min)
    //Assert
    expect(result).toBe('01')
  })
  test('should return 10', () => {
    //Assign
    const hour = 10
    const min = 0
    //Act
    const result = normalizeTimeFromDB(hour, min)
    //Assert
    expect(result).toBe('10')
  })
  test('should return 24', () => {
    //Assign
    const hour = 24
    const min = 0
    //Act
    const result = normalizeTimeFromDB(hour, min)
    //Assert
    expect(result).toBe('24')
  })
  test('should return 01:05', () => {
    //Assign
    const hour = 1
    const min = 5
    //Act
    const result = normalizeTimeFromDB(hour, min)
    //Assert
    expect(result).toBe('01:05')
  })
  test('should return 22:30', () => {
    //Assign
    const hour = 22
    const min = 30
    //Act
    const result = normalizeTimeFromDB(hour, min)
    //Assert
    expect(result).toBe('22:30')
  })
  test('should return 22 if minutes is negative', () => {
    //Assign
    const hour = 22
    const min = -30
    //Act
    const result = normalizeTimeFromDB(hour, min)
    //Assert
    expect(result).toBe('22')
  })
  test('should return 22 if minutes is 60', () => {
    //Assign
    const hour = 22
    const min = 60
    //Act
    const result = normalizeTimeFromDB(hour, min)
    //Assert
    expect(result).toBe('22')
  })
  test('should return 22 if minutes is over 60', () => {
    //Assign
    const hour = 22
    const min = 61
    //Act
    const result = normalizeTimeFromDB(hour, min)
    //Assert
    expect(result).toBe('22')
  })
  test('should return blank string if hour is under 0', () => {
    //Assign
    const hour = -1
    const min = 10
    //Act
    const result = normalizeTimeFromDB(hour, min)
    //Assert
    expect(result).toBe('')
  })
  test('should return blank string if hour is over 24', () => {
    //Assign
    const hour = 25
    const min = 10
    //Act
    const result = normalizeTimeFromDB(hour, min)
    //Assert
    expect(result).toBe('')
  })
})
