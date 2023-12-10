import { Box } from "@mui/material";
import styled from "styled-components";
import imgBackground from "../../assets/images/background/backGrey01.png";
import imgLogo from "../../assets/images/logo/logo01.png";
import { dataContacts } from "../../data/contacts";
import { dataLinks } from "../../data/links";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <StyledComponent>
      <SectionLogo
        onClick={() => {
          navigate("/");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <ImgLogo>
          <img src={imgLogo} width={"100%"} height={"100%"} alt="Logo" />
        </ImgLogo>
        <TextLogo>Willow</TextLogo>
      </SectionLogo>
      <SectionPageLink>
        {dataLinks.map((each, index) => {
          return (
            <TextEachLink
              key={index}
              onClick={() => {
                if (!each.flagLink) {
                  window.open(each.link);
                } else {
                  navigate(each.link);
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {each.name}
            </TextEachLink>
          );
        })}
      </SectionPageLink>
      <SectionContacts>
        {dataContacts.map((each, index) => {
          return (
            <a
              href={each.urlContact}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              key={index}
            >
              <SectionContactIcon
                color={each.colorFont}
                bgcolor={each.colorBack}
              >
                {each.icon}
              </SectionContactIcon>
            </a>
          );
        })}
      </SectionContacts>
      <SectionContent>{children}</SectionContent>
      <Footer>WILLO: $0.000000000</Footer>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
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
  top: -10px;
  left: 0px;
  cursor: pointer;
  user-select: none;
`;

const ImgLogo = styled(Box)`
  width: 60px;
  margin-right: 13px;

  @media (max-width: 1366px) {
    width: 55px;
  }
  @media (max-width: 1024px) {
    width: 50px;
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    width: 40px;
    margin-right: 8px;
  }
  @media (max-width: 500px) {
    width: 30px;
  }
  @media (max-width: 390px) {
    width: 25px;
    margin-right: 5px;
  }
`;

const TextLogo = styled(Box)`
  color: #fff;
  font-family: Bubblegum Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1440px) {
    font-size: 35px;
  }
  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

const Footer = styled(Box)`
  display: flex;
  position: absolute;
  color: #fff;

  text-align: right;
  font-family: Bubblegum Sans;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  right: 0px;
  bottom: 0px;

  @media (max-width: 1366px) {
    font-size: 23px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const SectionContacts = styled(Box)`
  display: flex;
  position: absolute;
  top: 25px;
  right: 25px;
  align-items: center;

  @media (max-width: 1440px) {
    top: 23px;
    right: 23px;
  }
  @media (max-width: 1024px) {
    top: 20px;
    right: 20px;
  }
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
  @media (max-width: 768px) {
    width: 45px;
    font-size: 20px;
  }
  @media (max-width: 500px) {
    width: 40px;
    font-size: 18px;
  }
`;

const SectionPageLink = styled(Box)`
  display: flex;
  position: absolute;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #d9d9d9;
  top: 22px;
  left: 20%;

  @media (max-width: 1366px) {
    top: 20px;
    left: 23%;
    padding-bottom: 15px;
  }
  @media (max-width: 1200px) {
    left: 20%;
    top: 20px;
    padding-bottom: 10px;
  }
`;

const TextEachLink = styled(Box)`
  color: #fff;

  font-family: Bubblegum Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px 60px;

  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 12px white;
  }

  @media (max-width: 1600px) {
    margin: 0px 45px;
  }
  @media (max-width: 1440px) {
    margin: 0px 40px;
  }
  @media (max-width: 1366px) {
    margin: 0px 20px;
  }
  @media (max-width: 1024px) {
    margin: 0px 15px;
  }
  /* &:active {
    transform: scale(0.95);
  } */
`;

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 65px 40px 50px 40px;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 65px 40px 50px 40px;
  }
  @media (max-width: 1024px) {
    padding: 50px 35px;
  }
  @media (max-width: 768px) {
    padding: 40px 30px;
  }
  @media (max-width: 500px) {
    padding: 30px 20px;
  }
`;

export default Layout;
