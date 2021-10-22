import React, { useEffect, useRef, useState } from "react";
import {  Button, StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Video, AVPlaybackStatus } from "expo-av";
import { COLORS, SIZES } from "../constants";
import VideoPlayer from "expo-video-player";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import ProgressBar from "../components/ProgressBar";
import NetInfo from "@react-native-community/netinfo";
import RNBackgroundDownloader from 'react-native-background-downloader';

export default () => {
  let [isOnline,setIsOnline] = useState(null)
  useEffect(()=>{

    NetInfo.addEventListener((state) => {
      setIsOnline(state.isConnected)
    });
        
  isOnline && !status?.isLoaded && video?.current?.loadAsync(asset)
 
  },[isOnline])


  const [status, setStatus] = useState(null);
  const video = useRef(null);
  useEffect(() => {
    if (status != undefined) {
    
    }
  }, [status]);
  const url ='https://k.mandela.h.sabishare.com/dl/BEnPqlNrd31/6a671d23be21bc3413c3ddf8f1ac60bf8bb8539c39dc6e9e257896a88c764e3e/Bob_Hearts_Abishola_S03E03_-_Dud_(NetNaija.com).mp4'

    const asset = { uri: url }
    // const asset = require('../assets/vid.mp4')
  const [downloadProgress, SetdownloadProgress] = useState(0);
  // console.log((downloadProgress));

  const callback = (downloadProgress) => {
    const progress =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite;
      SetdownloadProgress(progress)

  };

  // let fileUri = FileSystem.documentDirectory + "vid.mp4";
  const downloadResumable = FileSystem.createDownloadResumable(
    url,
          FileSystem.documentDirectory + 'small.mp4',
          {},
          callback
        );
        

        const [uri,setUri] =useState(null)
  async function downloadFile() {
    
    try {
      const { uri } = await downloadResumable.downloadAsync();
      setUri(uri)
      console.log('Finished downloading to ', uri);
    } catch (e) {
      console.error(e);
    }
    
};


  const saveFile = async (fileUri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();

    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("../ADM/movie", asset, false);
    }
  
  
  
  };

  const handlePause = async(data) => {
    
      await downloadResumable.pauseAsync().then(uri=>console.log(uri)
      )
   
      console.log('Paused download operation, saving for future retrieval');

      AsyncStorage.setItem('pausedDownload', JSON.stringify(downloadResumable.savable()));
      
  };


  
  // const handleTryload = (data) => {
  //   // video.current.setPositionAsync(status.positionMillis +1000)
  //   isOnline && !status?.isLoaded && video?.current?.loadAsync(asset)  
  // };
  // const handleResume = async () => {
  //   try {
  //     const { uri } = await downloadResumable.resumeAsync();
  //     console.log("Finished downloading to ", uri);
  //   } catch (e) {
  //     // console.error(e);
  //   }
  // };
  
    
    
    
  return (
    <View style={styles.container}>
      {/* <VideoPlayer
        playbackCallback={(status) => setStatus(status)}
        defaultControlsVisible
        videoProps={{
          shouldPlay: false,
          source: asset,
          ref: video,
          onError:(error)=>console.log(error)
          
        }}
        slider={{
          visible: true,
        }}
        fullscreen={{
          visible: true,
        }}
        timeVisible={true}
        style={{
          height: 160,
        }}
      /> */}

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
        }}
      >
        <ProgressBar
          containerStyle={{
            marginTop: SIZES.radius,
            marginBottom: SIZES.radius,
          }}
          barStyle={{ height: 5, borderRadius: 3 }}
          barPercentage={downloadProgress}
        />
        <Text>{downloadProgress}%</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title={"Donwload"} onPress={downloadFile} />
      </View>
      <Button title={"Pause"} onPress={handlePause} />

      {/* <Button title={"Resume"} onPress={handleResume} /> */}
      {/* <Button title={"Try"} onPress={handleTryload} />  */}
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
