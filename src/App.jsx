
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TravelPage from "./pages/TravelPage";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/travelpage/:nomeViaggio" element={<TravelPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
