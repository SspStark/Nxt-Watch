import React from 'react'

const NxtWatchContext = React.createContext({
  isThemeLight: true,
  toggleTheme: () => {},
  activePage: 'Home',
  changeActivePage: () => {},
})

export default NxtWatchContext
