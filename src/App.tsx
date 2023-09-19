import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { UserContextProvider } from "./contexts/User";

export function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </BrowserRouter>
  );
}
