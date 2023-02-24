import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faHouse,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

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
  .header-icon:first-child {
    margin-right: 10px;
  }
`;

function Header({ title }: IHeaderProps) {
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer>
      <LeftBox>
        <FontAwesomeIcon
          onClick={onBackClick}
          className="header-icon"
          icon={faArrowCircleLeft}
        />
      </LeftBox>
      <Title>{title}</Title>
      <RightBox>
        <Link to="/">
          <FontAwesomeIcon className="header-icon" icon={faHouse} />
        </Link>
        <FontAwesomeIcon className="header-icon" icon={faSun} />
      </RightBox>
    </HeaderContainer>
  );
}

export default Header;
