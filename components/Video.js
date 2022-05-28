import React from 'react';
import '../node_modules/video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';

export default function Video() {
  return (
    <div>
      <Player
        autoPlay={true}
        fluid={true}
        autoplay
        playsInline
        src="vid1.MP4"
      />
    </div>
  );
}
