import { Box } from "@mui/material";
import styled from "styled-components";
import imgDog01 from "../../assets/images/background/dog_shadow01.png";
import imgButtonBuy from "../../assets/images/background/buttonBuy.svg";
import imgButtonWhitepaper from "../../assets/images/background/buttonWhitepaper.svg";
import imgButtonWhite from "../../assets/images/background/buttonWhite.svg";

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
          <ButtonBuy>Buy $WILLO</ButtonBuy>
          <ButtonWhitepaper>Whitepaper</ButtonWhitepaper>
        </SectionButtonGroup01>
      </SectionInfomation>
      <SectionSeparate>1</SectionSeparate>
      <SectionImage>
        <img src={imgDog01} width={"100%"} height={"100%"} alt="dog" />
      </SectionImage>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
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

  margin-top: 30px;
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
  margin: 100px 100px;
`;

const SectionImage = styled(Box)`
  display: flex;
  width: 700px;
  aspect-ratio: 1;

  @media (max-width: 1440px) {
    width: 550px;
  }
`;

const SectionButtonGroup01 = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 45px;
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

  margin-left: 60px;
`;

export default Home;
