import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import HeroSection from "./HeroSection/HeroSection";
import Navigation from "./Navigation/Navigation";
const App = () => {
  return (
    <div>
      <Navigation />
      <main className="main-container">
      <HeroSection />
      <ContactForm />
      </main>
    </div>
  );
};

export default App;
