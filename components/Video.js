import React from 'react';
import '../node_modules/video-react/dist/video-react.css'; // import css
import { Player, ControlBar, PlayToggle, BigPlayButton } from 'video-react';

export default function Video() {
  return (
    <div>
      <Player autoPlay={true} fluid={true} playsInline src="vid1.MP4">
        <BigPlayButton position="center" />
        <ControlBar autoHide={false} disableDefaultControls={true}>
          <PlayToggle />
        </ControlBar>
      </Player>
    </div>
  );
}
