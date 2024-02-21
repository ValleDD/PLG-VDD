import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';

interface RecordFile {
  file: string;
}

export default function Recording() {
  const [recording, setRecording] = useState<Audio.Recording | undefined>();
  const [recordings, setRecordings] = useState<{ sound: Audio.Sound, duration: string, file: string }[]>([]);
  const [isRecording, setIsRecording] = useState(false);

  async function startRecording() {
    try {
      const perm = await Audio.requestPermissionsAsync();
      if (perm.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        const { recording: newRecording } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        setRecording(newRecording);
        setIsRecording(true);
      }
    } catch (err) {
      console.error("Failed to start recording: ", err);
    }
  }

  async function stopRecording() {
    if (!recording) return;

    setIsRecording(false);
    setRecording(undefined);

    await recording.stopAndUnloadAsync();
    let allRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    allRecordings.push({
      sound: sound!,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI() || ""
    });

    setRecordings(allRecordings);
  }

  async function playRecordFile(recordFile: RecordFile): Promise<void> {
    const playbackObject = new Audio.Sound();

    try {
      await playbackObject.loadAsync({ uri: recordFile.file });
      await playbackObject.playAsync();
    } catch (error) {
      console.error('Error playing record file:', error);
    }
  }

  function getDurationFormatted(milliseconds: number) {
    const minutes = milliseconds / 1000 / 60;
    const seconds = Math.round((minutes - Math.floor(minutes)) * 60);
    return seconds < 10 ? `${Math.floor(minutes)}:0${seconds}` : `${Math.floor(minutes)}:${seconds}`;
  }

  function deleteRecording(index: number) {
    const updatedRecordings = [...recordings];
    updatedRecordings.splice(index, 1);
    setRecordings(updatedRecordings);
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>
            Audio {index + 1} | {recordingLine.duration}
          </Text>
          <Button onPress={() => playRecordFile({ file: recordingLine.file })} title="Play"></Button>
          <Button onPress={() => deleteRecording(index)} title="Delete"></Button>
        </View>
      );
    });
  }

  function clearRecordings() {
    setRecordings([]);
  }

  return (
    <View style={styles.container}>
      <Button title={recording ? 'Stop Recording' : 'Start Recording\n\n\n'} onPress={recording ? stopRecording : startRecording} />
      {isRecording && <ActivityIndicator size="small" color="#0000ff" />}
      {getRecordingLines()}
      <Button title={recordings.length > 0 ? '\n\n\nClear Recordings' : ''} onPress={clearRecordings} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 40
  },
  fill: {
    flex: 1,
    margin: 15
  }
});
