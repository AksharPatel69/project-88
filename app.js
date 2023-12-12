import React from react-Naative
import {img,
        Text,
          }

 render () {
    if (!this.state.fontsLoaded) {
        return <AppLoading />;
    } else{
        return (
            <View 
            style={{
                flex:1,
                justifyContent: "center",
                alignItems: "center"
            }}>
               <Button
               title="Sign in with Google"
               onPress{() => this.signInWithGoogleAsync()}></Button> 
               </View>

               
        )
    }
 } 