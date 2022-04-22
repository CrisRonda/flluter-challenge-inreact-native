import { createStackNavigator } from '@react-navigation/stack';
import App from '../screens/Travel';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/Tabs/Main';
import MyTabBar from '../components/CustomTab';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="MainScreen"
                children={() => <Main color="#18E3C3" name="Herd" />}
                options={{ title: 'Herd' }}
            />
            <Tab.Screen
                name="OtherScreen"
                children={() => <Main color="#354B46" name="Cows" />}
                options={{ title: 'Cows' }}
            />
            <Tab.Screen
                name="Other1Screen"
                children={() => <Main color="#97B0AA" name="Heiffers" />}
                options={{ title: 'Heiffers' }}
            />
            <Tab.Screen
                name="Menu"
                children={() => <Main color="#47B5FF" name="Menu" />}
                options={{ title: 'Menu' }}
            />
        </Tab.Navigator>
    );
};
const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="TravelScreen" component={App} />
            <Stack.Screen name="MainTabs" component={MyTabs} />
        </Stack.Navigator>
    );
};

export default MainStack;
