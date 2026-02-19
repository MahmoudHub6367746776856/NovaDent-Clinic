import React from 'react';
import Card from '../components/common/Card';

interface BeforeAfterItem {
  before: string;
  after: string;
  treatment: string;
  description: string;
}

interface GalleryItem {
  url: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const beforeAfter: BeforeAfterItem[] = [
    {
      before: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
      treatment: 'Teeth Whitening',
      description: 'Professional whitening treatment for a brighter smile'
    },
    {
      before: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop',
      treatment: 'Dental Implants',
      description: 'Implant restoration for missing teeth'
    },
    {
      before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=400&h=300&fit=crop',
      treatment: 'Veneers',
      description: 'Custom porcelain veneers for a perfect smile'
    },
    {
      before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1606265698531-7ce32d100809?w=400&h=300&fit=crop',
      treatment: 'Orthodontics',
      description: 'Invisalign treatment for straighter teeth'
    },
  ];

  const gallery: GalleryItem[] = [
    {
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop',
      alt: 'Modern dental clinic reception'
    },
    {
      url: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=400&fit=crop',
      alt: 'Dental examination room'
    },
    {
      url: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=400&h=400&fit=crop',
      alt: 'Professional dental equipment'
    },
    {
      url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=400&fit=crop',
      alt: 'Dentist at work'
    },
    {
      url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop',
      alt: 'Patient consultation'
    },
    {
      url: 'https://images.unsplash.com/photo-1606265698531-7ce32d100809?w=400&h=400&fit=crop',
      alt: 'Dental tools and instruments'
    },
    {
      url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop',
      alt: 'Smile transformation'
    },
    {
      url: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop',
      alt: 'Teeth cleaning procedure'
    },
    {
      url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=400&fit=crop',
      alt: 'Dental restoration'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">Our Gallery</h1>
            <p className="text-xl text-text-secondary">
              See the transformations we've helped create for our patients. Your smile could be next.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Before & After</h2>
            <p className="text-xl text-text-secondary">
              Real results from our patients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfter.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:border-accent/30 transition-all">
                <div className="relative">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative">
                      <img 
                        src={item.before} 
                        alt={`${item.treatment} - Before`}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 bg-black/60 text-white text-xs px-2 py-1">Before</div>
                    </div>
                    <div className="relative">
                      <img 
                        src={item.after} 
                        alt={`${item.treatment} - After`}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 bg-accent/80 text-white text-xs px-2 py-1">After</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-sm text-accent font-medium">{item.treatment}</div>
                  <div className="text-xs text-text-secondary mt-1">{item.description}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Work</h2>
            <p className="text-xl text-text-secondary">
              A glimpse into our modern facility and team
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="aspect-square bg-white rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer overflow-hidden hover:scale-105"
              >
                <img 
                  src={item.url} 
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Patient Stories</h2>
          <Card className="p-12">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <blockquote className="text-xl text-text-secondary mb-8">
              "I was always embarrassed to smile because of my crooked teeth. After 18 months of orthodontic treatment at NovaDent, I can't stop smiling! The team was amazing throughout the entire process."
            </blockquote>
            <div className="font-semibold text-primary">- Jessica M.</div>
            <div className="text-accent">Orthodontic Treatment Patient</div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
