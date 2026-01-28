import { Text, TextProps } from "react-native";

export function ThemedText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        { color: "#111" },
        props.style,
      ]}
    />
  );
}
