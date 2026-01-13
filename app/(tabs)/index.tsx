import UnityView from '@azesmway/react-native-unity';
import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UnityScreen() {
  const unityRef = useRef<any>(null);

  const sendMessageToUnity = () => {
    if (unityRef.current) {
      // Arguments: (GameObject, FunctionName, Message)
      console.log('Send to Unity:');
      unityRef.current.postMessage('ReactBridge', 'ReceiveMessageFromRN', 'ToggleHotpost');
    }
  };

  return (
    <View style={styles.container}>
      {/* The Unity View */}
      <UnityView
        ref={unityRef}
        style={{ flex: 1 }}
        onUnityMessage={(result) => {
          console.log('Received from Unity:', result.nativeEvent.message);
        }}
      />
      {/* Control Button Overlay */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={sendMessageToUnity}>
          <Text style={styles.buttonText}>Send to Unity</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});