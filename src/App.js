import "./App.css";
import FeaturedJobs from "./components/FeaturedJobs/featuredJobs";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import HeroSection from "./components/HeroSection/heroSection";
import HowItWorks from "./components/HowItWorks/howItWorks";
import SearchFilters from "./components/SearchFilters/searchFilters";
import Team from "./components/Team/team";
import WhyChooseUs from "./components/WhyChooseUs/whyChooseUs";

function App() {

  const featuredJobsData = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'TechCo',
      location: 'San Francisco, CA',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateTech',
      location: 'New York, NY',
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'DataTech Solutions',
      location: 'Bangalore, India',
    },
    {
      id: 4,
      title: 'Frontend Developer',
      company: 'WebTech Solutions',
      location: 'Mumbai, India',
    },
    {
      id: 5,
      title: 'UX Designer',
      company: 'DesignHub',
      location: 'London, UK',
    },
    {
      id: 6,
      title: 'Product Analyst',
      company: 'DataCo',
      location: 'Delhi, India',
    },
  ];  

  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks/>
        <SearchFilters/>
        <FeaturedJobs jobs={featuredJobsData}/>
        <WhyChooseUs/>
        <Team/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
