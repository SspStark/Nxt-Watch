import React from 'react'

const NxtWatchContext = React.createContext({
  isThemeLight: true,
  toggleTheme: () => {},
  savedVideos: [],
  toggleSave: () => {},
})

export default NxtWatchContext
