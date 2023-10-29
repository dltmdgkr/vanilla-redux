import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

const App = () => {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" exact Component={Home}></Route>
				<Route path="/:id" Component={Detail}></Route>
			</Routes>
    </BrowserRouter>
  );
};

export default App;
