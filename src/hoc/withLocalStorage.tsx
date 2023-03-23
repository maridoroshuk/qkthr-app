import React, { Component, ComponentType } from 'react';

interface IWithLocalStorageProps {
  localStorageKey: string;
}

interface IWithLocalStorageState {
  cachedValue: string;
}

export function withLocalStorage<T extends object>(WrappedComponent: ComponentType<T>) {
  return class extends Component<T & IWithLocalStorageProps, IWithLocalStorageState> {
    constructor(props: T & IWithLocalStorageProps) {
      super(props);
      this.state = {
        cachedValue: localStorage.getItem(props.localStorageKey) || '',
      };
    }

    componentWillUnmount() {
      const { cachedValue } = this.state;
      localStorage.setItem(this.props.localStorageKey, cachedValue);
    }

    handleStorageSave = (value: string) => {
      this.setState({ cachedValue: value });
    };

    render() {
      const { cachedValue } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          cachedValue={cachedValue}
          onStorageSave={this.handleStorageSave}
        />
      );
    }
  };
}

export default withLocalStorage;
