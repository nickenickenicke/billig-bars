import { Bar } from '@/models/Bar'
import { createContext, Dispatch } from 'react'
import { BarAction, defaultBarState } from '@/reducers/BarReducer'

export interface IBarsContext {
  bars: Bar[]
  dispatch: Dispatch<BarAction>
}

export const BarsContext = createContext<IBarsContext>({
  bars: defaultBarState,
  dispatch: () => {
    return
  }
})
