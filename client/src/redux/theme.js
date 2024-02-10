import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  theme: JSON.parse(window?.localStorage.getItem("theme")) ?? "light",
};

// Thunk action creator to set the theme
export const setThemeAsync = createAsyncThunk(
  "theme/setThemeAsync",
  async (value, thunkAPI) => {
    try {
      // Update theme in local storage
      localStorage.setItem("theme", JSON.stringify(value));
      // Return the new theme value
      return value;
    } catch (error) {
      // Handle errors, if any
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Reducer function to update the theme state
    setTheme(state, action) {
      state.theme = action.payload;
    },
    resetTheme(state) {
      // Reset theme to initial state
      state.theme = initialState.theme;
      // Remove theme from local storage
      localStorage.removeItem("theme");
    },
  },
  extraReducers: (builder) => {
    // Extra reducers for handling setThemeAsync action
    builder.addCase(setThemeAsync.fulfilled, (state, action) => {
      state.theme = action.payload;
    });
  },
});

export const { setTheme, resetTheme } = themeSlice.actions;

export default themeSlice.reducer;
