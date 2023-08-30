import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Web Portfolio
      </SectionTitle>
      <SectionText>
        This Web Portfolio were made to showcase all of my projects that have been done or built in my IT Career
      </SectionText>
      <Button onClick={() => window.location = 'http://bing.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;