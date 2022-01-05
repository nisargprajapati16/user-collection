import { Card } from "antd";
import styled from "styled-components";
import Actions from "./Actions";
import Details from "./Details";
import CoverImage from "./CoverImage";
import { User } from "../../../models/user";

const { Meta } = Card;

const CardWrapper = styled(Card)`
  border: 1px solid #e5e5e5;

  .ant-card-cover {
    background: #e5e5e5;
  }

  .ant-card-actions {
    background: #f7f7f7;
    border-top: 1px solid #e5e5e5;

    li {
      border-color: #e5e5e5;
    }
  }
`;

const Index = ({ name, email, phone, website, username }: User) => {
  return (
    <CardWrapper cover={<CoverImage username={username} />} actions={Actions}>
      <Meta
        title={name}
        description={
          <Details email={email} phone={phone} website={`http://${website}`} />
        }
      />
    </CardWrapper>
  );
};

export default Index;
