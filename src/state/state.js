export const state = {
  settings: {
    language: JSON.parse(localStorage.getItem("language")) || "english",
    darkTheme: true
  }
};
