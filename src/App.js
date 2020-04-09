import React from 'react';
import './App.scss';


import { Link, Route } from "react-router-dom";
import MoviePages from "./pages/Movies";
import DetailPages from "./pages/Detail";
import AddPages from "./pages/Add";

function App() {
  return (
    <div className="App">
      <Link to="Movies">movies</Link> | 
      <Link to="Add">ADD</Link>

      <Route path="/Movies" exact component={MoviePages} />
      <Route path="/Add" exact component={AddPages} />
      <Route path="/Detail/:id" exact component={DetailPages} />
    </div>
  );
}

export default App;
