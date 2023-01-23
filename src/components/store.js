
import { create } from "zustand";

export const useUserStore = create((set) => ({
  isAdminLoggedIn: false,
  setIsAdminLoggedIn: (userChecker) =>
    set(() => ({ isAdminLoggedIn: userChecker })),
}));
