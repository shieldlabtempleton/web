// CustomNode.js
import React from "react";
import { Handle, Position } from "reactflow";

export default function CustomNode({ data }) {
  const Icon = data.icon;
  return (
    <div className="Research-card-container-2">
      <div className="Research-card">
        <div className="front">
          {data.icon ? <Icon className="Research-card-icon-2" /> : null}
          <h1 className="Research-card-topic">{data.label}</h1>
        </div>
        <div className="back">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      {/* 👇 Conditionally render handles */}
      {data.showTarget && (
        <Handle
          type="target"
          position={Position.Top}
          style={{ background: "#555", opacity: 0 }}
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
