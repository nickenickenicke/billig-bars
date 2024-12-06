import { Bar } from '@/models/Bar'
import { GlobalState } from '@/models/GlobalState'
import { defaultLocationState } from '@/reducers/GlobalStateReducer'

const mockBars: Bar[] = [
  {
    name: 'Kloster',
    address: 'Hornsgartan 84',
    postal_code: 11821,
    city: 'Stockholm',
    beer_volume: 50,
    beer_price: 39,
    id: '40450db9-c133-464b-a87d-086e652c3150',
    long: 18.0544147491455,
    lat: 59.3180274963379,
    opening_hours: [
      {
        id: '7315d020-30f8-48d1-af09-f9150a7f0be3',
        opens_at: 13,
        closes_at: 1,
        day_of_week: 1
      },
      {
        id: 'e22009e1-e724-4b09-9a18-4e772ba27582',
        opens_at: 13,
        closes_at: 1,
        day_of_week: 2
      },
      {
        id: 'f3f584b8-0e66-463a-9d29-f89b45b7810b',
        opens_at: 13,
        closes_at: 3,
        day_of_week: 3
      },
      {
        id: '8ab384eb-5376-4199-b7f5-87aae18197b0',
        opens_at: 13,
        closes_at: 3,
        day_of_week: 4
      },
      {
        id: '500d5b84-aab7-4698-9cd1-2d21ec68b133',
        opens_at: 13,
        closes_at: 3,
        day_of_week: 5
      },
      {
        id: 'd1302a1c-56aa-4639-9030-2c527e58ca9d',
        opens_at: 11,
        closes_at: 3,
        day_of_week: 6
      },
      {
        id: 'c6fc6d8f-4347-4b6b-ad88-c22619f43f42',
        opens_at: 11,
        closes_at: 1,
        day_of_week: 7
      }
    ],
    happy_hours: []
  },
  {
    name: 'Kvarnen',
    address: 'Tjärhovsgatan 4',
    postal_code: 11621,
    city: 'Stockholm',
    beer_volume: 40,
    beer_price: 39,
    id: 'f4ac2de5-fb6e-48ab-8482-8c21e8aac9de',
    long: 18.0741882324219,
    lat: 59.314884185791,
    opening_hours: [
      {
        id: '2a9c3b81-9467-4023-af0b-34190f1d9f26',
        opens_at: 11,
        closes_at: 24,
        day_of_week: 1
      },
      {
        id: '4987601f-0ce6-4431-8566-ae8bf75d75e7',
        opens_at: 11,
        closes_at: 24,
        day_of_week: 2
      },
      {
        id: '93e690b1-8f3a-496d-a077-83eecbfcb6ea',
        opens_at: 11,
        closes_at: 3,
        day_of_week: 3
      },
      {
        id: '6bce49d9-5761-4a47-83b1-129a6b491ba7',
        opens_at: 11,
        closes_at: 3,
        day_of_week: 4
      },
      {
        id: '31c39118-faf1-4777-bb6e-71e6dd3790e9',
        opens_at: 11,
        closes_at: 3,
        day_of_week: 5
      },
      {
        id: '37eeb346-113b-426e-928f-e32c8ecb6b6d',
        opens_at: 1130,
        closes_at: 3,
        day_of_week: 6
      },
      {
        id: '24eb8f1b-7da7-4fd2-b03e-74abbade4bd8',
        opens_at: 1130,
        closes_at: 23,
        day_of_week: 7
      }
    ],
    happy_hours: []
  },
  {
    name: 'Polhem',
    address: 'Ringvägen 153',
    postal_code: 116,
    city: 'Stockholm',
    beer_volume: 50,
    beer_price: 65,
    id: '41894164-a393-49b5-ad89-71dcac829f12',
    long: 18.0839330780532,
    lat: 59.3095255369006,
    opening_hours: [
      {
        id: 'e326a359-6e01-4096-8197-f2a64e20aafd',
        opens_at: 15,
        closes_at: 0,
        day_of_week: 1
      },
      {
        id: 'e3de92a4-7c44-4923-827c-77ba32a9a644',
        opens_at: 15,
        closes_at: 0,
        day_of_week: 2
      },
      {
        id: 'c7fc29b1-d650-48a2-a798-f5bbd9784d0e',
        opens_at: 15,
        closes_at: 0,
        day_of_week: 3
      },
      {
        id: '30741287-66e8-4561-9246-593b134f1018',
        opens_at: 15,
        closes_at: 0,
        day_of_week: 4
      },
      {
        id: '4358f9f5-8186-4703-b1fc-1a4b0c241589',
        opens_at: 15,
        closes_at: 1,
        day_of_week: 5
      },
      {
        id: '6f5acb32-cf4b-42f9-8c84-3314e919fbff',
        opens_at: 12,
        closes_at: 1,
        day_of_week: 6
      },
      {
        id: 'f51a453d-1433-4a9c-a808-99736be05b03',
        opens_at: 12,
        closes_at: 0,
        day_of_week: 7
      }
    ],
    happy_hours: []
  },
  {
    name: 'Amici Nostri',
    address: 'Ringvägen 104',
    postal_code: 11661,
    city: 'Stockholm',
    beer_volume: 40,
    beer_price: 59,
    id: '1ec2221b-b252-4127-89d9-ecf7889ec554',
    long: 18.0771446228027,
    lat: 59.3076553344727,
    opening_hours: [
      {
        id: '43069954-f646-4162-be4c-d61120a1a921',
        opens_at: 14,
        closes_at: 1,
        day_of_week: 1
      },
      {
        id: '0250d4b7-44fc-49c6-9d61-eb4d100c0e4d',
        opens_at: 14,
        closes_at: 1,
        day_of_week: 2
      },
      {
        id: 'f9bc237f-2a06-4b6a-a44a-a2443b541dce',
        opens_at: 14,
        closes_at: 3,
        day_of_week: 3
      },
      {
        id: '4ee68286-0829-450a-98eb-aaf181b70993',
        opens_at: 14,
        closes_at: 1,
        day_of_week: 4
      },
      {
        id: 'd84e31ad-2f27-4056-989a-c1b013454d6c',
        opens_at: 14,
        closes_at: 3,
        day_of_week: 5
      },
      {
        id: '4cc008ca-3791-4c27-9452-d389161fe272',
        opens_at: 14,
        closes_at: 3,
        day_of_week: 6
      },
      {
        id: '975db969-5bf0-4dcf-859f-95f52fd8a21a',
        opens_at: 14,
        closes_at: 1,
        day_of_week: 7
      }
    ],
    happy_hours: [
      {
        id: 'd2cb3f58-5f36-4ef4-bdb0-afb1082ace10',
        price: 39,
        volume: 40,
        ends_at: 17,
        starts_at: 14,
        day_of_week: 1
      },
      {
        id: '8edbe7f5-b08b-4dbc-8784-e65b1351634f',
        price: 39,
        volume: 40,
        ends_at: 17,
        starts_at: 14,
        day_of_week: 2
      },
      {
        id: 'f88dab61-c169-450d-95f7-667872dabf19',
        price: 39,
        volume: 40,
        ends_at: 17,
        starts_at: 14,
        day_of_week: 3
      },
      {
        id: 'e2a7f2ba-e8e2-4de0-bec6-c14176ef7d8e',
        price: 39,
        volume: 40,
        ends_at: 17,
        starts_at: 14,
        day_of_week: 4
      },
      {
        id: '4467b85c-4e90-40dc-a05b-c3dcf039882c',
        price: 39,
        volume: 40,
        ends_at: 17,
        starts_at: 14,
        day_of_week: 5
      },
      {
        id: '27893708-5741-4a24-a896-82d2a0970b8f',
        price: 39,
        volume: 40,
        ends_at: 17,
        starts_at: 14,
        day_of_week: 6
      },
      {
        id: '79855ee3-f318-4f8e-a1e2-2f2763d30071',
        price: 39,
        volume: 40,
        ends_at: 17,
        starts_at: 14,
        day_of_week: 7
      }
    ]
  }
]

export const singleBarMockData: Bar = {
  id: '1ec2221b-b252-4127-89d9-ecf7889ec554',
  lat: 59.3076553344727,
  city: 'Stockholm',
  long: 18.0771446228027,
  name: 'Amici Nostri',
  address: 'Ringvägen 104',
  beer_price: 59,
  beer_volume: 40,
  dist_meters: 1919.85051734,
  happy_hours: [
    {
      id: 'd2cb3f58-5f36-4ef4-bdb0-afb1082ace10',
      price: 39,
      volume: 40,
      ends_at: 17,
      starts_at: 14,
      day_of_week: 1
    },
    {
      id: '8edbe7f5-b08b-4dbc-8784-e65b1351634f',
      price: 39,
      volume: 40,
      ends_at: 17,
      starts_at: 14,
      day_of_week: 2
    },
    {
      id: 'f88dab61-c169-450d-95f7-667872dabf19',
      price: 39,
      volume: 40,
      ends_at: 17,
      starts_at: 14,
      day_of_week: 3
    },
    {
      id: 'e2a7f2ba-e8e2-4de0-bec6-c14176ef7d8e',
      price: 39,
      volume: 40,
      ends_at: 17,
      starts_at: 14,
      day_of_week: 4
    },
    {
      id: '4467b85c-4e90-40dc-a05b-c3dcf039882c',
      price: 39,
      volume: 40,
      ends_at: 17,
      starts_at: 14,
      day_of_week: 5
    },
    {
      id: '27893708-5741-4a24-a896-82d2a0970b8f',
      price: 39,
      volume: 40,
      ends_at: 17,
      starts_at: 14,
      day_of_week: 6
    },
    {
      id: '79855ee3-f318-4f8e-a1e2-2f2763d30071',
      price: 39,
      volume: 40,
      ends_at: 17,
      starts_at: 14,
      day_of_week: 7
    }
  ],
  postal_code: 11661,
  opening_hours: [
    {
      id: '43069954-f646-4162-be4c-d61120a1a921',
      opens_at: 14,
      closes_at: 1,
      day_of_week: 1
    },
    {
      id: '0250d4b7-44fc-49c6-9d61-eb4d100c0e4d',
      opens_at: 14,
      closes_at: 1,
      day_of_week: 2
    },
    {
      id: 'f9bc237f-2a06-4b6a-a44a-a2443b541dce',
      opens_at: 14,
      closes_at: 3,
      day_of_week: 3
    },
    {
      id: '4ee68286-0829-450a-98eb-aaf181b70993',
      opens_at: 14,
      closes_at: 1,
      day_of_week: 4
    },
    {
      id: 'd84e31ad-2f27-4056-989a-c1b013454d6c',
      opens_at: 14,
      closes_at: 3,
      day_of_week: 5
    },
    {
      id: '4cc008ca-3791-4c27-9452-d389161fe272',
      opens_at: 14,
      closes_at: 3,
      day_of_week: 6
    },
    {
      id: '975db969-5bf0-4dcf-859f-95f52fd8a21a',
      opens_at: 14,
      closes_at: 1,
      day_of_week: 7
    }
  ]
}

export const initialMockData: GlobalState = {
  currentLocation: defaultLocationState,
  bars: mockBars,
  barsFromApi: mockBars,
  currentQuery: { hour: null }
}
