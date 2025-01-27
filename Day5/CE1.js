
import React, { Component } from 'react';

class ErrorHandledList extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught: ", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong while rendering the list.</h1>;
    }

    return (
      <div>
        <h2>Fruit List</h2>
        <ul>
          {["Apple", "Banana", "Cherry", "Durian", "Elderberry"].map((fruit) => (
            <li>{fruit}</li>  {/* Intentionally missing "key" prop to cause a warning */}
          ))}
        </ul>
      </div>
    );
  }
}

export default ErrorHandledList;
