// CustomNode.js
import React from "react";
import { Handle, Position } from "reactflow";

export default function StaticNode({ data }) {
  return (
    <div
      style={{
        padding: 10,
        border: "2px solid #999",
        borderRadius: 8,
        background: "#fff",
        textAlign: "center",
        width: 120,
        cursor: "default",
      }}
    >
      {data.label}

      {/* 👇 Conditionally render handles */}
      {data.showTarget && (
        <Handle
          type="target"
          position={Position.Top}
          style={{ background: "#555" }}
          isConnectable={false}
        />
      )}

      {data.showSource && (
        <Handle
          type="source"
          position={Position.Bottom}
          style={{ background: "#555" }}
          isConnectable={false}
        />
      )}
    </div>
  );
}
