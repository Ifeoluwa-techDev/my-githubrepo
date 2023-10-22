import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1 className="error-header">Oops! You hit a roadblock &#128577;</h1>;
          <br />

          <button className="error-btnn"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Go back
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
