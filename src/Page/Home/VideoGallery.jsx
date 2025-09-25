import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Maximize, Volume2, VolumeX, SkipBack, SkipForward, ChevronLeft, ChevronRight } from "lucide-react";
import Logo from "../../assets/Image/Logo.png";

// Enhanced video data with more metadata
const videos = [
  {
    id: 1,
    title: "Spider-Man: No Way Home",
    description: "The web-slinger faces his greatest challenge yet",
    src: "https://www.youtube.com/watch?v=rt-2cxAiPJk",
    cover: "https://i.ytimg.com/vi/rt-2cxAiPJk/maxresdefault.jpg",
    duration: "2:32",
    genre: "Action"
  },
  {
    id: 2,
    title: "Doctor Strange: Multiverse of Madness",
    description: "Journey into the unknown realms of the multiverse",
    src: "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
    cover: "https://i.ytimg.com/vi/aWzlQ2N6qqg/maxresdefault.jpg",
    duration: "2:48",
    genre: "Fantasy"
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    description: "The epic conclusion to the Infinity Saga",
    src: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    cover: "https://i.ytimg.com/vi/TcMBFSGVi1c/maxresdefault.jpg",
    duration: "2:25",
    genre: "Action"
  },
  {
    id: 4,
    title: "The Conjuring: The Devil Made Me Do It",
    description: "A chilling tale of supernatural horror",
    src: "https://www.youtube.com/watch?v=h9Q4zZS2v1k",
    cover: "https://i.ytimg.com/vi/h9Q4zZS2v1k/maxresdefault.jpg",
    duration: "2:15",
    genre: "Horror"
  },
  {
    id: 5,
    title: "Red Door",
    description: "Redemption and revenge in a thrilling action saga",
    src: "https://www.youtube.com/watch?v=ZuQuOnYnr3Q",
    cover: "https://images.slivcdn.com/videoasset_images/blitz_assets/1590012987/thumbnail/1728126433626_INSIDIOUS-THE-RED-DOOR_Landscape_Thumb.jpg?w=1000&q=low",
    duration: "2:41",
    genre: "Action"
  },
  {
    id: 6,
    title: "Dune",
    description: "An epic sci-fi adventure on the desert planet",
    src: "https://www.w3schools.com/html/movie.mp4",
    cover: "https://i.ytimg.com/vi/n9xhJrPXop4/maxresdefault.jpg",
    duration: "3:12",
    genre: "Sci-Fi"
  }
];

// Enhanced Video Player Component
const VideoPlayer = ({ video, onNext, onPrevious }) => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const containerRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  let hideControlsTimeout;

  // Format time helper
  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Play / Pause toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Update progress and time
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    setCurrentTime(current);
    setProgress((current / total) * 100);
  };

  // Handle video metadata load
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
    }
  };

  // Click on progress bar to seek
  const handleProgressClick = (e) => {
    if (!progressRef.current || !videoRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percent = Math.max(0, Math.min(1, clickX / width));
    videoRef.current.currentTime = percent * videoRef.current.duration;
  };

  // Volume control
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  // Mute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      setIsMuted(newMuted);
      videoRef.current.muted = newMuted;
      if (newMuted) {
        videoRef.current.volume = 0;
      } else {
        videoRef.current.volume = volume;
      }
    }
  };

  // Fullscreen
  const handleFullscreen = () => {
    if (containerRef.current) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      }
    }
  };

  // Mouse movement handling for controls
  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(hideControlsTimeout);
    hideControlsTimeout = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  // Skip functions
  const skip = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, Math.min(
        videoRef.current.duration, 
        videoRef.current.currentTime + seconds
      ));
    }
  };

  // Reset player when video changes
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setIsLoading(true);
  }, [video.id]);

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (hideControlsTimeout) clearTimeout(hideControlsTimeout);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        key={video.id}
        src={video.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full aspect-video rounded-2xl shadow-2xl bg-black"
        poster={video.cover}
      />

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Play Button Overlay */}
      {!isPlaying && !isLoading && (
        <div 
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl cursor-pointer group-hover:bg-black/50 transition-all duration-300"
        >
          <div className="bg-red-600 hover:bg-red-700 rounded-full p-6 shadow-2xl transform group-hover:scale-110 transition-all duration-300">
            <Play className="w-12 h-12 text-white ml-1" />
          </div>
        </div>
      )}

      {/* Controls */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl transition-all duration-300 ${
        showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
      }`}>
        
        {/* Progress Bar */}
        <div className="px-6 pt-8">
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            className="w-full h-2 bg-white/20 rounded-full cursor-pointer group/progress hover:h-3 transition-all duration-200"
          >
            <div 
              className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg transition-all duration-200 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity duration-200 -mr-2"></div>
            </div>
          </div>
          
          {/* Time Display */}
          <div className="flex justify-between text-white text-sm mt-2 font-medium">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            {/* Previous/Next */}
            <button
              onClick={onPrevious}
              className="text-white hover:text-red-400 transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
            >
              <SkipBack className="w-6 h-6" />
            </button>

            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>

            <button
              onClick={onNext}
              className="text-white hover:text-red-400 transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
            >
              <SkipForward className="w-6 h-6" />
            </button>

            {/* Skip Buttons */}
            <button
              onClick={() => skip(-10)}
              className="text-white hover:text-red-400 text-sm font-bold transition-colors duration-200 px-3 py-2 hover:bg-white/10 rounded"
            >
              -10s
            </button>
            <button
              onClick={() => skip(10)}
              className="text-white hover:text-red-400 text-sm font-bold transition-colors duration-200 px-3 py-2 hover:bg-white/10 rounded"
            >
              +10s
            </button>
          </div>

          <div className="flex items-center gap-4">
            {/* Volume Control */}
            <div className="flex items-center gap-2 group/volume">
              <button onClick={toggleMute} className="text-white hover:text-red-400 transition-colors duration-200">
                {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 opacity-0 group-hover/volume:opacity-100 transition-opacity duration-200"
              />
            </div>

            {/* Fullscreen */}
            <button
              onClick={handleFullscreen}
              className="text-white hover:text-red-400 transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="mt-6 text-center">
        <h2 className="text-white text-3xl font-bold mb-2">{video.title}</h2>
        <p className="text-gray-400 text-lg mb-2">{video.description}</p>
        <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full">{video.genre}</span>
          <span>{video.duration}</span>
        </div>
      </div>
    </div>
  );
};

// Enhanced Thumbnail Component
const VideoThumbnail = ({ video, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer group relative transition-all duration-300 ${
      isActive ? 'scale-105' : 'hover:scale-105'
    }`}
  >
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={video.cover}
        alt={video.title}
        className={`w-full h-32 object-cover transition-all duration-300 ${
          isActive 
            ? 'border-3 border-red-500 shadow-lg shadow-red-500/30' 
            : 'border-2 border-gray-600 group-hover:border-red-400'
        }`}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      {/* Play Icon Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
        isActive 
          ? 'bg-red-500/20' 
          : 'bg-black/30 opacity-0 group-hover:opacity-100'
      }`}>
        <div className="bg-white/90 rounded-full p-2">
          <Play className="w-6 h-6 text-black ml-0.5" />
        </div>
      </div>

      {/* Duration Badge */}
      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
        {video.duration}
      </div>

      {/* Genre Badge */}
      <div className="absolute top-2 left-2 bg-red-600/80 text-white text-xs px-2 py-1 rounded">
        {video.genre}
      </div>
    </div>

    {/* Title */}
    <h3 className={`mt-3 text-center font-semibold transition-colors duration-200 ${
      isActive ? 'text-red-400' : 'text-gray-300 group-hover:text-white'
    }`}>
      {video.title}
    </h3>
  </div>
);

// Main Gallery Component
const VideoGallery = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + visibleCount < videos.length) setStartIndex(startIndex + 1);
  };

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  };

  const handleNextVideo = () => {
    const currentIndex = videos.findIndex(v => v.id === currentVideo.id);
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentVideo(videos[nextIndex]);
  };

  const handlePreviousVideo = () => {
    const currentIndex = videos.findIndex(v => v.id === currentVideo.id);
    const prevIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    setCurrentVideo(videos[prevIndex]);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen">
      {/* Header */}
      <div className="text-center py-8">
        <div className="animate-pulse flex justify-center mb-4">
            <img className="h-40 text-center" src={Logo} alt="" />
        </div>
        <p className="text-gray-400 text-lg">Discover amazing trailers and exclusive content</p>
      </div>

      <div className="px-6 pb-12">
        {/* Main Video Player */}
        <VideoPlayer 
          video={currentVideo} 
          onNext={handleNextVideo}
          onPrevious={handlePreviousVideo}
        />

        {/* Video Gallery */}
        <div className="relative w-full max-w-6xl mx-auto mt-12">
          <h2 className="text-white text-2xl font-bold mb-6 text-center">Browse More Videos</h2>
          
          {/* Navigation Buttons */}
          {startIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-red-600 text-white p-3 rounded-full shadow-lg z-10 transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 gap-6"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
                width: `${(videos.length / visibleCount) * 100}%`,
              }}
            >
              {videos.map((video) => (
                <div key={video.id} className="flex-shrink-0" style={{ width: `${100 / visibleCount}%` }}>
                  <VideoThumbnail
                    video={video}
                    isActive={currentVideo.id === video.id}
                    onClick={() => handleVideoSelect(video)}
                  />
                </div>
              ))}
            </div>
          </div>

          {startIndex + visibleCount < videos.length && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-red-600 text-white p-3 rounded-full shadow-lg z-10 transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Stats/Info Section */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-red-400 mb-2">{videos.length}</h3>
            <p className="text-gray-400">Total Videos</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-red-400 mb-2">HD</h3>
            <p className="text-gray-400">Quality</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-red-400 mb-2">4K</h3>
            <p className="text-gray-400">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;