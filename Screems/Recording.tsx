import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { Audio } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";
import appColors from "../assets/style/appColors";

interface RecordFile {
  file: string;
}

export default function Recording() {
  const [recording, setRecording] = useState<Audio.Recording | undefined>();
  const [recordings, setRecordings] = useState<
    { sound: Audio.Sound; duration: string; file: string }[]
  >([]);
  const [isRecording, setIsRecording] = useState(false);

  async function startRecording() {
    try {
      const perm = await Audio.requestPermissionsAsync();
      if (perm.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        const { recording: newRecording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
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
      file: recording.getURI() || "",
    });

    setRecordings(allRecordings);
  }

  async function playRecordFile(recordFile: RecordFile): Promise<void> {
    const playbackObject = new Audio.Sound();

    try {
      await playbackObject.loadAsync({ uri: recordFile.file });
      await playbackObject.playAsync();
    } catch (error) {
      console.error("Error playing record file:", error);
    }
  }

  function getDurationFormatted(milliseconds: number) {
    const minutes = milliseconds / 1000 / 60;
    const seconds = Math.round((minutes - Math.floor(minutes)) * 60);
    return seconds < 10
      ? `${Math.floor(minutes)}:0${seconds}`
      : `${Math.floor(minutes)}:${seconds}`;
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
          <Pressable
            style={styles.boton}
            onPress={() => playRecordFile({ file: recordingLine.file })}
          >
            <FontAwesome name="play" size={26} color="black" />
          </Pressable>
          <Pressable
            style={styles.boton}
            onPress={() => deleteRecording(index)}
          >
            <FontAwesome name="trash" size={24} color="black" />
          </Pressable>
        </View>
      );
    });
  }

  function clearRecordings() {
    setRecordings([]);
  }

  return (
    <View style={styles.container}>
       <Pressable
        onPress={recording ? stopRecording : startRecording}
        style={styles.botonS}
      >
        <Text style={styles.text}>{recording ? 'Stop' : 'Start'}</Text>
      </Pressable>
      {isRecording && <ActivityIndicator size="small" color="#0000ff" />}
      {getRecordingLines()}
      <Pressable
          onPress={clearRecordings}
          style={styles.botonSt}
          
        >
          <Text  style={styles.text}>Clear</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
 
  boton: {
    width: 30,
    margin: 2,
  },
  botonS:{
    height:60,
    borderRadius: 7,
    backgroundColor: "#0000FF",
    padding: 20,
    marginBottom:20
  },
  botonSt:{
    height:40,
    borderRadius: 7,
    backgroundColor: "#943126",
    padding: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 40,
  },
  fill: {
    flex: 1,
    margin: 15,
  },
  text:{
    
    color: 'white'
  }
});
