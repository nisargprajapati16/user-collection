import { Fragment } from "react";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import LabelWithIcon from "../../Common/LabelWithIcon";

type DetailsProps = {
  email: string;
  phone: string;
  website: string;
};

const Details = ({ email, phone, website }: DetailsProps) => (
  <Fragment>
    <LabelWithIcon label={email} prefix={<MailOutlined />} />
    <LabelWithIcon label={phone} prefix={<PhoneOutlined />} />
    <LabelWithIcon label={website} prefix={<GlobalOutlined />} />
  </Fragment>
);

export default Details;
