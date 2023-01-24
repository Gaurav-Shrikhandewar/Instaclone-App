import LandingPage from "./Components/Landing Page/landing_page";
import PostView from "./Components/Post View/post_view";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from "./Components/FirstPage";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />}>   </Route>
          <Route path="/LandingPage" element={<LandingPage />}>   </Route>
          <Route path="/PostView" element={<PostView />} >    </Route>
          <Route path="*" element={<div><h2>Error 404! Page not Found</h2></div>} >    </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
