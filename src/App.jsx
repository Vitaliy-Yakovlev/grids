import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Blog from './components/Main/Blog/Blog';
import Container from './components/Main/Container/Container';
import Posts from './components/Main/Posts/Posts';
import Section from './components/Main/Section/Section';
import Socials from './components/Main/Socials/Socials';

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Posts />
        <Section>
          <Blog />
          <Socials />
        </Section>
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
