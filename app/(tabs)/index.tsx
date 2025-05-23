import { Link } from "expo-router";
import { View } from "react-native";
import { styles } from "../../styles/auth.styles.js";


export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/notifications">Visit Notifications page</Link>
    </View>
  );
}
  