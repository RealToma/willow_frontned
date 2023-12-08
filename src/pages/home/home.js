import { Box } from "@mui/material";
import styled from "styled-components";
import imgDog01 from "../../assets/images/background/dog_shadow01.png";
import imgButtonBuy from "../../assets/images/background/buttonBuy.svg";
import imgButtonWhitepaper from "../../assets/images/background/buttonWhitepaper.svg";
import imgButtonWhite from "../../assets/images/background/buttonWhite.svg";
import imgBone from "../../assets/images/icon/bone01.png";
import imgHouse from "../../assets/images/icon/house01.png";
import { FaPlus } from "react-icons/fa6";

const Home = () => {
  return (
    <StyledComponent>
      <SectionInfomation>
        <TextWelcome>
          Welcome to Willow:{"\u00a0"}
          <TextWelcomeSmall>
            A New Era of Playful Innovation on Ethereum
          </TextWelcomeSmall>
        </TextWelcome>
        <TextWelcomeDescription>
          Willow is a cryptocurrency that embrace the playful spirit of meme
          culture and gamification on Ethereum. Willow is more than just a
          cryptocurrency—it's an experience, a journey, and a celebration of the
          vibrant and creative community that forms its backbone. Inspired by
          the charm of meme doges and fueled by the efficiency of blockchain
          technology, Willow represents a unique fusion of fun and financial
          innovation.
        </TextWelcomeDescription>
        <TextWelcomeDescription>
          Contract Address:{" "}
          <TextContractAddress
            href={`https://etherscan.io/address/${process.env.REACT_APP_ADDRESS_TOKEN_CONTRACT}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {process.env.REACT_APP_ADDRESS_TOKEN_CONTRACT}
          </TextContractAddress>
        </TextWelcomeDescription>
        <SectionButtonGroup01>
          <SectionBuy>
            <ButtonBuy>Buy $WILLO</ButtonBuy>
            <TextBuy>Buy Tax: 0%</TextBuy>
            <TextHolders>TOTAL $WILLO HOLDERS / 0</TextHolders>
          </SectionBuy>
          <SectionSell>
            <ButtonWhitepaper>Whitepaper</ButtonWhitepaper>
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
              <ButtonViewExplorer>View Explorer</ButtonViewExplorer>
            </SectionExplorer>
          </SectionHouse>
        </SectionBar>
      </SectionSeparate>
      <SectionImage>
        <img src={imgDog01} width={"100%"} height={"100%"} alt="dog" />
      </SectionImage>
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
`;

const SectionInfomation = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

const TextWelcome = styled.span`
  color: #fff;

  font-family: Bubblegum Sans;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 40px;
`;

const TextWelcomeSmall = styled.span`
  color: #fff;
  font-family: Bubblegum Sans;
  font-size: 38.924px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TextWelcomeDescription = styled(Box)`
  color: #fff;

  font-family: Bubblegum Sans;
  font-size: 23.354px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 40px;
  @media (max-width: 1440px) {
    margin-top: 20px;
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
`;

const SectionSeparate = styled(Box)`
  display: flex;
  height: 100%;
  padding: 100px 70px 150px 220px;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 100px 0px 150px 80px;
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

const SectionImage = styled(Box)`
  display: flex;
  width: 650px;
  height: 650px;

  @media (max-width: 1440px) {
    width: 500px;
    height: 500px;
  }
`;

const SectionButtonGroup01 = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 1440px) {
    margin-top: 32px;
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
`;

const SectionBuy = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
`;

const SectionSell = styled(Box)`
  display: flex;
  flex-direction: column;
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

export default Home;
