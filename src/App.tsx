import Header from "./components/Header/Header";
import Cases from "./sections/Cases/Cases";
import Footer from "./components/Footer/Footer";
import ThemeButton from "./components/ThemeButton/ThemeButton";

function App() {
  return (
    <>
      <Header />

      <main>
        <Cases />
      </main>

      <Footer />

      <ThemeButton />
    </>
  );
}

export default App;
