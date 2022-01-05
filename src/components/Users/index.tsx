import { useState, useEffect } from "react";
import { Row, Col, Empty } from "antd";
import styled from "styled-components";
import UserCard from "./UserCard";
import { User } from "../../models/user";
import { getUsers } from "../../services/user.service";

const IndexWrapper = styled.div`
  padding: 15px 20px;
`;

const Index = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <IndexWrapper>
      <Row gutter={[15, 20]}>
        {users.length ? (
          users.map((user) => (
            <Col span={6} xl={6} md={8} sm={12} xs={24} key={user.username}>
              <UserCard {...user} />
            </Col>
          ))
        ) : (
          <Col span={6} xs={24}>
            <Empty />
          </Col>
        )}
      </Row>
    </IndexWrapper>
  );
};

export default Index;
