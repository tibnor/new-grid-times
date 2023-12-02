import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
      <ActionGroupeLaptopAndUp>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroupeLaptopAndUp>
        <Logo />
        <ActionGroupeLaptopAndUp>
            <SubscribeWrapper>
              <Button>
                subscribe
              </Button>
              <AlreadyWrapper>
                Already a subscriber?
              </AlreadyWrapper>
            </SubscribeWrapper>
          </ActionGroupeLaptopAndUp>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupeLaptopAndUp = styled(ActionGroup)`
  display: none;
  align-items: baseline;

  @media (${QUERIES.laptopAndUp}) {
    display: flex;
  }
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const AlreadyWrapper = styled.a`
  color: var(--gray-900, #2B2826);
  font-family: Crimson Text;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  text-decoration-line: underline;
`

export default Header;
