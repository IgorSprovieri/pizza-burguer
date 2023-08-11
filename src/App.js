import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemScreen, MainScreen } from "./screens";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen></MainScreen>} />
          <Route path="/item/:id" element={<ItemScreen></ItemScreen>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
