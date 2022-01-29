import { FC } from "react";
import styled from "styled-components";
import { OrganizationArrayType } from "Screens/types";

interface DropdownProps {
  selectedOption: string;
  options: Array<OrganizationArrayType>;
  onChange: (org_name:string) => void;
};

export const Dropdown: FC<DropdownProps> = ({ 
  options, selectedOption, onChange 
}) => {
  return (
    <Select
      onChange={event => onChange(event.target.value)}
      value={selectedOption}
    >
      <option value="">Choose an Organization</option>
      {options.map((item:OrganizationArrayType) => 
        <option key={item.org_name} value={item.org_name}>
          {item.org_name}
        </option> 
      )}
    </Select>
  )
}

const Select = styled.select`
  width: 100%;
  height: 58px;
  background: #FFFFFF;
  color: gray;
  font-size: 14px;
  border: 2px solid #E8E8E8;
  box-sizing: border-box;
  border-radius: 10px;
  option {
    background: #FFFFFF;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 0.1px;
    color: #B0B0B0;

  }
`;