import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import Home from './component/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Productlist from './component/Productlist';
import Displaycoin from './component/Displaycoin';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Moreinfo from './component/Moreinfo';
import Nav from "./component/Nav";

function App() {
  const theme = createTheme({
    spacing: 8, // You can define your own spacing scale here
  });
  const queryclient = new QueryClient()
  return (
    <QueryClientProvider client={queryclient}> 
    <ThemeProvider theme={theme}>
    <div className="App" style={{ backgroundColor: 'dark' }}>
      <Nav />
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/coins' element={<Displaycoin />} />
    <Route path='/addyourkey/:id' element={<Moreinfo />} />
    
    </Routes> 
    </div>
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
