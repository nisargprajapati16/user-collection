import styled from "styled-components";

type CoverImageProps = {
  username: string;
};

const CoverImageWrapper = styled.img`
  max-height: 200px;
`;

const CoverImage = ({ username }: CoverImageProps) => (
  <CoverImageWrapper
    alt={username}
    src={`https://avatars.dicebear.com/api/adventurer/${username}.svg`}
  />
);

export default CoverImage;
