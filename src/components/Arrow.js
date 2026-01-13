import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const Arrow = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={16} cy={16} r={16} fill="#ECF0F4" />
    <Path
      d="M17.7777 19.2L14.2222 15.6444L17.7777 12.0889"
      stroke="#181C2E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Arrow;
