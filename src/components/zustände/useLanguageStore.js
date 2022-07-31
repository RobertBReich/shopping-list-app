import create from "zustand";

export const useLanguageStore = create((set) => {
  return {
    strLanguage: "de",
    setLanguage: (str) => {
      console.log("Lang: " + str);
      set((state) => {
        return { strLanguage: str };
      });
    },
  };
});

export default useLanguageStore;
