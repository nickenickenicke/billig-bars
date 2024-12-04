import { createContext, Dispatch } from 'react'
import { StateAction, defaultGlobalState } from '@/reducers/GlobalStateReducer'
import { GlobalState } from '@/models/GlobalState'

export interface IGlobalStateContext {
  globalState: GlobalState
  dispatch: Dispatch<StateAction>
}

export const GlobalStateContext = createContext<IGlobalStateContext>({
  globalState: defaultGlobalState,
  dispatch: () => {
    return
  }
})
