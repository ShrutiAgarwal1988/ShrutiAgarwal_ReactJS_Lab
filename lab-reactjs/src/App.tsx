import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ExpenseTracker from "./component/ExpenseTracker";
import ShowList from "./component/ShowList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/add"
            element={<ExpenseTracker onTrue={undefined} onClose={undefined} />}
          />
          <Route path="/" element={<ShowList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;