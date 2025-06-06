
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TravelPage from "./assets/pages/TravelPage";
import HomePage from "./assets/pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/travelpage" element={<TravelPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
      

      
    </>
  )
}

export default App
