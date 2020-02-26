import React from "react";
import videojs from "video.js";
import "videojs-landscape-fullscreen";

class Player extends React.PureComponent {
  /** @type {React.RefObject<HTMLVideoElement>} */
  videoRef = React.createRef();
  /** @type {import('video.js').VideoJsPlayer} */
  player = null;

  componentDidMount() {
    this.initialize();
  }

  render() {
    return (
      <video
        ref={this.videoRef}
        className="video-js vjs-default-skin"
        playsInline
      />
    );
  }

  initialize() {
    this.setupPlayer();
  }

  setupPlayer() {
    this.player = videojs(this.videoRef.current, this.props);
    this.player.landscapeFullscreen({
      fullscreen: {
        enterOnRotate: true,
        alwaysInLandscapeMode: true,
        iOS: false
      }
    });
    this.player.on("volumechange", this.handleVolumeChange);
  }

  handleVolumeChange = () => {
    console.group("volume change");
    console.log("muted", this.player.muted());
    console.log("volume", this.player.volume());
    console.groupEnd();
  };
}

Player.defaultProps = {
  muted: true,
  controls: true,
  autoplay: "muted",
  loop: false
};

export default Player;
