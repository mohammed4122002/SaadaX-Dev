"use client";
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/modules/fullscreenVideo.module.css';

const FullscreenVideo: React.FC = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const hasClosed = localStorage.getItem('fullscreenVideoClosed');
    if (hasClosed) setShowVideo(false);
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!showVideo || !videoElement) return;

    const handlePlay = async () => {
      try {
        // الانتظار حتى يكون هناك بيانات كافية للتشغيل
        await videoElement.play();
        if (isMounted.current) setIsPlaying(true);
        
        // إضافة حدث للتأكد من استمرارية التشغيل
        videoElement.addEventListener('timeupdate', () => {
          if (videoElement.currentTime >= videoElement.duration - 0.5) {
            handleVideoEnd();
          }
        });
      } catch (error) {
        console.error('Error playing video:', error);
        if (isMounted.current) handleClose();
      }
    };

    const handleLoadedData = () => {
      handlePlay();
    };

    videoElement.addEventListener('loadeddata', handleLoadedData);
    videoElement.addEventListener('error', handleClose);

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      videoElement.removeEventListener('error', handleClose);
      if (isMounted.current) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    };
  }, [showVideo]);

  const handleVideoEnd = () => {
    if (isMounted.current) {
      setShowVideo(false);
      localStorage.setItem('fullscreenVideoClosed', 'true');
    }
  };

  const handleClose = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
    if (isMounted.current) {
      setShowVideo(false);
      localStorage.setItem('fullscreenVideoClosed', 'true');
    }
  };

  if (!showVideo) return null;

  return (
    <div className={styles.videoOverlay}>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.videoPlayer}
          muted
          autoPlay
          playsInline
          onEnded={handleVideoEnd}
          disablePictureInPicture
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
      </div>
    </div>
  );
};

export default FullscreenVideo;