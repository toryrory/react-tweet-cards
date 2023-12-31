import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tweets from "./pages/Tweets";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='tweets' element={<Tweets />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
