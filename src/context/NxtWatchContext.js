import React from 'react'

const NxtWatchContext = React.createContext({
  isThemeLight: false,
  toggleTheme: () => {},
})

export default NxtWatchContext
