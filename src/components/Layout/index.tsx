import styled from '@emotion/styled';

import { ContainerFullWidth } from 'components/ContainerFullWidth';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { LayoutProps } from 'types/components';

const ContentHeader = styled.header``;
const ContentMain = styled.main``;
const ContentFooter = styled.footer``;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <ContentHeader>
        <Header />
      </ContentHeader>

      <ContentMain>
        <ContainerFullWidth>{children}</ContainerFullWidth>
      </ContentMain>

      <ContentFooter>
        <Footer />
      </ContentFooter>
    </div>
  );
};
