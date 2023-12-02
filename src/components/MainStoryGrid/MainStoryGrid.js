import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <>
              {index > 0 ? <Divider></Divider> : undefined}
              <SecondaryStory key={story.id} {...story} />
            </>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OptionList>
          {OPINION_STORIES.map((story, index) => (
            <>
              {index > 0 ? <Divider></Divider> : undefined}
              <OpinionStory key={story.id} {...story} />
            </>
          ))}
        </OptionList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media(${QUERIES.tabletAndUp}) {
    grid-template-columns: 2fr minmax(250px, 1fr);
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
  }

  @media(${QUERIES.laptopAndUp}) {
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media(${QUERIES.tabletOnly}) {
    display: grid;
    grid-template-columns: 1fr 0 1fr 0 1fr 0 1fr;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

const Divider = styled.div`
  background: var(--color-gray-300);
  height: 1px;
`


export default MainStoryGrid;
