import Footer from '../components/Footer';
import Head from '../components/Head';
import Banner from './banner';
import Contacts from './contacts';
import Header from './header';
import Info from './info';
import Testimonials from './testimonials';


export default function Home() {
  return (
    <>
      <Head />
      <Header />
      <Banner />
      <Info />
      <Testimonials />
      <Contacts />
      <Footer />

    </>
  );
}
