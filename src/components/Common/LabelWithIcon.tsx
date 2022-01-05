import { ReactNode } from "react";
import styled from "styled-components";

type LabelWithIconProps = {
  label: string;
  prefix: ReactNode;
};

const LabelWithIconWrapper = styled.div`
  display: flex;
  align-items: center;

  .anticon {
    margin-right: 10px;
  }
`;

const LabelWithIcon = ({ label, prefix }: LabelWithIconProps) => (
  <LabelWithIconWrapper>
    {prefix} {label}
  </LabelWithIconWrapper>
);

export default LabelWithIcon;
