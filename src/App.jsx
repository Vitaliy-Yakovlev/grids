import { Routes, Route } from 'react-router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Blog from './components/Main/Blog/Blog';
import Container from './components/Main/Container/Container';
import Posts from './components/Main/Posts/Posts';
import Section from './components/Main/Section/Section';
import Socials from './components/Main/Socials/Socials';
import Video from './components/Main/Video/Video';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/cats"
            element={
              <Container>
                <Posts />
                <Section>
                  <Blog />
                  <Socials />
                  <Video />
                </Section>
              </Container>
            }
          />

          <Route path="/newspaper" element={<Container></Container>} />

          <Route path="/newscasts" element={<Container></Container>} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
