import { createContext, useContext } from "react";

export const CounterContext = createContext({
  count: null,
});
export const CounterProvider = CounterContext.Provider;
export default function useCount() {
  return useContext(CounterContext);
}
