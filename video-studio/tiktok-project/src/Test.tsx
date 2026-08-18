import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Test: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 200 } });
  const opacity = interpolate(
    frame,
    [durationInFrames - fps, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0b1020",
        justifyContent: "center",
        alignItems: "center",
        opacity,
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          color: "white",
          fontFamily: "sans-serif",
          fontSize: 120,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Test
      </div>
      <div
        style={{
          marginTop: 40,
          color: "#7dd3fc",
          fontFamily: "sans-serif",
          fontSize: 48,
        }}
      >
        {Math.ceil((durationInFrames - frame) / fps)}s
      </div>
    </AbsoluteFill>
  );
};
