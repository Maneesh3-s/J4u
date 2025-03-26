import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const landingPage = 'landingPage';

export type RootStackParamList = {
  landingPage: undefined;
};

export type landingPageDeskNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'landingPage'
>;
