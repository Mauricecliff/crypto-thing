import GradientWrapper from '@/components/GradientWrapper';
import Image from 'next/image';
import NavLink from '../NavLink';
import HeroImg from '@/public/images/hero.svg';
import LayoutEffect from '@/components/LayoutEffect';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const heroContent = [
  {
    id: 2,
    heading: 'Unite. Invest. Prosper',
    subHeading: 'At PerityFx, we are revolutionizing the investment landscape by bringing together investors to leverage pooled resources for stable and profitable returns. ',
    action: 'Start Your Journey',
  },
  {
    id: 3,
    heading: 'Precision Trading with AI',
    subHeading: 'Our cutting-edge platform utilizes advanced predictive AI to make accurate trading decisions and automatically execute profitable trades across diverse markets.',
    action: 'Enter Campaign',
  },
  {
    id: 4,
    heading: 'Join Us Today',
    subHeading: 'Become a part of PerityFX and start your journey towards financial growth and stability. Sign up now and take the first step towards a smarter investment future.',
    action: 'Make Profit',
  },
];

const Hero = () => (
  <section>
    <div className="custom-screen py-28">
      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: 'opacity-1',
          falseState: 'opacity-0',
        }}
      >
        <div>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            interval={3000}
            showArrows={false}
          >
            {heroContent.map((content) => (
              <div
                key={content.id}
                className="space-y-5 max-w-3xl mx-auto text-center"
              >
                <h1
                  className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl"
                  style={{
                    backgroundImage:
                      'linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)',
                  }}
                >
                  {content.heading}
                </h1>
                <p className="max-w-xl mx-auto text-gray-300">
                  {content.subHeading}
                </p>
               {content.id === 1 ? null : (
                  <div className="flex justify-center font-medium text-sm">
                  <NavLink
                    href="/#pricing"
                    className="flex items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 "
                  >
                    {content.action}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </NavLink>
                </div>
               )}
                
              </div>
            ))}
          </Carousel>
          {/* <GradientWrapper
            className="mt-16 sm:mt-28"
            wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]"
          >
            <Image
              src={HeroImg}
              className="shadow-lg rounded-2xl"
              alt="Mailgo"
            />
          </GradientWrapper> */}
        </div>
      </LayoutEffect>
    </div>
  </section>
);

export default Hero;
