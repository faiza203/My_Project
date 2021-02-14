import { createStackNavigator } from "react-navigation-stack";
import Home from "../components/home";
import ReviewDetails from "../components/reviewDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "❤ Home",
      headerTintColor: "red",
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#150e0e",
    headerStyle: {
      backgroundColor: "#eae9e9",
      borderBottomWidth: "0",
    },
  },
});

export default HomeStack;
