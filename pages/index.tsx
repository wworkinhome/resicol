import Footer from '../components/Footer';
import Head from '../components/Head';
import Banner from '../components/banner';
import Contacts from '../components/contacts';
import Header from '../components/header';
import Info from '../components/info';
import Testimonials from '../components/testimonials';


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
