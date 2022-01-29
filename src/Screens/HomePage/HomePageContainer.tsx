import { FC, useEffect, useState } from "react";
import HomePageView from "./HomePageView";
import { getOrganizationBackgroundImage } from "Utils/helper";
import { useQuery } from "Hooks";
import { DEFAULTORGANIZATION, ORGANIZATIONQUERYPARAMS } from "../Constants";

interface HomePageContainerProps {

}

export const HomePageContainer: FC<HomePageContainerProps> = () => {
  const query = useQuery();
  const [organization, setOrganization] = useState<string|null>("");
  const [backgroundImage, setBackgroundImage] = useState<string|undefined>("");

  useEffect(() => {
    const organizationName = query.get(ORGANIZATIONQUERYPARAMS);
    const organization = getOrganizationBackgroundImage(organizationName);
    setOrganization(organization ? organization.org_name : DEFAULTORGANIZATION)
    setBackgroundImage(organization?.background_image)
  }, [query])

  return <HomePageView 
    organization={organization}
    backgroundImage={backgroundImage}
  />
}