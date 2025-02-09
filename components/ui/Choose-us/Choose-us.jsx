import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NavLink from "../NavLink";
import { Box, Container } from "@mui/material";
import CompetitionCard from "@/components/re-usables";
import SectionHeader from "@/components/re-usables/SectionHeader";


const faqsList = [
    {
        q: "What is an email marketing tool?",
        a: "An email marketing tool is a software application that allows you to create, send, and manage email campaigns. It helps you to create professional-looking emails, track their performance, and analyze the results.",
    },
    {
        q: "What are the benefits of using an email marketing tool?",
        a: "An email marketing tool can help you reach a larger audience, increase engagement with your customers, and generate more leads.",
    },
    {
        q: "How do I get started with an email marketing tool?",
        a: "To get started with an email marketing tool, you will need to sign up for an account with our provider, Once you have signed up for an account, you can start.",
    },
    {
        q: "How does an AI-powered email marketing tool work?",
        a: "Social media is a great place for businesses because it has the An AI-powered email marketing tool works by analyzing customer data to identify patterns and trends in order to create more targeted campaigns.",
    },
    {
        q: "What are the benefits of using an AI-powered email marketing tool?",
        a: "AI-powered email marketing tools can help marketers save time and money by automating tasks such as segmentation, personalization, content optimization, and more.",
    },
    {
        q: "Can I sell my digital products using Mailgo?",
        a: "Of course you can market and sell your digital products and subscriptions with Mailgo to drive higher conversions and save big on fees.",
    }
]

const whyChooseUsContent = [
    {
      id: 1,
      heading:
        'card one',
      subHeading: 'Invest in forex, crypto, stocks and indices',
    },
    {
      id: 2,
      heading: 'card two',
     subHeading: 'At PerityFx, we are revolutionizing the investment landscape by bringing together investors to leverage pooled resources for stable and profitable returns. ',
    },
    {
      id: 3,
      heading: 'cards three',
      subHeading: 'Our cutting-edge platform utilizes advanced predictive AI to make accurate trading decisions and automatically execute profitable trades across diverse markets.',
      action: 'Enter Campaign',
    },
    {
      id: 4,
      heading: 'cards four',
      subHeading: 'Become a part of PerityFX and start your journey towards financial growth and stability. Sign up now and take the first step towards a smarter investment future.',
      action: 'Make Profit',
    },
  ];


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 769 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 481 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };


const ChooseUs = () => (
  
    <SectionWrapper id="why-choose-us">
      <Container>
          <Box sx={{ mt: '2rem' }}>
            <SectionHeader title={'Why Choose Us'} seeMoreLink="/competitions" />
            <Box>
              {whyChooseUsContent.length == 0 ? (
                <Box
                  sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}
                >
                  <SkeletonComponent />
                </Box>
              ) : (
                <Box mt={5}>
                  <Carousel
                    responsive={responsive}
                    arrows={true}
                    autoPlay={true}
                    rtl={false}
                    swipeable={true}
                    // transitionDuration={500}
                    infinite={true}
                  >
                    {whyChooseUsContent?.map((compData) => (
                      <CompetitionCard
                        key={compData.id}
                        competitionData={compData}
                      />
                    ))}
                  </Carousel>
                </Box>
              )}
            </Box>
          </Box>
      </Container>
   </SectionWrapper>
)

export default ChooseUs