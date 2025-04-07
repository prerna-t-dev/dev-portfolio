import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import "@mux/mux-player"; // Import the Mux Player web component

// Dynamically import to prevent SSR issues
const MuxPlayer = dynamic(
  () =>
    Promise.resolve(({ src, ...props }) => (
      <mux-player
        src={src}
        {...props}
        style={{ aspectRatio: "16/9", width: "100%" }}
      ></mux-player>
    )),
  { ssr: false }
);

export default function VideoPlayer({ filename, autoplay = false, loop = false, muted = false, metadata = {} }) {
  // Escape spaces in filename
  const escapedFilename = encodeURIComponent(filename);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", border: "1px solid #ddd", borderRadius: "8px" }}>
      <MuxPlayer
        src={`/videos/${escapedFilename}`}
        autoplay={autoplay}
        loop={loop}
        muted={muted}
        controls
        metadata={metadata}
      />
    </div>
  );
}

// Prop type validation
VideoPlayer.propTypes = {
  filename: PropTypes.string.isRequired,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  metadata: PropTypes.object,
};
