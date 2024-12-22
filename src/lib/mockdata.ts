import { Bar } from '@/models/Bar'
import { defaultCurrentQuery, GlobalState } from '@/models/GlobalState'
import { defaultCurrentLocation } from '@/reducers/GlobalStateReducer'

export const singleBarMockData: Bar = {
  id: '1ec2221b-b252-4127-89d9-ecf7889ec554',
  name: 'Amici Nostri',
  address: 'Ringvägen 104',
  city: 'Stockholm',
  postal_code: 11661,
  beer_volume: 40,
  beer_price: 59,
  beer_ppv: 1.475,
  long: 18.0771446228027,
  lat: 59.3076553344727,
  dist_meters: 1359,
  is_open: true,
  is_happy_hour: true,
  opening_hours: [
    {
      id: '43069954-f646-4162-be4c-d61120a1a921',
      opens_at: '14:00',
      closes_at: '01:00',
      day_of_week: 1
    },
    {
      id: '0250d4b7-44fc-49c6-9d61-eb4d100c0e4d',
      opens_at: '14:00',
      closes_at: '01:00',
      day_of_week: 2
    },
    {
      id: 'f9bc237f-2a06-4b6a-a44a-a2443b541dce',
      opens_at: '14:00',
      closes_at: '03:00',
      day_of_week: 3
    },
    {
      id: '4ee68286-0829-450a-98eb-aaf181b70993',
      opens_at: '14:00',
      closes_at: '01:00',
      day_of_week: 4
    },
    {
      id: 'd84e31ad-2f27-4056-989a-c1b013454d6c',
      opens_at: '14:00',
      closes_at: '03:00',
      day_of_week: 5
    },
    {
      id: '4cc008ca-3791-4c27-9452-d389161fe272',
      opens_at: '14:00',
      closes_at: '03:00',
      day_of_week: 6
    },
    {
      id: '975db969-5bf0-4dcf-859f-95f52fd8a21a',
      opens_at: '14:00',
      closes_at: '01:00',
      day_of_week: 7
    }
  ],
  happy_hours: [
    {
      id: 'd2cb3f58-5f36-4ef4-bdb0-afb1082ace10',
      ppv: 0.975,
      price: 39,
      volume: 40,
      ends_at: '17:00',
      starts_at: '14:00',
      day_of_week: 1
    },
    {
      id: '8edbe7f5-b08b-4dbc-8784-e65b1351634f',
      ppv: 0.975,
      price: 39,
      volume: 40,
      ends_at: '17:00',
      starts_at: '14:00',
      day_of_week: 2
    },
    {
      id: 'f88dab61-c169-450d-95f7-667872dabf19',
      ppv: 0.975,
      price: 39,
      volume: 40,
      ends_at: '17:00',
      starts_at: '14:00',
      day_of_week: 3
    },
    {
      id: 'e2a7f2ba-e8e2-4de0-bec6-c14176ef7d8e',
      ppv: 0.975,
      price: 39,
      volume: 40,
      ends_at: '17:00',
      starts_at: '14:00',
      day_of_week: 4
    },
    {
      id: '4467b85c-4e90-40dc-a05b-c3dcf039882c',
      ppv: 0.975,
      price: 39,
      volume: 40,
      ends_at: '17:00',
      starts_at: '14:00',
      day_of_week: 5
    },
    {
      id: '27893708-5741-4a24-a896-82d2a0970b8f',
      ppv: 0.975,
      price: 39,
      volume: 40,
      ends_at: '17:00',
      starts_at: '14:00',
      day_of_week: 6
    },
    {
      id: '79855ee3-f318-4f8e-a1e2-2f2763d30071',
      ppv: 0.975,
      price: 39,
      volume: 40,
      ends_at: '17:00',
      starts_at: '14:00',
      day_of_week: 7
    }
  ]
}

const mockBars: Bar[] = [singleBarMockData]

export const initialMockData: GlobalState = {
  currentLocation: defaultCurrentLocation,
  bars: mockBars,
  barsFromApi: mockBars,
  currentQuery: defaultCurrentQuery
}
