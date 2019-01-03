import React from 'react';
import get from 'lodash/get';

class Template extends React.Component {
  render() {
    const { children } = this.props
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        {children()}
      </div>
    )
  }
}

export default Template
