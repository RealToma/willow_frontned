import { Box } from "@mui/material";
import styled from "styled-components";

const CountdownFairLaunch = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <SectionSaleEnd>Sale Ended</SectionSaleEnd>;
  } else {
    return (
      <StyledComponent>
        <SectionEachCount>
          {days}
          <TextEachCount>Days</TextEachCount>
        </SectionEachCount>
        <SectionEachCount>
          {hours}
          <TextEachCount>Hours</TextEachCount>
        </SectionEachCount>
        <SectionEachCount>
          {minutes}
          <TextEachCount>Minutes</TextEachCount>
        </SectionEachCount>
        <SectionEachCount>
          {seconds}
          <TextEachCount>Seconds</TextEachCount>
        </SectionEachCount>
      </StyledComponent>
    );
  }
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const SectionSaleEnd = styled(Box)`
  display: flex;
  width: 100%;
  height: 60px;
  border-radius: 12px;
  border: 1px solid #5e9efe;
  justify-content: center;
  align-items: center;
  color: #fff;

  text-align: center;
  font-family: Play;
  font-size: 27.681px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SectionEachCount = styled(Box)`
  display: flex;
  position: relative;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #5e9efe;
  color: #fff;
  text-align: center;
  font-family: Play;
  font-size: 27.681px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 900px) {
    width: 50px;
    height: 50px;
    font-size: 25px;
    border-radius: 7px;
  }
  @media (max-width: 430px) {
    width: 45px;
    height: 45px;
    font-size: 22px;
    border-radius: 6px;
  }
`;

const TextEachCount = styled(Box)`
  display: flex;
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;

  text-align: center;
  font-family: Play;
  font-size: 13.84px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 12px;
    bottom: -22px;
  }
  @media (max-width: 430px) {
    font-size: 11px;
    bottom: -20px;
  }
`;

export default CountdownFairLaunch;
