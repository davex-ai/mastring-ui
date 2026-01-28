import { Linking, Pressable, Text } from "react-native";

type Props = {
  href: string;
  children: React.ReactNode;
};

export function ExternalLink({ href, children }: Props) {
  return (
    <Pressable onPress={() => Linking.openURL(href)}>
      <Text style={{ color: "#0a7ea4" }}>{children}</Text>
    </Pressable>
  );
}
