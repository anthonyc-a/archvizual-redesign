import React from "react"

export const FilterStateContext = React.createContext()
export const FilterDispatchContext = React.createContext()

const initialState = {
  filter: "public",
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_PUBLIC": {
      return {
        ...state,
        filter: state.filter !== "public" && "public",
      }
    }

    default:
  }

  switch (action.type) {
    case "SET_RESI": {
      return {
        ...state,
        filter: state.filter !== "residential" && "residential",
      }
    }

    default:
  }

  switch (action.type) {
    case "SET_CONCEPT": {
      return {
        ...state,
        filter: state.filter !== "concept" && "concept",
      }
    }

    default:
  }
}

const ToggleFilterProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <FilterStateContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
  )
}

export default ToggleFilterProvider
