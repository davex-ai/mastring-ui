import { ScrollView, View, StyleSheet } from "react-native";

type Props = {
  headerImage?: React.ReactNode;
  children: React.ReactNode;
};

export default function ParallaxScrollView({
  headerImage,
  children,
}: Props) {
  return (
    <ScrollView>
      {headerImage && (
        <View style={styles.header}>{headerImage}</View>
      )}
      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
});
