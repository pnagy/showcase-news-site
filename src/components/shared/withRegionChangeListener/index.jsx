import React from 'react'

const withRegionChangeListener = WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      if (this.props.load) {
        this.props.load()
      }
    }

    componentDidUpdate(prevProps) {
      if (this.props.region.id !== prevProps.region.id) {
        if (this.props.load) {
          this.props.load()
        }
      }
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withRegionChangeListener
