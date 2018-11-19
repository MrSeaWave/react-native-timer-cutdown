# react-native-timer-cutdown
react-native-timer-cutdown

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
|until|number|60|timer number,unix:s|
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

