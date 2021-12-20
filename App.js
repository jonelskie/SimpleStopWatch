import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();

  const start = () => {
      run();
      setInterv(setInterval(run, 10));
  }

  const stop = () => {
    clearInterval(interv)
    setTime({ms:0, s:0, m:0, h:0})
  };

  const hold = () => clearInterval(interv);
  
  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH ++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM ++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS ++;
      updatedMs = 0;
    }
    updatedMs ++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{time.h}:{time.m}:{time.s}:{time.ms}</Text>
      </View>
      
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={start}>
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={stop}>
          <Text style={styles.btnText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={hold}>
          <Text style={styles.btnText}>Hold</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    justifyContent: 'space-between',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btn: {
    width: '20%',
    backgroundColor: 'skyblue',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
  btnText: {
    fontWeight: 'bold',
  },
  timeContainer: {
    borderRadius: 10,
    padding:20,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    margin: 20,
  },
  timeText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  }
});
