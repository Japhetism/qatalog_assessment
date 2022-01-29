import { FC } from "react";
import { Heading1 } from "Components";
import { SETTINGSURL } from "../Constants";
import { 
  BottomText, Container, Section, StyledLink 
} from "../styles";

interface HomePageViewProps {
  organization: string|null;
  backgroundImage: string|undefined;
};

const HomePageView: FC<HomePageViewProps> = ({ 
  backgroundImage, organization
}) => {
  return <Container backgroundImage={backgroundImage}>
    <Section>
      <Heading1
        title={organization}
      />
    </Section>
    <BottomText>
      <StyledLink to={SETTINGSURL}>
        Back to settings
      </StyledLink>
    </BottomText>
  </Container>
}

export default HomePageView;