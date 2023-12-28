import { Box } from "@mui/material";
import styled from "styled-components";
import backInside01 from "../../assets/images/background/backInside01.png";
import backInside02 from "../../assets/images/background/backInside02.png";
import Countdown from "react-countdown";
import CountdownFairLaunch from "../../components/Countdown/FairLaunch";
import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import copy from "copy-to-clipboard";
import { HiClipboard, HiClipboardCheck } from "react-icons/hi";
import { Connection, PublicKey } from "@solana/web3.js";
import { dataContacts } from "../../data/contacts";

const Firesale = () => {
  const [progress, setProgress] = useState(0);
  const [flagCopiedAddress, setFlagCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    setFlagCopiedAddress(true);
    copy(process.env.REACT_APP_ADDRESS_FIRESALE);
    setTimeout(() => {
      setFlagCopiedAddress(false);
    }, 1000);
  };

  const [balance, setBalance] = useState(0);
  const walletAddress = process.env.REACT_APP_ADDRESS_FIRESALE;
  const connection = new Connection(process.env.REACT_APP_URL_RPC_SOLANA);

  // const connection = new Connection("https://api.devnet.solana.com");

  useEffect(() => {
    // Fetch initial balance
    connection
      .getBalance(new PublicKey(walletAddress))
      .then((initialBalance) => {
        console.log("initialBalance:", initialBalance);
        setBalance(initialBalance);
        setProgress((initialBalance / 3000) * 100);
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
      });

    // Subscribe to balance updates
    connection.onAccountChange(
      new PublicKey(walletAddress),
      (accountInfo, context) => {
        setBalance(accountInfo.lamports);
        setProgress((accountInfo.lamports / 3000) * 100);
      }
    );

    // return () => {
    //   // Unsubscribe when component unmounts
    //   subscription.unsubscribe();
    // };
  }, [walletAddress, connection]);

  return (
    <StyledComponent>
      <SectionFairLaunch>
        <TextTitle>Willow Firesale Is Live</TextTitle>
        <SectionCountdown>
          <Countdown
            now={() => Date.now()}
            date={new Date("2023-12-31").getTime()}
            renderer={CountdownFairLaunch}
          />
        </SectionCountdown>
        <SectionSaleProgress>
          <CustomProgress
            variant="determinate"
            value={progress}
          ></CustomProgress>
          <SectionTextProgress>
            <TextSale>Raised: {balance} SOL</TextSale>
            <TextSale>Softcap: 120 SOL</TextSale>
          </SectionTextProgress>
        </SectionSaleProgress>
        <SectionDetail>
          <TextDeatil width={"100%"} textAlign={"center"}>
            {/* 1 WILL = 0.000000000000333 SOL */}1 WILL = Coming soon ...
          </TextDeatil>
        </SectionDetail>
        <SectionDetail>
          <TextDeatil width={"100%"} textAlign={"center"}>
            MIN: 0.1 SOL{"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}MAX: 100 SOL
          </TextDeatil>
        </SectionDetail>
        <SectionDetail flexDirection={"column"}>
          <TextDeatil>Send SOL to :</TextDeatil>
          <TextDeatil>
            <span>{process.env.REACT_APP_ADDRESS_FIRESALE}</span>
            {/* Sale address coming soon... */}
            <div style={{ display: "inline-block" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div />
                <IconCopyAddress
                  onClick={() => {
                    handleCopyAddress();
                  }}
                >
                  {!flagCopiedAddress ? <HiClipboard /> : <HiClipboardCheck />}
                </IconCopyAddress>
              </div>
            </div>
          </TextDeatil>
        </SectionDetail>
        <TextDetailBottom>
          Your purchased Willow Token will be proportionally distributed based
          on the SOL raised during the Firesale, constituting 30% of the total
          Willow Token supply. Your acquired WILL Token will be airdropped to
          the SOL wallet address you used during the Firesale.
        </TextDetailBottom>
      </SectionFairLaunch>
      <ButtonViewExplorer
        onClick={() => {
          // window.open(
          //   `https://solscan.io/account/${process.env.REACT_APP_ADDRESS_FIRESALE}`
          // );
          window.open(`https://solscan.io/account`);
        }}
      >
        Transaction History
      </ButtonViewExplorer>
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
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const SectionFairLaunch = styled(Box)`
  display: flex;
  width: 390px;
  background-image: url(${backInside01});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 50px 23px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;

  margin-top: 70px;

  @media (max-width: 900px) {
    margin-top: 50px;
  }
  @media (max-width: 430px) {
    width: 320px;
    margin-top: 30px;
    padding: 50px 20px;
    background-image: url(${backInside02});
  }

  @media (max-width: 370px) {
    width: 280px;
  }
`;

const TextTitle = styled(Box)`
  color: #fff;

  text-align: center;
  font-family: Play;
  font-size: 27.681px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    font-size: 23px;
  }
`;

const SectionCountdown = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 18px;

  @media (max-width: 900px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    margin-top: 16px;
  }
`;

const SectionSaleProgress = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;

  @media (max-width: 900px) {
    font-size: 40px;
  }
  @media (max-width: 430px) {
    margin-top: 30px;
  }
`;

const CustomProgress = styled(LinearProgress)`
  display: flex;
  width: 100%;
  color: white;
  height: 8px !important;
  border-radius: 8px !important;
  background-color: white !important;

  .MuiLinearProgress-bar {
    background-color: #243dfe;
    border-radius: 8px !important;
  }
`;

const SectionTextProgress = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const TextSale = styled(Box)`
  color: #fff;

  font-family: Play;
  font-size: 13.84px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 12px;
  }
  @media (max-width: 430px) {
    font-size: 11px;
  }
`;

const SectionDetail = styled(Box)`
  display: flex;
  width: 100%;
  padding-top: 20px;
  box-sizing: border-box;
  border-top: 1px solid #5e9efe;
  margin-top: 20px;

  @media (max-width: 900px) {
    padding-top: 18px;
    margin-top: 18px;
  }
  @media (max-width: 430px) {
    padding-top: 15px;
    margin-top: 15px;
  }
`;

const TextDeatil = styled(Box)`
  word-break: break-all;
  color: #fff;

  font-family: Play;
  font-size: 18.454px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 17px;
  }
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;

const IconCopyAddress = styled.span`
  color: #fff;
  font-size: 25px;
  margin-left: 10px;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  margin-top: -15px;

  &:hover {
    filter: drop-shadow(0px 0px 2px white);
  }
  @media (max-width: 900px) {
    margin-top: -13px;
    font-size: 23px;
  }
  @media (max-width: 430px) {
    font-size: 21px;
    margin-top: -12px;
  }
`;

const TextDetailBottom = styled(Box)`
  display: flex;
  margin-top: 35px;
  /* margin-bottom: 20px; */
  color: #fff;
  font-family: Play;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 14px;
    margin-top: 25px;
  }
  @media (max-width: 430px) {
    font-size: 13px;
    margin-top: 20px;
  }
`;

const ButtonViewExplorer = styled(Box)`
  display: flex;
  width: 390px;
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

  margin-top: 30px;
  margin-bottom: 30px;
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
  @media (max-width: 430px) {
    width: 320px;
    height: 52px;
    font-size: 14px;
  }
  @media (max-width: 370px) {
    width: 280px;
  }
`;

const SectionContacts = styled(Box)`
  display: none;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 900px) {
    display: flex;
    margin-bottom: 50px;
  }
  @media (max-width: 430px) {
    margin-bottom: 30px;
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

export default Firesale;
