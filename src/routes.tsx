import styles from './Index.module.scss';
import Footer from 'Components/Footer/footer';
import Menu from 'Components/Menu/menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'Pages/Home/home';
import Contact from 'Pages/Contact/contact';
import Projects from 'Pages/Projects/project';
import ScrollToTop from 'Components/ScrollToTop/scroll';

export default function AppRouter() {
  return (
    <main className={styles.container}>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Menu />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}