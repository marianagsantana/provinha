import { Image } from "expo-image";

export default function LogoApp() {
  return (
    <Image
      source={require("../../assets/Mlogo.png")}
      style={{ width: 500, height: 500 }}
      contentFit="contain"
    />
  );
}
