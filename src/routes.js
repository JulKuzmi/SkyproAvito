import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/mainPage/mainPage';
import { AuthPage } from './pages/authPage/AuthPage';
import Profile from './pages/profile/profile';
import { ProtectedRoute } from './components/protected-route/protectedRoute';
import { NotFound } from './pages/notFound/notFound';
import SellerProfile from './pages/seller-profile/sellerProfile';
import { AdvPage } from './pages/advPage/advPage';
// import { useAuthContext } from './components/context/AuthContext';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/adv-page/:id" element={<AdvPage />} />
            <Route path="/seller-account/:id" element={<SellerProfile />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/account" element={<Profile />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
