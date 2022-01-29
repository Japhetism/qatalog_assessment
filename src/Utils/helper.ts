import Organizations from "Fixtures/orgs.json";

export const getOrganizationBackgroundImage = (org_name:string|null) => {
  const filterResult = Organizations.find(organization => organization.org_name === org_name);
  return filterResult;
}