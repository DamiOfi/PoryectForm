import Navbar from './components/Navbar';
import Form from './components/Form';
import Footer from './components/Footer';
import { GlobalStyles } from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>
        <Form />
      </main>
      <Footer />
    </>
  );
};

export default App;
