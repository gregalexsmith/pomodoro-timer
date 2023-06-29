import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SettingsState = {
  sound: boolean;
  soundOn: () => void;
  soundOff: () => void;
  setSound: (sound: boolean) => void;
};

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      sound: false,
      soundOn: () => set({ sound: true }),
      soundOff: () => set({ sound: false }),
      setSound: (sound: boolean) => set({ sound })
    }),
    { name: 'settings' }
  )
);
