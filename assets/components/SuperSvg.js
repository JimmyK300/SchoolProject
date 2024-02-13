import { Svg, Path } from "react-native-svg";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export default function SuperSvg(props) {
  return (
    <Svg height={props.height} width={props.width} viewBox={props.viewBox}>
      <Path fill={props.color} d={props.path} />
    </Svg>
  );
}
