import { useState } from "react";
import { Pressable, View, StyleSheet } from "react-native";

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export function Collapsible({ title, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setOpen(!open)}>
        {title}
      </Pressable>

      {open && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  content: {
    marginTop: 8,
  },
});
