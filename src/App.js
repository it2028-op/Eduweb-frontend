import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import './App.css';

import Homepage from './pages/Homepage'
import AnimalCards from './pages/AnimalCards'
import Category from './pages/Category'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Navline } from './components/Navbar';

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Header heading='InfoWeb' subheading='Informace pro informatiky' />
        <Navline />
        <main className='container'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/animal-cards" element={<AnimalCards />} />
            <Route path="/animal-cards/:id" element={<AnimalCards />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </main>
        <Footer />
      </ApolloProvider>
    </Router>
  );
}

export default App;
