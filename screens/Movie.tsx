import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { COLORS } from "../constants";
import VideoPlayer from "expo-video-player";

export default () => {
  const video = React.useRef(null);

  const data = {
    isPlaying: false,
  };

  const [status, setStatus] = React.useState(null);

//   const handleplay = () => {
//     status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
//   }

  const handleForward = (data)=>{
    video.current.setPositionAsync(status.positionMillis +1000)
    video.current.playAsync()
 };

  const handleBackward = ()=>{
    video.current.setPositionAsync(status.positionMillis -1000)
    video.current.playAsync()
  };

  return (
    <View style={styles.container}>
      <VideoPlayer
       playbackCallback={status => setStatus(status)}
        defaultControlsVisible
        videoProps={{
          shouldPlay: false,
          source: require("../assets/vid.mp4"),
          ref: video,
        }}
        slider={{
          visible: true,
        }}
        fullscreen={{
          visible: true,
        }}
        timeVisible={true}
        style={{ height: 160 }}
      />
      {/* <Button
        title={status?.isPlaying ? "Pause" : "Play"}
        onPress={handleplay}
      /> */}
      <Button
        title={"forward 10sec"}
        onPress={handleForward}
      />
      <Button
        title={"backward 10sec"}
        onPress={handleBackward}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: COLORS.black,
  },
  video: {
    width: "90%",
    height: "50%",
  },
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
