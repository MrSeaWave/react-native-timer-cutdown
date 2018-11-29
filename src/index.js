import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { sprintf } from 'sprintf-js';

class TimerCutDown extends Component {
  static propTypes = {
    until: PropTypes.number.isRequired,
    afterEndOnChange: PropTypes.func,
    styles: PropTypes.shape({
      labelText: PropTypes.object,
      contentStyle: PropTypes.object,
      wrapperStyle: PropTypes.object
    })
  };
  static defaultProps = {
    until: 60, //2 * 60 * 60 + 3 // s
    styles: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      ...this._getPropsData(props)
    };
  }

  _getPropsData = props => {
    return { until: Math.max(0, props.until) };
  };

  _cutDownFun = () => {
    if (this.state.until === 0) {
      this._afterEnd();
    } else {
      this.setState(preState => {
        return {
          until: preState.until - 1
        };
      });
    }
  };

  startCutDownTime = () => {
    const { until } = this.state;
    // console.log('%c *******start********', 'color:red', this.state.until);
    if (until <= 0) {
      return;
    }
    this.stopCutDownTime();
    this.cutInterval = setInterval(this._cutDownFun, 1000);
  };

  restartCutDownTime = () => {
    this.stopCutDownTime();
    this.setState(
      (preState, props) => ({ until: Math.max(0, props.until) }),
      this.startCutDownTime
    );
  };

  stopCutDownTime = () => {
    // console.log('%c *******Stop********', 'color:red');
    this.cutInterval && clearTimeout(this.cutInterval);
  };

  _afterEnd = () => {
    const { afterEndOnChange } = this.props;
    // console.log('%c *******END*******', 'color:red');
    this.stopCutDownTime();
    typeof afterEndOnChange === 'function' && afterEndOnChange();
  };

  componentDidMount() {
    this.startCutDownTime();
  }

  componentWillReceiveProps(nextProps) {
    const { until } = this.props;
    const { until: nextUntil } = nextProps;
    if (until !== nextUntil) {
      // console.log('%c *******ReceiveProps********', 'color:red');
      this.stopCutDownTime();
      this.setState({ ...this._getPropsData(nextProps) });
    }
  }

  componentWillUnmount() {
    // console.log('%c *******Unmount********', 'color:red');
    this.stopCutDownTime();
  }

  getTimeData = until => {
    return {
      seconds: until % 60,
      minutes: parseInt(until / 60, 10) % 60,
      hours: parseInt(until / (60 * 60), 10) % 24,
      days: parseInt(until / (60 * 60 * 24), 10)
    };
  };

  formatTime = until => {
    const { seconds, minutes, hours, days } = this.getTimeData(until);
    return sprintf('%02d:%02d:%02d:%02d', days, hours, minutes, seconds).split(':');
  };

  _renderTimeText = val => {
    const {
      styles: { labelText }
    } = this.props;
    return <Text style={[styles.text, labelText]}>{val}</Text>;
  };

  _renderContent = () => {
    const { until } = this.state;
    const {
      styles: { contentStyle }
    } = this.props;
    const newTime = this.formatTime(until);
    return (
      <View style={[styles.content, contentStyle]}>
        {this._renderTimeText(newTime[0] + ':')}
        {this._renderTimeText(newTime[1] + ':')}
        {this._renderTimeText(newTime[2] + ':')}
        {this._renderTimeText(newTime[3])}
      </View>
    );
  };

  _footerContent = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ until: this.state.until }, this.restartCutDownTime);
          }}
          style={{ width: 200, height: 30, backgroundColor: 'green' }}
        >
          <Text>reStart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.stopCutDownTime}
          style={{ width: 200, height: 30, backgroundColor: 'green' }}
        >
          <Text>close</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {
      styles: { wrapperStyle }
    } = this.props;
    return <View style={[styles.wrapper, wrapperStyle]}>{this._renderContent()}</View>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
});

export default TimerCutDown;
