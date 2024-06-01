import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <div className=" overflow-hidden text-neutral-300">
      <div className=" fixed top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container mx-auto px-8">
       <Routes>
        <Route path="/" element={<Home />} />
       </Routes>
      </div>
    </div>
  );
}

export default App;
