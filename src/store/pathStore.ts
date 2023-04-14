import { create } from 'zustand'

interface AsPathStoreType {
  previousPath?: string
  setPreviousPath: (path: string) => void
}

const pathStore = create<AsPathStoreType>((set) => ({
  previousPath: undefined,
  setPreviousPath: (path: string) => set({ previousPath: path })
}))

export const usePathStore = () => pathStore((state) => state)
