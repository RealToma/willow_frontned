import { Box } from "@mui/material";
import styled from "styled-components";
import imgBackground from "../../assets/images/background/backGrey01.png";
import imgLogo from "../../assets/images/logo/logo01.png";
import { dataContacts } from "../../data/contacts";

const Layout = ({ children }) => {
  return (
    <StyledComponent>
      <SectionLogo>
        <ImgLogo>
          <img src={imgLogo} width={"100%"} height={"100%"} alt="Logo" />
        </ImgLogo>
        <TextLogo>Willow</TextLogo>
      </SectionLogo>
      <SectionContacts>
        {dataContacts.map((each, index) => {
          return (
            <a
              href={each.urlLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <SectionContactIcon
                key={index}
                color={each.colorFont}
                bgcolor={each.colorBack}
              >
                {each.icon}
              </SectionContactIcon>
            </a>
          );
        })}
      </SectionContacts>
      {children}
      <Footer> </Footer>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url(${imgBackground});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const SectionLogo = styled(Box)`
  display: flex;
  position: absolute;
  align-items: center;
  top: 0px;
  left: 0px;
  cursor: pointer;
  user-select: none;
`;

const ImgLogo = styled(Box)`
  width: 60px;
  margin-right: 13px;
`;

const TextLogo = styled(Box)`
  color: #fff;
  font-family: Bubblegum Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Footer = styled(Box)`
  display: flex;
`;

const SectionContacts = styled(Box)`
  display: flex;
  position: absolute;
  top: 25px;
  right: 25px;
  align-items: center;
`;

const SectionContactIcon = styled(Box)`
  display: flex;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin-left: 10px;
  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  > svg {
    transition: 0.3s;
  }
  &:hover {
    > svg {
      filter: drop-shadow(0px 0px 3px white);
    }
    transform: scale(1.1);
  }
  &:active {
    > svg {
      filter: none;
    }
    transform: scale(1);
  }

  @media (max-width: 1366px) {
    border-radius: 15px;
    width: 50px;
    font-size: 22px;
  }
  @media (max-width: 1024px) {
    border-radius: 12px;
    width: 40px;
    font-size: 18px;
  }
  @media (max-width: 430px) {
    padding: 20px 15px;
  }
`;

export default Layout;
