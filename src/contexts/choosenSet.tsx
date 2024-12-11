'use client'

import { createContext, useContext, ReactNode, useState } from 'react'

interface ChoosenSetI {
  value: string | undefined
  setValue: (newValue: string) => void
}

const ChoosenSet = createContext<ChoosenSetI | undefined>(undefined)

export const ChoosenSetProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string | undefined>(undefined)

  return (
    <ChoosenSet.Provider value={{ value, setValue }}>
      {children}
    </ChoosenSet.Provider>
  )
}

export function useChoosenSet() {
  const context = useContext(ChoosenSet)
  if (!context) {
    throw new Error('useChoosenSet must be used within a ChoosenSetProvider')
  }
  return context
}
