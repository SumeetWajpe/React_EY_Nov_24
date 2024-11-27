import { useSelector } from "react-redux";

export function useAuthenticated() {
  return useSelector(store => store.auth.isUserAuthenticated);
}
