import { FC } from "react";
import styled from "styled-components";
import { Button, Dropdown } from "Components";
import { HOMEPAGEURL, ORGANIZATIONQUERYPARAMS } from "../Constants";
import { OrganizationArrayType } from "../types";
import { 
  BottomText, Container, Section, StyledLink 
} from "../styles";

interface SettingsViewProps {
  selectedOrganization: string;
  setSelectedOrganization: (org_name:string) => void;
  organizations: Array<OrganizationArrayType>;
  handleReset: () => void;
  handleApplyTheme: () => void;
  backgroundImage: string|undefined;
};

const SettingsView: FC<SettingsViewProps> = ({ 
  backgroundImage, organizations, selectedOrganization, 
  setSelectedOrganization, handleApplyTheme, handleReset 
}) => {
  return <Container backgroundImage={backgroundImage}>
    <Section>
      <SettingsContent>
        <Dropdown 
          options={organizations}
          onChange={setSelectedOrganization}
          selectedOption={selectedOrganization}
        />
        <ButtonSection>
          <Button 
            title="Reset"
            width={152}
            bgColor="#FFFFFF"
            color="#2091F9"
            onClick={handleReset}
          />
          <Button 
            title="Apply Theme"
            width={190}
            bgColor="#2091F9"
            color="#FFFFFF"
            onClick={handleApplyTheme}
          />
        </ButtonSection>
      </SettingsContent>
    </Section>
    <BottomText>
      <StyledLink 
        to={`${HOMEPAGEURL}?${ORGANIZATIONQUERYPARAMS}=${selectedOrganization}`}
      >
        Your Homepage
      </StyledLink>
    </BottomText>
  </Container>
}

export default SettingsView;

const SettingsContent = styled.div`
  width: 404px;
  height: 351px;
  background-color: #D8D8D8;
  border: #D8D8D8 5px solid;
  padding: 20px;
  z-index: 100;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 220px;
`;