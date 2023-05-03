import { BrowserRouter } from 'react-router-dom';
import '@styles/globals.scss';

interface Props {
  children: React.ReactNode;
}

const AppProviders = ({ children }: Props) => (
  <BrowserRouter>{children}</BrowserRouter>
);

export default AppProviders;
