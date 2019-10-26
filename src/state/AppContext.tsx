import React, { useReducer, useContext, createContext, Dispatch } from 'react'

type State = {
  players: [
    {
      name: string
      id: number
      role: 'resistance' | 'spy'
    }
  ]
  maxPlayers: number
  rounds: [
    {
      result: 'pass' | 'fail' | 'unknown'
      voters: number[]
      leader: number
      active: boolean
      spiesNeeded: number
      votersNeeded: number
      failedVotes: number
    }
  ]
}
type Action =
  | {
      type: 'resetData'
    }
  | {
      type: 'changeStatus'
      payload: {
        command: 'start' | 'pause' | 'resume' | 'stop'
      }
    }

export const initialState: State = {
  players: [
    {
      name: 'Test',
      id: 1,
      role: 'resistance',
    },
  ],
  maxPlayers: 5,
  rounds: [
    {
      result: 'unknown',
      voters: [],
      leader: 0,
      active: false,
      spiesNeeded: 0,
      votersNeeded: 0,
      failedVotes: 0,
    },
  ],
}

const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'resetData':
      return {
        ...state,
        ...initialState,
      }
    // case 'increaseCurrentSet':
    //   return {
    //     ...state,
    //     timeSession: state.setsTime[state.currentSet], //NOTE it's +1 in array
    //     timeSessionLeft: state.setsTime[state.currentSet],
    //     currentSet: state.currentSet + 1,
    //   }
    default:
      throw new Error('Undefined action ' + action)
  }
}

const StateCtx = createContext(initialState)
const DispatchCtx = createContext((() => 0) as Dispatch<Action>)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  return (
    <DispatchCtx.Provider value={dispatch}>
      <StateCtx.Provider value={state}>{children}</StateCtx.Provider>
    </DispatchCtx.Provider>
  )
}
export const useDispatch = () => useContext(DispatchCtx)
export const useGlobalState = () => {
  return useContext(StateCtx)
}
