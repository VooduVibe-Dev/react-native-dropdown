import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  overlay: {
    position: 'absolute',
    width: window.width,
    height: window.height
  }
});

class Overlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pageX, pageY, show, onPress } = this.props;

    if (!show) {
      return null
    }

    return (
      <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
        <View style={[styles.overlay, { top: -pageY, left: -pageX }]}/>
      </TouchableWithoutFeedback>
    );
  }
}

Overlay.propTypes = {
  pageX: PropTypes.number,
  pageY: PropTypes.number,
  show: PropTypes.bool
};

Overlay.defaultProps = {
  pageX: 0,
  pageY: 0,
  show: false
};

export default Overlay;
