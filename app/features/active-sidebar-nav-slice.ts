import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";

interface IActiveSidebarNav {
  activeSidebarNav: string;
  toggleSidebar: boolean;
}

const initialState: IActiveSidebarNav = {
  activeSidebarNav: "/",
  toggleSidebar: false,
};

export const activeSidebarNavSlice = createSlice({
  name: "activeSidebarNav",
  initialState,
  reducers: {
    saveActiveNav: (state, action) => {
      state.activeSidebarNav = action.payload;
    },
    toggleSidebar: (state) => {
      state.toggleSidebar = !state.toggleSidebar;
    },
    collapseSidebar: (state, action) => {
      state.toggleSidebar = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { saveActiveNav, toggleSidebar, collapseSidebar } =
  activeSidebarNavSlice.actions;

// This will help us get the current state of our main layout Visibility
export const activeSidebarNav = (state: RootState) => {
  state.activeSidebarNav;
};

export default activeSidebarNavSlice.reducer;
