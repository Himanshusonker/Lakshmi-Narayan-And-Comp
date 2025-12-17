import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./css/style.css";
import "./css/SliderFooter.css"
import "./css/Border.css"
import "./css/AdminUser.css"
import "./css/AdminDashboardRotate.css"
import "./css/ProductImagesSlider.css"
import "./css/Tree.css"
import store from './productStore.jsx';
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <App />
        </Provider>
);
