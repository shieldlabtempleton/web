import React, { useState, useEffect } from "react";
import lablogo from "../assests/SHIELD.png";
import Placeholder from "./Placeholder";
import ResearchCard from "./ResearchCard";
import { ReactComponent as Heart } from "../assests/heart.svg";
import { ReactComponent as Brain } from "../assests/brain.svg";
import { ReactComponent as Cell } from "../assests/cell.svg";
import { ReactComponent as Biomechanics } from "../assests/biomechanics.svg";
import { ReactComponent as Publichealth } from "../assests/public-health.svg";
import ReactFlow, { Background, Controls, Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";
import StaticNode from "./StaticNode";

const ResearchPageAlt = () => {
  function Node({ data, position, children }) {
    const [size, setSize] = useState({
      w: window.innerWidth,
      h: window.innerHeight,
    });

    // update on resize
    useEffect(() => {
      const onResize = () => {
        setSize({ w: window.innerWidth, h: window.innerHeight });
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);

    // convert fraction → pixels
    const px = position.x * size.w;
    const py = position.y * size.h;

    return (
      <g transform={`translate(${px}, ${py})`}>
        {/* your SVG shape */}
        <rect width={150} height={150} rx={20} fill="#fff" stroke="#333" />
        <image href={data.src} width={150} height={150} />
        <text x="75" y="170" textAnchor="middle">
          {data.label}
        </text>
      </g>
    );
  }

  function Edge({ edge, nodes }) {
    const source = nodes.find((n) => n.id === edge.source);
    const target = nodes.find((n) => n.id === edge.target);

    const x1 = source.position.x + 75; // center of node
    const y1 = source.position.y + 75;
    const x2 = target.position.x + 75;
    const y2 = target.position.y + 75;

    return (
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="url(#edgeGradient2)"
        strokeWidth="3"
        strokeDasharray="5 5"
      />
    );
  }
  const nodes = [
    {
      id: "1",
      position: { x: 0.45, y: 0.4 },
      type: "imageNode",
      data: { src: lablogo, alt: "node", width: 150, height: 150 },
    },
    {
      id: "2",
      position: { x: 0.2, y: 0.7 },
      type: "customNode",
      data: { label: "Cardiology", icon: Heart, showTarget: true },
    },
    {
      id: "3",
      position: { x: 0.05, y: 0.7 },
      type: "customNode",
      data: { label: "Neurology", icon: Brain, showTarget: true },
    },
    {
      id: "4",
      position: { x: 0, y: 300 },
      type: "customNode",
      data: { label: "Biomechanics", icon: Biomechanics, showTarget: true },
    },
    {
      id: "5",
      position: { x: 300, y: 300 },
      type: "customNode",
      data: { label: "Cancer", icon: Cell, showTarget: true },
    },
    {
      id: "6",
      position: { x: 600, y: 300 },
      type: "customNode",
      data: { label: "Public Health", icon: Publichealth, showTarget: true },
    },
    {
      id: "7",
      position: { x: -900, y: -300 },
      type: "customNode",
      data: { label: "AI/ML", showSource: true, sourceLocation: "right" },
    },
    {
      id: "8",
      position: { x: -600, y: -500 },
      type: "customNode",
      data: { label: "Commercial Devices", showSource: true },
    },
    {
      id: "9",
      position: { x: -300, y: -600 },
      type: "customNode",
      data: { label: "Computer Vision", showSource: true },
    },
    {
      id: "10",
      position: { x: 0, y: -600 },
      type: "customNode",
      data: { label: "Hardware & Sensors", showSource: true },
    },
    {
      id: "11",
      position: { x: 300, y: -600 },
      type: "customNode",
      data: { label: "NLP", showSource: true },
    },
    {
      id: "12",
      position: { x: 600, y: -500 },
      type: "customNode",
      data: { label: "Robotics", showSource: true },
    },
    {
      id: "13",
      position: { x: 900, y: -300 },
      type: "customNode",
      data: { label: "Software", showSource: true, sourceLocation: "left" },
    },
  ];

  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animated: true,
      style: { stroke: "url(#edgeGradient2)", strokeWidth: 3 },
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      animated: true,
      style: { stroke: "url(#edgeGradient2)", strokeWidth: 3 },
    },
    {
      id: "e1-4",
      source: "1",
      target: "4",
      animated: true,
      style: { stroke: "url(#edgeGradient2)", strokeWidth: 3 },
    },
    {
      id: "e1-5",
      source: "1",
      target: "5",
      animated: true,
      style: { stroke: "url(#edgeGradient2)", strokeWidth: 3 },
    },
    {
      id: "e1-6",
      source: "1",
      target: "6",
      animated: true,
      style: { stroke: "url(#edgeGradient2)", strokeWidth: 3 },
    },
    {
      id: "e1-7",
      source: "7",
      target: "1",
      animated: true,
      style: { stroke: "url(#edgeGradient1)", strokeWidth: 3 },
    },
    {
      id: "e1-8",
      source: "8",
      target: "1",
      animated: true,
      style: { stroke: "url(#edgeGradient1)", strokeWidth: 3 },
    },
    {
      id: "e1-9",
      source: "9",
      target: "1",
      animated: true,
      style: { stroke: "url(#edgeGradient1)", strokeWidth: 3 },
    },
    {
      id: "e1-10",
      source: "10",
      target: "1",
      animated: true,
      style: { stroke: "url(#edgeGradient1)", strokeWidth: 3 },
    },
    {
      id: "e1-11",
      source: "11",
      target: "1",
      animated: true,
      style: { stroke: "url(#edgeGradient1)", strokeWidth: 3 },
    },
    {
      id: "e1-12",
      source: "12",
      target: "1",
      animated: true,
      style: { stroke: "url(#edgeGradient1)", strokeWidth: 3 },
    },
    {
      id: "e1-13",
      source: "13",
      target: "1",
      animated: true,
      style: { stroke: "url(#edgeGradient1)", strokeWidth: 3 },
    },
  ];
  return (
    <svg
      width="100vw"
      height="100vh"
      style={{ background: "red", overflow: "visible" }}
    >
      {nodes.map((node) => (
        <Node key={node.id} {...node} />
      ))}
      {edges.map((edge) => (
        <Edge key={edge.id} edge={edge} nodes={nodes} />
      ))}
    </svg>
  );
};

export default ResearchPageAlt;
