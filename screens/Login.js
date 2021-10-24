import React,{Component} from "react";
import {Animated, Dimensions, Text, View,Image, TextInput, TouchableOpacity, Easing,CheckBox, Alert, ScrollView} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

import { styles } from "../styles/style";
const {height} = Dimensions.get ("screen").height;
export default class Login extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            isSelected : false,
            UserName : '',
            Password : '',
            ErrorText : '',
            Data :[]
        }
        this.navigation = props.navigation;
    }
    state = {
        screenAnimation: new Animated.Value(Number(height)),
        inputAnimation: new Animated.Value(0),
    };
    AnimatedContainer = () =>{
        Animated.timing(this.state.screenAnimation,{
            toValue: height/3,
            duration: 1500,
            easing: Easing.elastic(1.3),
            
        }).start();
    };
    
    AnimatedInput = () =>{
        Animated.timing(this.state.inputAnimation, {
            toValue: -height / 5,
            duration: 800,
        }).start();
    };
    
    reverseAnimateInput = () => {
        Animated.timing(this.state.inputAnimation, {
            toValue: 0,
            duration: 800,
        }).start();
    }
    
    //componentDidMount(){  
        //   this.AnimatedContainer();
        //};
        
        AnimatedContainer = {   
            height: this.state.screenAnimation,
        };
        AnimatedInput = {
            Transform : [
                {
                    translateY: this.state.inputAnimation,
                }
                
            ]
        };
        componentDidMount()
        {
            fetch("https://charlie2302.github.io/User.json")
            .then(Response =>Response.json())
            .then(json => this.setState({Data : json.User}))
            .catch(error =>console.log(error))
        }
        onSubmit()
        {
            if(this.state.UserName !="" && this.state.Password != "")
            {
                var dem = 0;
            this.state.Data.forEach(e => {
                if(e.UserName === this.state.UserName && this.state.Password === e.Password)
                { 
                    dem++;
                }
            });
            if(dem > 0)
            {
                this.navigation.navigate('TabScreen')
            }
            else this.setState({ErrorText : "Tài khoản hoặc mật khẩu không chính xác !!!"})
        }
    }
    
    render(){
        const {UserName,Password}= this.state;
         return (
            <Animated.View style = {styles.container}>
                <LinearGradient colors ={["#ff00cc","#333399"]} style = {styles.container,this.AnimatedInput }>
                    <Image 
                        source = {require("../assets/logo.png")}
                        style = {styles.logo}
                    />
                </LinearGradient>
                
                < View 
                    style = {[
                     styles.centerAlign,
                      {
                        marginTop:2,
                        backgroundColor:"rgba(200,200,200,0.9)",
                        height: height,

                     }
                    ]}>
                    <Animated.View style = {styles.inputContainer} >
                        <Text style = {{fontSize:20, fontWeight: "bold", textAlign: "center"}}
                        >
                            SIGN IN
                        </Text>
                        <View style = {{marginTop: 30, marginBottom: 10 }}>
                            <TextInput 
                                placeholder = "UserName" 
                                style = {styles.input}
                                onChangeText = {(text)=>{
                                    this.setState({UserName : text})
                                    this.setState({ErrorText : ''})
                                }}
                                value = {UserName}
                            />
                            <TextInput 
                                secureTextEntry={true}
                                placeholder = "Password" 
                                style = {styles.input}
                                onChangeText = {(text)=>{
                                    this.setState({Password : text})
                                    this.setState({ErrorText : ''})
                                }}
                                value = {Password}
                            />
                            {this.state.ErrorText != "" &&<Text style ={{color : 'red'}}>{this.state.ErrorText}</Text>}
                        </View>
                        < View style = {{flexDirection: "row",justifyContent :'space-between',alignItems : 'center'}}>
                               <View style = {{flexDirection : 'row',alignItems : 'center'}}>
                                    <CheckBox
                                            value={this.state.isSelected}
                                            onValueChange={(value)=>this.setState({isSelected : value})}
                                    />
                                    <Text style = {{marginLeft : 10,fontSize : 13}}>Remember </Text>
                                </View>
                            <View
                                    style= {{
                                        flex: 0.5,
                                        alignItems:"flex-end",
                                    }}
                             >
                                <TouchableOpacity style = {{minWidth : 50}}>
                                     <Text style = {{color: "#c08",fontSize : 13}}>Forget Password</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress = {this.onSubmit.bind(this)} style = {{justifyContent : 'center',alignItems : 'center', marginTop: 20}}>
                                <LinearGradient
                                    style = {{minHeight : 50,minWidth : 80,padding : 12,borderRadius : 15,justifyContent : 'center',alignItems : 'center' }}
                                    colors = {["#333399","#d6d6ee"]}
                                >

                                    <Text 
                                        style = {{
                                            color: "#fff",
                                            fontWeight: "bold",
                                            fontSize:20,
                                        }}
                                    >
                                        Sign In
                                    </Text>
                                </LinearGradient>     
                                
                            </TouchableOpacity>

                        </View>
                        <View 
                            style = {{
                                alignItems:"stretch",
                                marginVertical:10,
                                flexDirection:"row",
                            }}
                        >
                            <Text style = {{color:"#888"}}>Still Not Connected?</Text>
                            < TouchableOpacity style = {{ marginLeft: 10}}>
                                <Text>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </View>      
            </Animated.View>
        );
    }
}