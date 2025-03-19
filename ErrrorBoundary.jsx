import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught by ErrorBoundary:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h1>Oops! Something went wrong. 🚨</h1>
                    <p>Page not found or an unexpected error occurred.</p>
                    <a href="/">Go back to Home</a>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
