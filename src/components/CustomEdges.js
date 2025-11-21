import { BaseEdge, getBezierPath } from "reactflow";

export default function DownwardEdge(props) {
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

  return <BaseEdge path={edgePath} {...props} />;
}
