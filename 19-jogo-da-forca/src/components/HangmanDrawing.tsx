import styled from "styled-components";

const Base = styled.div`
  height: 10px;
  width: 250px;
  margin-left: 80px;
  background: black;
`;

const VerticalLine = styled.div`
  height: 250px;
  width: 10px;
  margin-left: 150px;
  background: black;
`;

const HorizontalLine = styled.div`
  height: 10px;
  width: 150px;
  background: black;
  position: absolute;
  top: 0;
  right: 70px;
`;

const VerticalLineSmall = styled.div`
  height: 40px;
  width: 10px;
  margin-left: 150px;
  background: black;
  margin-left: 150px;
  position: absolute;
  top: 0;
  right: 70px;
`;

const Head = styled.div`
  height: 30px;
  width: 30px;
  border: 8px solid black;
  border-radius: 50%;
  position: absolute;
  top: 35px;
  right: 52px;
`;

const Body = styled.div`
  height: 80px;
  width: 10px;
  background:black;
  position: absolute;
  top: 75px;
  right: 70px;
`;

const RightArm = styled.div`
  height: 10px;
  width: 50px;
  background: black;
  position: absolute;
  top: 90px;
  right: 30px;
  rotate: -30deg;
`;
const LeftArm = styled.div`
  height: 10px;
  width: 50px;
  background: black;
  position: absolute;
  top: 90px;
  right: 70px;
  rotate: 30deg;
`;

const RightLeg = styled.div`
  height: 10px;
  width: 50px;
  background: black;
  position: absolute;
  top: 163px;
  right: 33px;
  rotate: 45deg;
`;

const LeftLeg = styled.div`
  height: 10px;
  width: 50px;
  background: black;
  position: absolute;
  top: 163px;
  right: 69px;
  rotate: -45deg;
`;
export default function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      <Head />
      <Body />
      <RightArm />
      <LeftArm />
      <RightLeg />
      <LeftLeg />
      <VerticalLineSmall />
      <HorizontalLine />
      <VerticalLine />
      <Base />
    </div>
  );
}
