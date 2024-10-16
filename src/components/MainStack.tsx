import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { NoteList } from "./NoteList";
import { AddNote } from "./AddNote";
import { ViewNote } from "./ViewNote";

const StackNavigator = stackNavigatorFactory();

export function MainStack() {
    console.log("Rendering MainStack");
    return (
        <BaseNavigationContainer>
            {console.log("Rendering BaseNavigationContainer")}
            <StackNavigator.Navigator
                initialRouteName="NoteList"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#65adf1",
                    },
                    headerTintColor: "white",
                }}
            >
                {console.log("Rendering StackNavigator.Navigator")}
                <StackNavigator.Screen
                    name="NoteList"
                    component={NoteList}
                    options={{ title: "Notes" }}
                />
                <StackNavigator.Screen
                    name="AddNote"
                    component={AddNote}
                    options={{ title: "Add Note" }}
                />
                <StackNavigator.Screen
                    name="ViewNote"
                    component={ViewNote}
                    options={{ title: "View Note" }}
                />
            </StackNavigator.Navigator>
        </BaseNavigationContainer>
    );
}