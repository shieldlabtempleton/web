import {
  BaseEdge,
  getBezierPath,
  getSmoothStepPath,
  EdgeProps,
} from "reactflow";

const CARD_MAP = {
  1: [
    "e1-2",
    "e1-3",
    "e1-4",
    "e1-5",
    "e1-6",
    "e7-1",
    "e8-1",
    "e9-1",
    "e10-1",
    "e11-1",
    "e12-1",
    "e13-1",
  ],
  2: ["e1-2", "e7-1", "e8-1", "e10-1", "e11-1"],
  3: ["e1-3", "e7-1", "e9-1", "e12-1"],
  4: ["e1-4", "e7-1", "e8-1", "e10-1"],
  5: ["e1-5", "e7-1", "e8-1", "e9-1", "e10-1", "e11-1", "e13-1"],
  6: ["e1-6", "e8-1", "e12-1", "e13-1"],
  7: ["e7-1", "e1-2", "e1-3", "e1-4", "e1-5"],
  8: ["e8-1", "e1-2", "e1-4", "e1-5", "e1-6"],
  9: ["e9-1", "e1-3", "e1-5"],
  10: ["e10-1", "e1-2", "e1-4", "e1-5"],
  11: ["e11-1", "e1-2", "e1-5"],
  12: ["e12-1", "e1-3", "e1-6"],
  13: ["e13-1", "e1-5", "e1-6"],
};

function Shadow() {
  return (
    <defs>
      <filter id="circleShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation="4"
          flood-color="#006747"
          flood-opacity="1"
        />
      </filter>
    </defs>
  );
}

export function DownwardEdge({ id, source, target, ...props }) {
  const { sourceX, sourceY, targetX, targetY } = props;

  const bend = 120; // how far downward the curve goes

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlY: sourceY + bend,
    targetControlY: targetY + bend,
  });

  const onEnter = () => {
    const edgesToHighlight = CARD_MAP[target] || [];
    window.dispatchEvent(
      new CustomEvent("highlight-edges", { detail: edgesToHighlight })
    );
  };

  const onLeave = () => {
    window.dispatchEvent(new CustomEvent("highlight-edges", { detail: [] }));
  };

  return (
    <g pointerEvents={"none"}>
      <BaseEdge path={edgePath} {...props} />
      <circle r="10" opacity="0">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          keyTimes="0;  1"
          keyPoints="0; 1"
          path={edgePath}
          begin={"2.5s"}
        />
        <animate
          attributeName="opacity"
          dur="3s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.35; 1"
          values="0; 1; 1"
          begin={"2.5s"}
        />
        <animate
          attributeName="fill"
          dur="3s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.3; 0.4; 0.9; 1"
          values="#9ccb3b;#9ccb3b;#006747;#006747;#9ccb3b"
          begin={"2.5s"}
        />
      </circle>

      <circle r="10" opacity="0">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          keyTimes="0;  1"
          keyPoints="0; 1"
          path={edgePath}
          begin={"3.5s"}
        />
        <animate
          attributeName="opacity"
          dur="3s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.35; 1"
          values="0; 1; 1"
          begin={"3.5s"}
        />
        <animate
          attributeName="fill"
          dur="3s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.3; 0.4; 0.9; 1"
          values="#9ccb3b;#9ccb3b;#006747;#006747;#9ccb3b"
          begin={"3.5s"}
        />
      </circle>

      <circle r="10" opacity="0">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          keyTimes="0;  1"
          keyPoints="0; 1"
          path={edgePath}
          begin={"4.5s"}
        />
        <animate
          attributeName="opacity"
          dur="3s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.35; 1"
          values="0; 1; 1"
          begin={"4.5s"}
        />
        <animate
          attributeName="fill"
          dur="3s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.3; 0.4; 0.9; 1"
          values="#9ccb3b;#9ccb3b;#006747;#006747;#9ccb3b"
          begin={"4.5s"}
        />
      </circle>

      <circle r="10" opacity="0">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          keyTimes="0;  1"
          keyPoints="0; 1"
          path={edgePath}
          begin={"5.5s"}
        />
        <animate
          attributeName="opacity"
          dur="3s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.35; 1"
          values="0; 1; 1"
          begin={"5.5s"}
        />
        <animate
          attributeName="fill"
          dur="3s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.3; 0.4; 0.9; 1"
          values="#9ccb3b;#9ccb3b;#006747;#006747;#9ccb3b"
          begin={"5.5s"}
        />
      </circle>
    </g>
  );
}

export function DefaultEdge({ id, source, target, ...props }) {
  const { sourceX, sourceY, targetX, targetY } = props;

  const bend = 120; // how far downward the curve goes

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlY: sourceY,
    targetControlY: targetY,
  });

  return (
    <g pointerEvents={"none"}>
      <BaseEdge path={edgePath} {...props} />

      <circle r="10" opacity="0" fill="#006747">
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0; 1"
          keyPoints="0; 1"
          path={edgePath}
        />
        <animate
          attributeName="opacity"
          dur="2s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.75; 1"
          values="1; 1; 0"
        />
        <animate
          attributeName="fill"
          dur="2s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.4; 0.6; 0.9; 1"
          values="#006747;#9ccb3b;#9ccb3b;#006747;#006747"
        />
      </circle>

      <circle r="10" opacity="0">
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0; 1"
          keyPoints="0; 1"
          path={edgePath}
          begin={"0.5s"}
        />
        <animate
          attributeName="opacity"
          dur="2s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.75; 1"
          values="1; 1; 0"
          begin={"0.5s"}
        />
        <animate
          attributeName="fill"
          dur="2s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.4; 0.6; 0.9; 1"
          values="#006747;#9ccb3b;#9ccb3b;#006747;#006747"
          begin={"0.5s"}
        />
      </circle>

      <circle r="10" opacity="0">
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0; 1"
          keyPoints="0; 1"
          path={edgePath}
          begin={"1s"}
        />
        <animate
          attributeName="opacity"
          dur="2s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.75; 1"
          values="1; 1; 0"
          begin={"1s"}
        />
        <animate
          attributeName="fill"
          dur="2s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.4; 0.6; 0.9; 1"
          values="#006747;#9ccb3b;#9ccb3b;#006747;#006747"
          begin={"1s"}
        />
      </circle>

      <circle r="10" opacity="0">
        <animateMotion
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0; 1"
          keyPoints="0; 1"
          path={edgePath}
          begin={"1.5s"}
        />
        <animate
          attributeName="opacity"
          dur="2s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.75; 1"
          values="1; 1; 0"
          begin={"1.5s"}
        />
        <animate
          attributeName="fill"
          dur="2s"
          repeatCount="indefinite"
          calcMode="linear"
          keyTimes="0; 0.4; 0.6; 0.9; 1"
          values="#006747;#9ccb3b;#9ccb3b;#006747;#006747"
          begin={"1.5s"}
        />
      </circle>
    </g>
  );
}
