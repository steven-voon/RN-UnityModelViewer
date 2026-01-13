import UnityView from '@azesmway/react-native-unity';
import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UnityScreen() {
  const unityRef = useRef<any>(null);

  // Helper function to send messages
  const sendToUnity = (message: string) => {
    if (unityRef.current) {
      // Arguments: (GameObject, FunctionName, Message)
      unityRef.current.postMessage('ReactBridge', 'ReceiveMessageFromRN', message);
    }
  };

  return (
    <View style={styles.container}>
      <UnityView
        ref={unityRef}
        style={{ flex: 1 }}
        onUnityMessage={(result) => {
          console.log('Received from Unity:', result.nativeEvent.message);
        }}
      />

      {/* Button Overlay Group */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity 
          style={[styles.button, styles.buttonA]} 
          onPress={() => sendToUnity('ShowKerisA')}
        >
          <Text style={styles.buttonText}>Switch Keris A</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonB]} 
          onPress={() => sendToUnity('ShowKerisB')}
        >
          <Text style={styles.buttonText}>Switch Keris B</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => sendToUnity('ToggleHotspot')}
        >
          <Text style={styles.buttonText}>Toggle Hotspot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  buttonGroup: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'column', // Stack them vertically
    alignItems: 'center',
    gap: 10, // Add space between buttons
  },
  button: {
    backgroundColor: '#333',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
    width: '80%', // Make buttons wider for better UX
    alignItems: 'center',
  },
  buttonA: { backgroundColor: '#FF9500' }, // Orange for Keris A
  buttonB: { backgroundColor: '#5856D6' }, // Purple for Keris B
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});