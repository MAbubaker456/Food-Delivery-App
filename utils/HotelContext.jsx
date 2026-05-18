import { createContext, useContext } from "react";

export const HotelContext = createContext(null);

// Custom hook for easy access
export const useHotelContext = () => useContext(HotelContext);