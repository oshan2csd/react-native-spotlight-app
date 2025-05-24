import { Redirect } from 'expo-router';


export default function Index() {
  //takes user to the entry point of the app
  //send user to the tabs folder
  return <Redirect href="../(tabs)" />;
}