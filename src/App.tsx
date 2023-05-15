import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./shared/redux/slices";
import { ToastContainer } from 'react-toastify';

const store = configureStore({reducer: rootReducer});
export type AppDispatch = typeof store.dispatch

function App() {
  return (
    <div className="App">
      <ToastContainer style={{zIndex: 9999999}} />
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
