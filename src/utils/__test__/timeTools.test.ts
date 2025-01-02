import {
  getWeekdayName,
  normalizeTimeFromDB,
  getCurrentWeekday,
  adjustQueryTimestamp
} from '../timeTools'

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

describe('Testing getTodaysWeekday', () => {
  afterEach(() => {
    jest.useRealTimers()
  })
  test('should return 1', () => {
    //Assign
    const mockedDate = new Date(2024, 11, 16) //Monday
    jest.useFakeTimers({
      now: mockedDate
    })
    //Act
    const result = getCurrentWeekday()
    //Assert
    expect(result).toBe(1)
  })
  test('should return 7', () => {
    //Assign
    const mockedDate = new Date(2024, 11, 15) //Sunday
    jest.useFakeTimers({
      now: mockedDate
    })
    jest.setSystemTime(mockedDate)
    //Act
    const result = getCurrentWeekday()
    //Assert
    expect(result).toBe(7)
  })
  test('should return 3', () => {
    //Assign
    const mockedDate = new Date(2024, 11, 18) //Wednesday
    jest.useFakeTimers({
      now: mockedDate
    })
    jest.setSystemTime(mockedDate)
    //Act
    const result = getCurrentWeekday()
    //Assert
    expect(result).toBe(3)
  })
})

describe('Testing normalizeTimeFromDB', () => {
  test('should return 00', () => {
    //Assign
    const time = '00:00'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('00')
  })
  test('should return 01', () => {
    //Assign
    const time = '01:00'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('01')
  })
  test('should return 10', () => {
    //Assign
    const time = '10:00'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('10')
  })
  test('should return 24', () => {
    //Assign
    const time = '24:00'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('24')
  })
  test('should return 01:05', () => {
    //Assign
    const time = '01:05'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('01:05')
  })
  test('should return 22:30', () => {
    //Assign
    const time = '22:30'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('22:30')
  })
  test('should return 22 if minutes is negative', () => {
    //Assign
    const time = '22:-30'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('22')
  })
  test('should return 22 if minutes is 60', () => {
    //Assign
    const time = '22:60'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('22')
  })
  test('should return 22 if minutes is over 60', () => {
    //Assign
    const time = '22:61'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('22')
  })
  test('should return blank string if hour is under 0', () => {
    //Assign
    const time = '-1:00'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('')
  })
  test('should return blank string if hour is over 24', () => {
    //Assign
    const time = '25:00'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('')
  })
  test('should return blank string if min is not a number', () => {
    //Assign
    const time = '25:a'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('')
  })
  test('should return blank string if hour is not a number', () => {
    //Assign
    const time = 'a:30'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('')
  })
  test('should return blank string if string is not time like', () => {
    //Assign
    const time = 'string'
    //Act
    const result = normalizeTimeFromDB(time)
    //Assert
    expect(result).toBe('')
  })
})

describe('Testing adjustQueryTimestamp', () => {
  test('should return 13:00 when minute is 00', () => {
    //Assign
    const timestamp = '2027-02-01T13:00:00.000Z'
    //Act
    const result = adjustQueryTimestamp(timestamp)
    //Assert
    expect(result).toBe('2027-02-01T13:00:00.000Z')
  })
  test('should return 13:00 when minute is 29', () => {
    //Assign
    const timestamp = '2027-02-01T13:29:00.000Z'
    //Act
    const result = adjustQueryTimestamp(timestamp)
    //Assert
    expect(result).toBe('2027-02-01T13:00:00.000Z')
  })
  test('should return 13:30 when minute is 30', () => {
    //Assign
    const timestamp = '2027-02-01T13:30:00.000Z'
    //Act
    const result = adjustQueryTimestamp(timestamp)
    //Assert
    expect(result).toBe('2027-02-01T13:30:00.000Z')
  })
  test('should return 13:30 when minute is 59', () => {
    //Assign
    const timestamp = '2027-02-01T13:59:00.000Z'
    //Act
    const result = adjustQueryTimestamp(timestamp)
    //Assert
    expect(result).toBe('2027-02-01T13:30:00.000Z')
  })
  test('should return 13:00 when minute is not parseable', () => {
    //Assign
    const timestamp = '2027-02-01T13:sr:00.000Z'
    //Act
    const result = adjustQueryTimestamp(timestamp)
    //Assert
    expect(result).toBe('2027-02-01T13:00:00.000Z')
  })
})
