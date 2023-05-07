import React from 'react'
import Image from 'next/image'
import img from '../src/assets/feature.png'
import Link from 'next/link'

const FeaturesBanner = () => {
  return (
    <section className='features-section'>
      <div className='title'>
        <h1>Discover the widest selection of brands, only on Apex LUXE</h1>
      </div>

      <div className='content'>
        <div className='left'>
          <div className="feature-background">
            Different from others
          </div>
          <div>
            <h3>Assured Quality</h3>
            <p>Quality is of utmost importance to us. We take every measure to ensure that our products meet the highest standards of quality.</p>
          </div>
          <div>
            <h3>Authentic Brands</h3>
            <p>We understand the importance of authenticity and take every measure to ensure that our products are genuine.</p>
          </div>
          <div>
            <h3>Fair Price</h3>
            <p>When you shop with us, you can be assured that you are getting the best value for your money.</p>
          </div>
          <div>
            <h3>Easy Returns</h3>
            <p>If for any reason you are not satisfied with your purchase, we offer hassle-free returns and exchanges so that you can shop with confidence.</p>
          </div>
        </div>

        <div className='right'>
          <Image src={img} width={300} height={350} alt='img' />
          <div>
            <p>At Apex LUXE, we take pride in curating our collection specifically for the Indian market. We understand the unique tastes and preferences of our customers and strive to offer products that cater to these preferences. Whether it's clothing, accessories, or anything in between, we ensure that our collection is tailored to meet the needs of our Indian customers.</p>
            <Link href={'/products'}>
              <button className='btn' type='button'>See All Product</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesBanner
