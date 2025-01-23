import Navbar from './components/Navbar';
import Form from './components/Form';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="dark:bg-dark min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default App;
