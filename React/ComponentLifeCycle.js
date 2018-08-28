/* Component Life Cycles */

componentWillMount() // Immediately before initial rendering
componentDidMount() // Immediately after initial rendering
componentWillReceiveProps() // When component receives new props
shouldComponentUpdate() // Before rendering, after receiving new props or state
// you can return false to prevent rendering
componentWillUpdate()  // Before Rendering, after receving new props or state
componentDidUpdate() // After component's updates are flushed to DOM
componentWillUnmount() // Immediately before removing component from DOM
