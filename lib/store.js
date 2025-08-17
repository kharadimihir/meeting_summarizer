import { create } from "zustand"

export const useSummaryStore = create((set) => ({
    summary: "",
    setSummary: (text) =>
      set({ summary: typeof text === "string" ? text : String(text || "") }),
  }));