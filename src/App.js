import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { Layout } from './Pages/Layout';
import { LoginPage } from './Pages/LoginPage';
import { ProfilePage } from './Pages/ProfilePage';
import { RegistrationPage } from './Pages/RegistrationPage';
import { ForgotPasswordPage } from './Pages/ForgotPasswordPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='HomePage' element={<HomePage />} />

        <Route path='LoginPage' element={<LoginPage />} />
        <Route path='ProfilePage' element={<ProfilePage />} />
        <Route path='RegistrationPage' element={<RegistrationPage />} />
        <Route path='ForgotPasswordPage' element={<ForgotPasswordPage />} />
        <Route path='*' element={<Layout />} />
      </Route>
    </Routes>
  );
}

export default App;
