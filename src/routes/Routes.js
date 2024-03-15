import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import Inicio from '../screens/Inicio';
import Umbanda from '../screens/Umbanda';
import Candomble from '../screens/Candomble';
import Informações from '../screens/Informações';
import Info1 from '../screens/Info1';
import Info2 from '../screens/Info2';

const TabBottom = createBottomTabNavigator();

function TabBottomRoutes() {
  return (
    <TabBottom.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarActiveTintColor: "#ff0000",
            tabBarInactiveTintColor: "#000000",

        }}>
      <TabBottom.Screen name="Inicio" component={Inicio}
        options={{
            headerShown: false,
            tabBarIcon:({focused, size, color}) => {
                if (focused){
                    return( <Ionicons
                         size={size}
                         color={color}
                         name={'home'}/>);
                }
                return( <Ionicons 
                    size={size}
                    color={color}
                    name={'home-outline'}/> );
            } 
        }} />
      <TabBottom.Screen name="Umbanda" component={Umbanda} 
       options={{
            headerShown: false,
            tabBarIcon:({focused, size, color}) => {
                if (focused){
                    return( <Ionicons
                         size={size}
                         color={color}
                         name={'book'}/>);
                }
                return( <Ionicons 
                    size={size}
                    color={color}
                    name={'book-outline'}/> );
            } 
        }} />
      <TabBottom.Screen name="Candomble" component={Candomble} 
        options={{
            headerShown: false,
            tabBarIcon:({focused, size, color}) => {
                if (focused){
                    return( <Ionicons
                         size={size}
                         color={color}
                         name={'bookmark'}/>);
                }
                return( <Ionicons 
                    size={size}
                    color={color}
                    name={'bookmark-outline'}/> );
            } 
        }} />
    </TabBottom.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
            name="Inicio"
            component={TabBottomRoutes}
            options={{
                drawerLabel: 'Inicio',
                drawerIcon: ({size, color}) => (
                    <Ionicons size={size} color={color} name='home'/>
                )
            }} />
             <Drawer.Screen
            name="Informações"
            component={StackRoutes}
            options={{
                drawerLabel: 'Informações',
                drawerIcon: ({size, color}) => (
                    <Ionicons size={size} color={color} name='archive'/>
                )
            }} />
        </Drawer.Navigator>
    )
}

const Stack = createNativeStackNavigator();

function StackRoutes() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name="Informações" component={Informações}/>
            <Stack.Screen name="Info1" component={Info1}/>
            <Stack.Screen name="Info2" component={Info2}/>
        </Stack.Navigator>

    );
}

