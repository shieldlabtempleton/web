// CustomNode.js
import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { NavLink } from "react-router-dom";
import * as Icons from "./Icons";

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

const ICON_MAP = {
  Ai: Icons.AiIcon,
  Biomechanics: Icons.BiomechanicsIcon,
  Brain: Icons.BrainIcon,
  Cell: Icons.CellIcon,
  Heart: Icons.HeartIcon,
  Publichealth: Icons.PublichealthIcon,
  Mobile: Icons.MobileIcon,
  Hardware: Icons.HardwareIcon,
  Nlp: Icons.NlpIcon,
  Software: Icons.SoftwareIcon,
  Vision: Icons.VisionIcon,
  Hci: Icons.HciIcon,
};

export function CustomNode({ id, data }) {
  const Icon = ICON_MAP[data.icon];
  const slug = `/research/${data.slug}`;

  const onEnter = () => {
    const edgesToHighlight = CARD_MAP[id] || [];
    window.dispatchEvent(
      new CustomEvent("highlight-edges", { detail: edgesToHighlight })
    );
  };

  const onLeave = () => {
    window.dispatchEvent(new CustomEvent("highlight-edges", { detail: [] }));
  };
  return (
    <NavLink
      to={slug}
      state={{ data }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="Research-card-container-2"
    >
      <div className="Research-card">
        <div className="front">
          {data.icon ? (
            <Icon className="Research-card-icon-2" id={data.iconid} />
          ) : null}
          <h1 className="Research-card-topic-2">{data.label}</h1>
        </div>
        <div className="back">
          <p style={{ fontSize: "17px" }}>
            {data.description
              ? data.description
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
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
          position={
            data.sourceLocation === "right"
              ? Position.Right
              : data.sourceLocation === "left"
              ? Position.Left
              : Position.Bottom
          }
          style={{ background: "#555", opacity: 0 }}
          isConnectable={false}
        />
      )}
    </NavLink>
  );
}

export function ImageNode({ id, data }) {
  const onEnter = () => {
    const edgesToHighlight = CARD_MAP[id] || [];
    window.dispatchEvent(
      new CustomEvent("highlight-edges", { detail: edgesToHighlight })
    );
  };

  const onLeave = () => {
    window.dispatchEvent(new CustomEvent("highlight-edges", { detail: [] }));
  };
  return (
    <NavLink
      to={"/"}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ cursor: "pointer" }}
    >
      <button style={{ all: "unset" }}>
        <img src={data.image} className="image-node" />
      </button>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555", opacity: data.opac }}
        isConnectable={false}
      />
      <Handle
        type="target"
        id="s1"
        style={{ left: "0%", top: -2, opacity: data.opac }}
        isConnectable={false}
      />
      <Handle
        type="target"
        id="s2"
        style={{ left: "35%", top: "5%", opacity: data.opac }}
        isConnectable={false}
      />
      <Handle
        type="target"
        id="s3"
        style={{ left: "64%", top: 10, opacity: data.opac }}
        isConnectable={false}
      />
      <Handle
        type="target"
        id="s4"
        style={{ left: "100%", top: -2, opacity: data.opac }}
        isConnectable={false}
      />
      <Handle
        type="source"
        id="t1"
        style={{ left: "17%", top: "67%", opacity: data.opac }}
        isConnectable={false}
      />
      <Handle
        type="source"
        id="t2"
        style={{ left: "33%", top: "82%", opacity: data.opac }}
        isConnectable={false}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#555", opacity: data.opac }}
        isConnectable={false}
        id="t3"
      />
      <Handle
        type="source"
        id="t4"
        style={{ left: "66%", top: "82%", opacity: data.opac }}
        isConnectable={false}
      />
      <Handle
        type="source"
        id="t5"
        style={{ left: "82%", top: "67%", opacity: data.opac }}
        isConnectable={false}
      />
    </NavLink>
  );
}
