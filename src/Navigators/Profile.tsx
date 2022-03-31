import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ProfileContainer } from '@/Containers'

const Tab = createBottomTabNavigator()

// @refresh reset
const ProfileNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileContainer}
                options={{
                    tabBarIconStyle: { display: 'none' },
                    tabBarLabelPosition: 'beside-icon',
                }}
            />
        </Tab.Navigator>
    )
}

export default ProfileNavigator
