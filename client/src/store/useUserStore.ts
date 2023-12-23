import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface UserStore {
  token: string
  setToken: (token: string) => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      token: '',
      setToken: (token: string) => set({ token }),
    }),
    {
      name: 'token',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)