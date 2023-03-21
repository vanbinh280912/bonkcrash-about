import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

interface Props {}

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <div className="container">
        <div className="facb">
          <Link to={"/"}>
            <img src="/logo.png" alt="logo" className="max-w-[88px]" />
          </Link>
          <div className="list-btn fa-center gap-[34px]">
            <StyledButtonLink>
              <Icon icon={"akar-icons:discord-fill"} className="text-[32px]" />
            </StyledButtonLink>
            <StyledButtonLink>
              <Icon icon={"akar-icons:twitter-fill"} className="text-[32px]" />
            </StyledButtonLink>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  border-bottom: 1px solid #863e59;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.32));
  padding: 10px 0;
`;

const StyledButtonLink = styled.a`
  background: #fdebab;
  border: 2px solid #000000;
  border-radius: 22px;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease;
  :hover {
    background: none;
  }
`;

export default Header;
