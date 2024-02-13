import { AllRoutes } from "./routes/AllRoutes";
import { Footer, Header } from "./components";

export function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}
