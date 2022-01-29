import { FC, useState } from "react";
import SettingsView from "./SettingsView";
import Organizations from "Fixtures/orgs.json";
import { getOrganizationBackgroundImage } from "Utils/helper";

interface SettingsContainerProps {

}

export const SettingsContainer: FC<SettingsContainerProps> = () => {
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [backgroundImage, setBackgroundImage] = useState<string|undefined>("");

  const handleApplyTheme = () => {
    const organization = getOrganizationBackgroundImage(selectedOrganization);
    setBackgroundImage(organization?.background_image);
  }

  const handleReset = () => {
    setSelectedOrganization("");
    setBackgroundImage("");
  }

  return <SettingsView 
    backgroundImage={backgroundImage}
    organizations={Organizations}
    selectedOrganization={selectedOrganization}
    setSelectedOrganization={setSelectedOrganization}
    handleApplyTheme={handleApplyTheme}
    handleReset={handleReset}
  />
}