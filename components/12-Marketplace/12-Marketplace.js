import Link from "next/link";
import Image from 'next/image'
import CategoryEight from "../Category/CategoryEight";
import Card from "../Cards/Card";
import CounterFive from "../Counters/Counter-Five";
import TestimonialFive from "../Testimonials/Testimonial-Five";
import BlogGridMinimal from "../Blogs/BlogGridMinimal";
import NewsletterFour from "../Newsletters/Newsletter-Four";
import Hero from '../../public/images/gallery/hero-image.webp'


const Marketplace = () => {
  return (
    <>
      <div className="rbt-banner-5 height-650 bg_image " //height-650
      style={{backgroundColor: '#000000', width: '100%',  display: 'flex'}}>
        <div className="container " style={{display: 'flex'}}>
          <div className="row">
            <div className="col-sm-12 col-md-6 " style={{display: 'flex', alignItems: 'center'}}>
              <div //inner
               className=" text-start " > 
                <h2 className="title text-light">
                  Create, Buy & Sell Courses, Events & Digital Assets on Mentorbliss
                </h2> 
                <p className="description">
                Mentorbliss makes learning and teaching more effective and seamless.
                </p>
                <div className="slider-btn rbt-button-group justify-content-start">
                  <Link
                    className="rbt-btn btn-border icon-hover color-white rounded-1" //radius-round
                    href="#"
                  >
                    <span className="btn-text">Explore Courses</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </Link>
                  <Link className="rbt-btn-link color-white" href="#">
                    Start learning<i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
              
            </div>
            <div className="col-sm-12 col-md-6">
              <Image width={400} height={200} src={Hero} alt='image' style={{width: '600px', objectFit: 'cover', padding: '30px 0'}}/>
            </div>
          </div>
          
        </div>
      </div>

      <div className="rbt-category-area bg-color-white rbt-section-gapTop ">
        <div className="container">
          <div className="row g-5 ">
            <CategoryEight />
          </div>
        </div>
      </div>

      <div className="rbt-featured-course bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row g-5 align-items-end mb--60">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="section-title text-start">
                <h2 className="title">Featured Courses</h2>
                <p className="description mt--20">
                Join other students making a living with skills they have learnt from Mentorbliss. Learn skills you can sell to anyone anywhere in the world with ease. Learn at your own time and pace!
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="load-more-btn text-start text-lg-end">
                <Link
                  className="rbt-btn btn-border icon-hover rounded-1" //radius-round
                  href="/course-filter-one-toggle"
                >
                  <span className="btn-text">Browse More Courses</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <Card
              col="col-lg-4 col-md-6 col-sm-12 col-12"
              mt=""
              start={0}
              end={6}
              isDesc={true}
              isUser={true}
            />
          </div>
        </div>
      </div>

      <div
        className="rbt-counterup-area bg_image bg_image_fixed bg_image--20 ptb--170 bg-black-overlay"
        data-black-overlay="2"
      >
        <CounterFive />
      </div>

      <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="testimonial-item-3-activation swiper rbt-arrow-between gutter-swiper-30">
            <TestimonialFive isDesc={true} />
          </div>
        </div>
      </div>
      
      <div className="rbt-rbt-blog-area rbt-section-gapTop  "  style={{backgroundColor: '#2f57ef'}}>  

        <div className="wrapper pb--50 rbt-index-upper">
          <div className="container">
            <div className="row g-5 align-items-end mb--60">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="section-title text-start">
                  <h2 className="title color-white">Latest News</h2>
                  <p className="description color-white-off mt--20">
                  Join other students making a living with skills they have learnt from Mentorbliss. Learn skills you can sell to anyone anywhere in the world with ease. Learn at your own time and pace!
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="load-more-btn text-start text-lg-end">
                  <Link
                    className="rbt-btn btn-border icon-hover rounded-1 color-white-off" //radius-rounded
                    href="/blog-list"
                  >
                    <span className="btn-text">See All Articles</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <BlogGridMinimal start={0} end={3} isPagination={false} />
          </div>
        </div>
      </div>

      <div className="rbt-newsletter-area bg-color-white rbt-section-gapBottom pt--60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <NewsletterFour />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
