import { OpeningHours } from '@/models/Bar'
import { checkIsOpen } from '../timeTools'

describe('Testing checkIsOpen', () => {
  test('should return true if the bar is open', () => {
    //Assign
    const openingHours: OpeningHours[] = [
      {
        day_of_week: 3,
        opens_at: 8,
        closes_at: 22
      }
    ]
    //Act
    const result = checkIsOpen(openingHours)
    //Assert
    expect(result).toBe(true)
  })
})
