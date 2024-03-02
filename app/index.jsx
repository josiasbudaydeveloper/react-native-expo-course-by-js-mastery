import { View, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";

import { COLORS, icons, images, SIZES } from '@/constants';
import { 
  Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome
} from '@/components'

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.lightWhite,
    }}>
      <Stack.Screen options={{ 
        headerStyle: {backgroundColor: COLORS.lightWhite },
        headerTintColor: 'black',
        navigationBarColor: COLORS.white,
        // headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerLeft: () => {
          return <ScreenHeaderBtn 
            iconURL={icons.menu} dimension="60%"
            />
        },
        headerRight: () => {
          return <ScreenHeaderBtn 
            iconURL={images.profile} dimension="100%" 
            />
        },
        headerTitle: ''
      }}/>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{flex: 1, padding: SIZES.medium}}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}