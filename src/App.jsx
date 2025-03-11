import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Blog from './components/Main/Blog/Blog';
import Container from './components/Main/Container/Container';
import Posts from './components/Main/Posts/Posts';
import Section from './components/Main/Section/Section';
import Socials from './components/Main/Socials/Socials';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Posts />
        <Section>
          <Blog />
          <Socials />
        </Section>
      </Container>
      <Footer />
    </>
  );
}

export default App;
