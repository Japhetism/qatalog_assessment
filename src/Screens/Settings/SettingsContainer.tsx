/* eslint-disable */
import { FC, useState } from "react";
import SettingsView from "./SettingsView";
import Organizations from "Fixtures/orgs.json";
import { getOrganizationBackgroundImage } from "Utils/helper";
import { OrganizationArrayType } from "../types";

interface SettingsContainerProps {

}

export const SettingsContainer: FC<SettingsContainerProps> = () => {
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [backgroundImage, setBackgroundImage] = useState<string|undefined>("");
  const [searchValue, setSearchValue] = useState<Array<OrganizationArrayType>>([]);

  const handleApplyTheme = () => {
    const organization = getOrganizationBackgroundImage(selectedOrganization);
    setBackgroundImage(organization?.background_image);
  }

  const handleReset = () => {
    setSelectedOrganization("");
    setBackgroundImage("");
  }

  const searchOrganizations = (org_name:string) => {
    if (org_name != "") {
      const filterResult = Organizations.filter(organization => 
        organization.org_name.toLowerCase().includes(org_name.toLowerCase())
        //organization.org_name.toLowerCase() === org_name.toLowerCase()
      );
      setSearchValue(filterResult)
    } else {
      setSearchValue([])
    }
    //return filterResult;
  }

  return <SettingsView 
    backgroundImage={backgroundImage}
    organizations={Organizations}
    selectedOrganization={selectedOrganization}
    setSelectedOrganization={setSelectedOrganization}
    handleApplyTheme={handleApplyTheme}
    handleReset={handleReset}
    searchOrganizations={searchOrganizations}
    searchValue={searchValue}
  />
}