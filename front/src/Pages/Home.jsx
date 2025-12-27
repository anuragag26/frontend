import Hero from "../Components/home/Hero"
import AboutPreview from "../Components/home/AboutPreview"
import ExperienceSection from "../Components/home/ExperienceSection"
import AccommodationPreview from "../Components/home/AccommodationPreview"
import GalleryPreview from "../Components/home/GalleryPreview"
import BlogPreview from "../Components/home/BlogPreview"
import WhyChooseUs from "../Components/home/WhyChooseUs"
import Testimonials from "../Components/home/Testimonials"
import PlayfulTodoList from "../Components/home/PlayfulTodoList"
import VisualStory from "../Components/home/VisualStory"



const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ExperienceSection />
      <AccommodationPreview />
      <WhyChooseUs />
      <PlayfulTodoList />
      <VisualStory />
      <Testimonials />
      <GalleryPreview />
      <BlogPreview />
    </>
  )
}

export default Home
