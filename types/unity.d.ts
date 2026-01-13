declare module '@azesmway/react-native-unity' {
  import { Component } from 'react';
    import { ViewProps } from 'react-native';

  export interface UnityViewProps extends ViewProps {
    onUnityMessage?: (handler: any) => void;
    onMessage?: (handler: any) => void;
  }

  export default class UnityView extends Component<UnityViewProps> {
    postMessage(gameObject: string, methodName: string, message: string): void;
    resume(): void;
    pause(): void;
  }
}