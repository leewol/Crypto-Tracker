import styled from "styled-components";

interface IHeaderProps {
  title?: string;
}

const HeaderContainer = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

function Header({ title }: IHeaderProps) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
}

export default Header;
