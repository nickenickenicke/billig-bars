import { HappyHours, OpeningHours } from '@/models/Bar'
import { checkIsOpen, checkIsHappyHour, getWeekdayName, normalizeTimeFromDB } from '../timeTools'
import * as timeTools from '../timeTools'

let mockedGetTodaysWeekday: jest.SpyInstance<number>
let mockedGetCurrentHour: jest.SpyInstance<number>

describe('Testing checkIsOpen', () => {
  beforeEach(() => {
    mockedGetTodaysWeekday = jest.spyOn(timeTools, 'getTodaysWeekday')
    mockedGetCurrentHour = jest.spyOn(timeTools, 'getCurrentHour')
  })

  afterEach(() => {
    mockedGetTodaysWeekday.mockReset()
    mockedGetCurrentHour.mockReset()
  })

  test('should return true if the bar is open today', () => {
    //Assign
    mockedGetTodaysWeekday.mockImplementation(() => 2)
    mockedGetCurrentHour.mockImplementation(() => 14)
    const openingHours: OpeningHours[] = [
      {
        day_of_week: 2,
        opens_at: 14,
        closes_at: 23
      }
    ]
    //Act
    const result = checkIsOpen(openingHours)
    //Assert
    expect(result).toBe(true)
  })
  test('should return false if the bar is not open today', () => {
    //Assign
    mockedGetTodaysWeekday.mockImplementation(() => 1)
    mockedGetCurrentHour.mockImplementation(() => 14)
    const openingHours: OpeningHours[] = [
      {
        day_of_week: 2,
        opens_at: 14,
        closes_at: 23
      }
    ]
    //Act
    const result = checkIsOpen(openingHours)
    //Assert
    expect(result).toBe(false)
  })
  test('should return false if the bar is open today but has not yet opened', () => {
    //Assign
    mockedGetTodaysWeekday.mockImplementation(() => 2)
    mockedGetCurrentHour.mockImplementation(() => 12)
    const openingHours: OpeningHours[] = [
      {
        day_of_week: 2,
        opens_at: 14,
        closes_at: 22
      }
    ]
    //Act
    const result = checkIsOpen(openingHours)
    //Assert
    expect(result).toBe(false)
  })
  test('should return false if the bar was open today but has already closed', () => {
    //Assign
    mockedGetTodaysWeekday.mockImplementation(() => 2)
    mockedGetCurrentHour.mockImplementation(() => 23)
    const openingHours: OpeningHours[] = [
      {
        day_of_week: 2,
        opens_at: 14,
        closes_at: 22
      }
    ]
    //Act
    const result = checkIsOpen(openingHours)
    //Assert
    expect(result).toBe(false)
  })
  test('should return true if the bar is open past midnight until 3 and it is now 1', () => {
    //Assign
    mockedGetTodaysWeekday.mockImplementation(() => 2)
    mockedGetCurrentHour.mockImplementation(() => 1)
    const openingHours: OpeningHours[] = [
      {
        day_of_week: 1,
        opens_at: 14,
        closes_at: 3
      }
    ]
    //Act
    const result = checkIsOpen(openingHours)
    //Assert
    expect(result).toBe(true)
  })
  test('should return false if the bar is open past midnight until 1 and it is now 3', () => {
    //Assign
    mockedGetTodaysWeekday.mockImplementation(() => 2)
    mockedGetCurrentHour.mockImplementation(() => 3)
    const openingHours: OpeningHours[] = [
      {
        day_of_week: 1,
        opens_at: 14,
        closes_at: 1
      }
    ]
    //Act
    const result = checkIsOpen(openingHours)
    //Assert
    expect(result).toBe(false)
  })
  test('should return true if the bar is open past midnight until 3 and it is now 22', () => {
    //Assign
    mockedGetTodaysWeekday.mockImplementation(() => 2)
    mockedGetCurrentHour.mockImplementation(() => 22)
    const openingHours: OpeningHours[] = [
      {
        day_of_week: 2,
        opens_at: 14,
        closes_at: 3
      }
    ]
    //Act
    const result = checkIsOpen(openingHours)
    //Assert
    expect(result).toBe(true)
  })
})

describe('Testing checkIsHappyHour', () => {
  beforeEach(() => {
    mockedGetTodaysWeekday = jest.spyOn(timeTools, 'getTodaysWeekday')
    mockedGetCurrentHour = jest.spyOn(timeTools, 'getCurrentHour')
  })

  afterEach(() => {
    mockedGetTodaysWeekday.mockReset()
    mockedGetCurrentHour.mockReset()
  })

  test('should return false if no happy hours in array', () => {
    //Assign
    mockedGetTodaysWeekday.mockImplementation(() => 2)
    mockedGetCurrentHour.mockImplementation(() => 14)
    const happyHours: HappyHours[] = []
    //Act
    const result = checkIsHappyHour(happyHours)
    //Assert
    expect(result).toBe(false)
  })

  test('should return false if no happy hours today', () => {
    //Assign
    mockedGetTodaysWeekday.mockImplementation(() => 2)
    mockedGetCurrentHour.mockImplementation(() => 14)
    const happyHours: HappyHours[] = [
      {
        day_of_week: 1,
        starts_at: 14,
        ends_at: 19,
        price: 39
      }
    ]
    //Act
    const result = checkIsHappyHour(happyHours)
    //Assert
    expect(result).toBe(false)
  })

  test('should return false if happy hours today has not started yet', () => {
    //Assign
    mockedGetTodaysWeekday.mockImplementation(() => 2)
    mockedGetCurrentHour.mockImplementation(() => 14)
    const happyHours: HappyHours[] = [
      {
        day_of_week: 2,
        starts_at: 15,
        ends_at: 19,
        price: 39
      }
    ]
    //Act
    const result = checkIsHappyHour(happyHours)
    //Assert
    expect(result).toBe(false)
  })

  test('should return false if happy hours today has already ended', () => {
    //Assign
    mockedGetTodaysWeekday.mockImplementation(() => 2)
    mockedGetCurrentHour.mockImplementation(() => 19)
    const happyHours: HappyHours[] = [
      {
        day_of_week: 2,
        starts_at: 15,
        ends_at: 19,
        price: 39
      }
    ]
    //Act
    const result = checkIsHappyHour(happyHours)
    //Assert
    expect(result).toBe(false)
  })

  test('should return true if happy hours are currently in effect', () => {
    //Assign
    mockedGetTodaysWeekday.mockImplementation(() => 2)
    mockedGetCurrentHour.mockImplementation(() => 18)
    const happyHours: HappyHours[] = [
      {
        day_of_week: 2,
        starts_at: 15,
        ends_at: 19,
        price: 39
      }
    ]
    //Act
    const result = checkIsHappyHour(happyHours)
    //Assert
    expect(result).toBe(true)
  })
})

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
