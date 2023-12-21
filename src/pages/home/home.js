import { Box } from "@mui/material";
import styled from "styled-components";
import imgDog01 from "../../assets/images/background/dog_shadow01.png";
import imgButtonBuy from "../../assets/images/background/buttonBuy.svg";
import imgButtonWhitepaper from "../../assets/images/background/buttonWhitepaper.svg";
import imgButtonWhite from "../../assets/images/background/buttonWhite.svg";
import imgBone from "../../assets/images/icon/bone01.png";
import imgHouse from "../../assets/images/icon/house01.png";
import { FaPlus } from "react-icons/fa6";
import { dataContacts } from "../../data/contacts";

const Home = () => {
  return (
    <StyledComponent>
      <SectionInfomation>
        <TextWelcome>
          Welcome to Willow:{"\u00a0"}
          <TextWelcomeSmall>
            A New Era of Playful Innovation on Solana Chain
          </TextWelcomeSmall>
        </TextWelcome>
        <TextWelcomeDescription>
          Willow is a cryptocurrency that embrace the playful spirit of meme
          culture and gamification on Solana Chain. Willow is more than just a
          cryptocurrency—it's an experience, a journey, and a celebration of the
          vibrant and creative community that forms its backbone. Inspired by
          the charm of meme doges and fueled by the efficiency of blockchain
          technology, Willow represents a unique fusion of fun and financial
          innovation.
        </TextWelcomeDescription>
        <TextWelcomeDescription>
          Contract Address:{" "}
          <span>
            <TextContractAddress
              href={`https://solscan.io/account/${process.env.REACT_APP_ADDRESS_TOKEN_CONTRACT}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {process.env.REACT_APP_ADDRESS_TOKEN_CONTRACT}
            </TextContractAddress>
          </span>
        </TextWelcomeDescription>
        <SectionButtonGroup01>
          <SectionBuy>
            <ButtonBuy>Buy $WILLO</ButtonBuy>
            <TextBuy>Buy Tax: 0%</TextBuy>
            <TextHolders>TOTAL $WILLO HOLDERS / 0</TextHolders>
          </SectionBuy>
          <SectionSell>
            <ButtonWhitepaper
              onClick={() => {
                window.open(process.env.REACT_APP_LINK_WHITEPAPER);
              }}
            >
              Whitepaper
            </ButtonWhitepaper>
            <TextBuy>Sell Tax: 0%</TextBuy>
            <TextHolders>TOTAL $WILLO BURNED / 0</TextHolders>
          </SectionSell>
        </SectionButtonGroup01>
      </SectionInfomation>
      <SectionSeparate>
        <SectionBar>
          <IconPlusBone>
            <FaPlus />
          </IconPlusBone>
          <IconPlusHouse>
            <FaPlus />
          </IconPlusHouse>
          <SectionBone>
            <img src={imgBone} width={"100%"} height={"100%"} alt="bone" />
          </SectionBone>
          <SectionHouse>
            <img src={imgHouse} width={"100%"} height={"100%"} alt="house" />
            <SectionExplorer>
              <ButtonViewExplorer
                onClick={() => {
                  window.open(
                    `https://solscan.io/account/${process.env.REACT_APP_ADDRESS_TOKEN_CONTRACT}`
                  );
                }}
              >
                View Explorer
              </ButtonViewExplorer>
            </SectionExplorer>
          </SectionHouse>
        </SectionBar>
      </SectionSeparate>
      <SectionImageMobile>
        <SectionImage>
          <img src={imgDog01} alt="dog" />
          <ImgMobileBorn>
            <img src={imgBone} width={"100%"} height={"100%"} alt="imgBorn" />
          </ImgMobileBorn>
          <ImgMobilePlus01>
            <FaPlus />
          </ImgMobilePlus01>
          <ImgMobilePlus02>
            <FaPlus />
          </ImgMobilePlus02>
          <ImgMobileHouse>
            <img src={imgHouse} width={"100%"} height={"100%"} alt="imgHouse" />
          </ImgMobileHouse>
        </SectionImage>
      </SectionImageMobile>
      <SectionViewExplorerMobile>
        <MobileButtonViewExplorer
          onClick={() => {
            window.open(
              `https://solscan.io/account/${process.env.REACT_APP_ADDRESS_TOKEN_CONTRACT}`
            );
          }}
        >
          View Explorer
        </MobileButtonViewExplorer>
      </SectionViewExplorerMobile>
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
      {/* <SectionBottom>
        <TextHolders>TOTAL $WILLO HOLDERS / 0</TextHolders>
        <TextHolders>TOTAL $WILLO BURNED / 0</TextHolders>
      </SectionBottom> */}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1365px) {
    flex-direction: column;
  }
`;

const SectionInfomation = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  z-index: 3;
`;

const TextWelcome = styled.span`
  color: #fff;

  font-family: Bubblegum Sans;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 40px;

  @media (max-width: 1366px) {
    font-size: 40px;
  }
  @media (max-width: 1365px) {
    margin-top: 60px;
  }
  @media (max-width: 1024px) {
    margin-top: 80px;
  }
  @media (max-width: 900px) {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

const TextWelcomeSmall = styled.span`
  color: #fff;
  font-family: Bubblegum Sans;
  font-size: 38.924px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 1366px) {
    font-size: 33px;
  }
  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

const TextWelcomeDescription = styled(Box)`
  color: #fff;

  font-family: Bubblegum Sans;
  font-size: 23.354px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  > span {
    word-break: break-all;
  }
  margin-top: 40px;
  @media (max-width: 1440px) {
    margin-top: 20px;
  }
  @media (max-width: 1366px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    margin-top: 25px;
    font-size: 18px;
  }
  @media (max-width: 500px) {
    margin-top: 30px;
    font-size: 15px;
  }
`;

const TextContractAddress = styled.a`
  color: #fff;

  font-family: Bubblegum Sans;
  font-size: 23.354px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;

  cursor: pointer;

  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 6px white;
  }

  @media (max-width: 1366px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const SectionSeparate = styled(Box)`
  display: flex;
  height: 100%;
  padding: 100px 70px 150px 220px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 100px 0px 150px 80px;
  }
  @media (max-width: 1365px) {
    display: none;
  }
`;

const SectionBar = styled(Box)`
  display: flex;
  position: relative;
  width: 3px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
`;

const SectionImageMobile = styled(Box)`
  display: flex;

  z-index: 2;
  width: 650px;
  height: 650px;
  @media (max-width: 1440px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 1366px) {
    /* display: none; */
    width: 400px;
    height: 400px;
  }
  @media (max-width: 1365px) {
    margin-top: 60px;
    width: 100%;
    > div {
      width: 500px;
      height: 500px;
    }
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    margin-top: 55px;
    width: 100%;
  }
  @media (max-width: 500px) {
    margin-top: 50px;
  }
`;

const SectionViewExplorerMobile = styled(Box)`
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 2;
  @media (max-width: 1365px) {
    display: flex;
    width: 100%;
  }
`;

const SectionImage = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;

  > img {
    width: 100%;
    height: auto;
  }
`;

const SectionButtonGroup01 = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 1440px) {
    margin-top: 32px;
  }
  @media (max-width: 1366px) {
    margin-top: 28px;
  }
  @media (max-width: 768px) {
    margin-top: 25px;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;

const ButtonBuy = styled(Box)`
  display: flex;
  width: 270px;
  height: 60px;
  background-image: url(${imgButtonBuy});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;
  color: #fff;

  text-align: center;
  font-family: Bubblegum Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    color: #80a3ff;
    background-image: url(${imgButtonWhite});
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 80px;
  }
  @media (max-width: 768px) {
    font-size: 19px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const ButtonWhitepaper = styled(Box)`
  display: flex;
  width: 270px;
  height: 60px;
  background-image: url(${imgButtonWhitepaper});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;
  color: #fff;

  text-align: center;
  font-family: Bubblegum Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    color: black;
    background-image: url(${imgButtonWhite});
  }

  &:active {
    transform: scale(0.95);
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 80px;
  }
  @media (max-width: 768px) {
    font-size: 19px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const SectionBuy = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
  @media (max-width: 900px) {
    flex: 1;
    margin-right: 50px;
  }
  @media (max-width: 768px) {
    margin-right: 40px;
  }
  @media (max-width: 500px) {
    margin-right: 30px;
  }
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;

const SectionSell = styled(Box)`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    flex: 1;
  }
`;

const TextBuy = styled(Box)`
  color: #fff;

  font-family: Bubblegum Sans;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 70px;
  margin-bottom: 80px;

  @media (max-width: 1440px) {
    margin-top: 50px;
    margin-bottom: 60px;
  }
  @media (max-width: 1366px) {
    font-size: 40px;
    margin: 40px 0px;
  }
  @media (max-width: 1024px) {
    font-size: 35px;
    margin: 35px 0px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    margin: 30px 0px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
    margin: 25px 0px;
  }
`;

const TextHolders = styled(Box)`
  display: flex;
  color: #fff;

  font-family: Bubblegum Sans;
  font-size: 15.57px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 60px;
  @media (max-width: 1366px) {
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

const SectionBone = styled(Box)`
  display: flex;
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  aspect-ratio: 1;
`;

const SectionHouse = styled(Box)`
  display: flex;
  position: absolute;
  align-items: center;
  right: -20px;
  /* left: 50%; */
  /* transform: translateX(-50%); */
  bottom: -110px;
  width: 150px;
  aspect-ratio: 1;
`;

const SectionExplorer = styled(Box)`
  display: flex;
  position: absolute;
  left: 50%;
  bottom: -50px;
  transform: translateX(-50%);
  @media (max-width: 1365px) {
    display: none;
  }
`;

const ButtonViewExplorer = styled(Box)`
  display: flex;
  width: 320px;
  height: 55px;
  justify-content: center;
  align-items: center;
  color: #fff;

  text-align: center;
  font-family: Bubblegum Sans;
  font-size: 15.57px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 6.228px;
  background: #80a3ff;

  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: #80a3ff;
  }
  &:active {
    transform: scale(0.95);
  }
  @media (max-width: 1366px) {
    width: 250px;
    height: 50px;
  }
`;

const IconPlusBone = styled(Box)`
  display: flex;
  position: absolute;
  color: white;
  font-size: 30px;
  right: -50px;
  top: -40px;
`;

const IconPlusHouse = styled(Box)`
  display: flex;
  position: absolute;
  color: white;
  font-size: 30px;
  right: -50px;
  bottom: -40px;
`;

const ImgMobileBorn = styled(Box)`
  display: none;
  position: absolute;
  left: 0px;
  top: -50px;
  width: 120px;
  aspect-ratio: 1;
  @media (max-width: 1365px) {
    display: flex;
  }
`;
const ImgMobilePlus01 = styled(Box)`
  display: none;
  position: absolute;
  right: 30px;
  top: -10px;
  color: white;
  font-size: 40px;
  @media (max-width: 1365px) {
    display: flex;
  }
`;

const ImgMobilePlus02 = styled(Box)`
  display: none;
  position: absolute;
  left: 30px;
  bottom: -20px;
  color: white;
  font-size: 40px;
  @media (max-width: 1365px) {
    display: flex;
  }
`;

const ImgMobileHouse = styled(Box)`
  display: none;
  position: absolute;
  right: 0px;
  bottom: -50px;
  width: 120px;
  aspect-ratio: 1;
  @media (max-width: 1365px) {
    display: flex;
  }
`;

const MobileButtonViewExplorer = styled(Box)`
  display: flex;
  margin-top: 100px;
  margin-bottom: 50px;
  width: 320px;
  height: 55px;
  justify-content: center;
  align-items: center;
  color: #fff;

  text-align: center;
  font-family: Bubblegum Sans;
  font-size: 15.57px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 6.228px;
  background: #80a3ff;

  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: #80a3ff;
  }
  &:active {
    transform: scale(0.95);
  }
  @media (max-width: 1365px) {
    width: 320px;
    height: 55px;
  }
  @media (max-width: 1024px) {
    width: 250px;
    height: 50px;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
  }
`;

const SectionContacts = styled(Box)`
  display: none;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 900px) {
    display: flex;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
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

export default Home;
