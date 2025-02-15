import { create } from 'zustand';

const useDarkModeStore = create((set) => ({
  theme: localStorage.getItem('theme') || 'light',
  setTheme: (theme) => {
    set({ theme });
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  },
}));

export default useDarkModeStore;
