import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useDark } from "../Root";

interface IHeaderProps {
  title?: string;
}

const HeaderContainer = styled.header`
  height: 10vh;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  margin: 50px 0;
  .header-icon {
    font-size: 28px;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
  text-align: center;
`;

const LeftBox = styled.div``;

const RightBox = styled.div`
  text-align: right;
`;

function Header({ title }: IHeaderProps) {
  const { isDark, toggleDark } = useDark();

  return (
    <HeaderContainer>
      <LeftBox>
        {title !== "코인" ? (
          <Link to="/">
            <FontAwesomeIcon className="header-icon" icon={faHouse} />
          </Link>
        ) : null}
      </LeftBox>
      <Title>{title}</Title>
      <RightBox>
        <FontAwesomeIcon
          className="header-icon"
          icon={isDark ? faSun : faMoon}
          onClick={toggleDark}
        />
      </RightBox>
    </HeaderContainer>
  );
}

export default Header;
