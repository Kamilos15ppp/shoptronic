import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@shared/Layout';

const Home = lazy(() => import('@routes/Home'));
const Account = lazy(() => import('@routes/Account'));

function App() {
  return (
    <Suspense fallback={<p>LOADING!!!</p>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='account' element={<Account />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
