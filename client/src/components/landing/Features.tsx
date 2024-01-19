// named imports
import { CheckIcon } from '@heroicons/react/20/solid'

// default imports
import Image from 'next/image'

const features = [
  {
    title: 'Analytics Dashboard',
    desc: 'Efficiently analyse the system',
    points: [
      'Key Business Metrics Analysis.',
      'Real-time prices of Gold and Silver Commodities.',
      'Overview about Top customers and Recent Orders.'
    ],
    image: '/assets/dashboard-2.png'
  },
  {
    title: 'Customers Management',
    desc: 'Seamlessly Manage your Customers',
    points: [
      'Capture and export essential customer details.',
      'Customer and Compnay Details.',
      'Add a Customer to the system with ease.'
    ],
    image: '/assets/customer-1.png'
  },
  {
    title: 'Handling Purchase Orders',
    desc: 'Streamlining Purchase Orders',
    points: [
      'Listing of Purchase Orders sorted by date.',
      'Detailed information about the order and the products.',
      'Intuitive design with alerts for a seamless UI/UX.'
    ],
    image: '/assets/orders-2.png'
  },
  {
    title: 'Products Catalogue',
    desc: 'Effortless Product Catalogue Management.',
    points: [
      'Explore products in a neat masonry grid.',
      'Instantly view details like Product ID and Category.'
    ],
    image: '/assets/products-1.png'
  }
]

export default function Features() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 mt-16 border-t border-slate-600'>
        <div className='py-12 md:py-20'>

          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
            <h1 className='h2 mb-4'>One product, unlimited solutions</h1>
            <p className='text-xl text-gray-400'>Empowering Business Brilliance Through Seamless Management - Customers, Orders, Products, Sales, and Beyond.</p>
          </div>

          {/* features */}
          <div className='grid gap-20 pb-24 border-b border-slate-600'>

            {features.map((feature, index) => (
              <div key={index} className={`md:grid md:grid-cols-12 md:gap-6 items-center`}>
                {/* Image */}
                <div className={`${index % 2 === 0 ? 'order-1' : ''} max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0`} data-aos='fade-up'>
                  <Image className='max-w-full mx-auto md:max-w-none h-auto' src={feature.image} width={540} height={405} alt='Features 01' />
                </div>
                {/* Content */}
                <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6' data-aos='fade-right'>
                  <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                    <div className='text-xl text-amber-500 mb-2'>{feature.title}</div>
                    <h3 className='h3 mb-3'>{feature.desc}</h3>
                    <ul className='text-lg text-gray-400 -mb-2'>
                      {feature.points.map((point, index) => (
                        <li key={index} className='flex items-center mb-2'>
                          <CheckIcon className='h-5 w-5 mr-1 text-green-500' />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}