import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { About } from '../components/About'
import { Gallery } from '../components/Gallery'
import { Menu } from '../components/Menu'
import { Testimonials } from '../components/Testimonials'
import { ReservationSection } from '../components/ReservationSection'
import { Footer } from '../components/Footer'

export const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <Menu />
        <Testimonials />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  )
}


