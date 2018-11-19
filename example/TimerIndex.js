import React, { Component, createRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import TimerCutDown from "react-native-timer-cutdown";

class TimerIndex extends Component {
  constructor(props) {
    super(props);
    this.timerCutDown = createRef();
  }
  stopCutDownTimeOnChange = () => {
    console.log("🔚");
  };
  startCutDown = () => {
    console.log("this.timerCutDown ", this.timerCutDown);
    const { current = {} } = this.timerCutDown;
    current.startCutDownTime && current.startCutDownTime();
  };
  restartCutDown = () => {
    console.log("this.restartCutDownTime ", this.timerCutDown);
    const { current = {} } = this.timerCutDown;
    current.restartCutDownTime && current.restartCutDownTime();
  };
  closeCutDown = () => {
    console.log("this.closeCutDown ", this.timerCutDown);
    const { current = {} } = this.timerCutDown;
    current.stopCutDownTime && current.stopCutDownTime();
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ccf"
        }}
      >
        <View style={{ width: 200, height: 300 }}>
          <TimerCutDown
            ref={this.timerCutDown}
            until={30}
            afterEndOnChange={this.stopCutDownTimeOnChange}
            styles={{ contentStyle: { backgroundColor: "#fcc" },wrapperStyle:{backgroundColor:'#ffc'}}}
          />
        </View>
        <TouchableOpacity
          onPress={this.startCutDown}
          style={{ width: 100, height: 20, backgroundColor: "#769900" }}
        >
          <Text>start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.closeCutDown}
          style={{ width: 100, height: 20, backgroundColor: "#769900" }}
        >
          <Text>close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.restartCutDown}
          style={{ width: 100, height: 20, backgroundColor: "#769900" }}
        >
          <Text>restart</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TimerIndex;
