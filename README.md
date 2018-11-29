# react-native-timer-cutdown
react-native-timer-cutdown

## Introduce

![2018-11-19 16 34 52](https://user-images.githubusercontent.com/21967852/48695102-2e4dfa80-ec19-11e8-9999-0a4abf84eb4f.gif)

## Installation
```
npm i react-native-timer-cutdown --save
```

## Basic Usage
```jsx
import TimerCutDown from "react-native-timer-cutdown";


render(){
    return(
        <TimerCutDown />
    )
}
```

## Configuration
### Properties:
| Property Name | Type | Default | Description |
|:---:|:---:|:---:|:---:|
|until|number|60|timer number (>=0),unit:s|
|styles|object|{}|see source code|
|afterEndOnChange|function|---|when time end,callback|
### Functions
| Function Name | Return Type | Parameters | Description |
|:---:|:---:|:---:|:---:|
|startCutDownTime|void|none|start timer|
|stopCutDownTime|void|none|stop timer or pause timer|
|restartCutDownTime|void|none|restartCutDownTime timer|
|getTimeData|number|object|`until` --->`days,hours,minutes,seconds`|
|formatTime|number|array|`until` --->`days,hours,minutes,seconds`|

