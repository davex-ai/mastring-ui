import { Ionicons } from "@expo/vector-icons";
import { TextStyle } from "react-native";

type Props = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color?: string;
  size?: number;
  style?: TextStyle;
};

export function IconSymbol({
  name,
  color = "#000",
  size = 24,
  style,
}: Props) {
  return <Ionicons name={name} size={size} color={color} style={style} />;
}
