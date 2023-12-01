import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AuthProvider } from './components/context/AuthContext';
import { SkeletonTheme } from 'react-loading-skeleton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <SkeletonTheme
            baseColor="#d6d2d2"
            highlightColor="#f7f2f2"
            height="400px"
        >
            <BrowserRouter>
                <Provider store={store}>
                    <AuthProvider>
                        <App />
                    </AuthProvider>
                </Provider>
            </BrowserRouter>
        </SkeletonTheme>
    </React.StrictMode>,
);
