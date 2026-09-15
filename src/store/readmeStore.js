import { create } from 'zustand'

export const useReadmeStore = create((set) => ({
  readmeData: {},
  activeTheme: 'minimal',
  editorState: {
    sections: [],
    selectedRepo: null,
    selectedSkills: [],
  },
  setReadmeData: (readmeData) => set({ readmeData }),
  setActiveTheme: (activeTheme) => set({ activeTheme }),
  setEditorState: (editorState) => set({ editorState }),
}))
