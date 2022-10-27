import { Route, Routes as Switch } from "react-router-dom";
import Indonesia from "../pages/Indonesia/index";
import Covid from "../pages/COVID-19/index";
import Programming from "../pages/Programming/index";
import Saved from "../pages/Saved";
import Searched from "../pages/Searched";
import About from "../pages/About/index";

const Routes = () => {
  return (
    <>
      <div className="container">
        <Switch>
          <Route exact path="/" element={<Indonesia />} />
          <Route exact path="/covid" element={<Covid />} />
          <Route exact path="/programming" element={<Programming />} />
          <Route path="/searched/:query" element={<Searched />} />
          <Route exact path="/saved" element={<Saved />} />
          <Route exact path="/about" element={<About />} />
        </Switch>
      </div>
    </>
  );
};

export default Routes;
