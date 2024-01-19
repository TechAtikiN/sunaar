// default imports
import Features from '@/components/landing/Features'
import Footer from '@/components/landing/Footer'
import Hero from '@/components/landing/Hero'

export default function page() {
  return (
    <div className='bg-slate-900 text-white'>
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}
