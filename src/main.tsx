import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/null_styles.scss";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./services/app.tsx";
import { Provider } from "react-redux";
import ScrollToTop from "./components/scroll-to-up/scroll-to-up.tsx";

const rootReducer = combineSlices(appSlice);

export const store = configureStore({
    reducer: {
        root: rootReducer,
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Provider store={store}>
            <ScrollToTop />
            <App />
        </Provider>
    </BrowserRouter>
);
