import React from "react";
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

const ResearchPage = () => {
  const nodeTypes = {
    imageNode: () => (
      <div>
        <img
          src={lablogo}
          style={{ height: "170px", width: "170px", cursor: "pointer" }}
        />
        <Handle
          type="target"
          position={Position.Top}
          style={{ background: "#555" }}
          isConnectable={false}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          style={{ background: "#555" }}
          isConnectable={false}
        />
      </div>
    ),
    customNode: CustomNode, // 👈 register the custom node
    staticNode: StaticNode,
  };
  const nodes = [
    {
      id: "1",
      position: { x: 0, y: -100 },
      type: "imageNode",
      data: { src: lablogo, alt: "node", width: 150, height: 150 },
    },
    {
      id: "2",
      position: { x: -600, y: 300 },
      type: "customNode",
      data: { label: "Cardiology", icon: Heart, showTarget: true },
    },
    {
      id: "3",
      position: { x: -300, y: 300 },
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
      position: { x: -600, y: -600 },
      type: "customNode",
      data: { label: "Card 1", showSource: true },
    },
    {
      id: "8",
      position: { x: -300, y: -600 },
      type: "customNode",
      data: { label: "Card 2", showSource: true },
    },
    {
      id: "9",
      position: { x: 0, y: -600 },
      type: "customNode",
      data: { label: "Card 3", showSource: true },
    },
    {
      id: "10",
      position: { x: 300, y: -600 },
      type: "customNode",
      data: { label: "Card 4", showSource: true },
    },
    {
      id: "11",
      position: { x: 600, y: -600 },
      type: "customNode",
      data: { label: "Card 5", showSource: true },
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
  ];
  return (
    <div className="Research">
      <Placeholder />
      {/* <h1 className="Research-header">Research</h1> */}
      <div className="Research-items">
        {/* <ResearchCard Icon={Biomechanics} topic={"Biomechanics"} />
        <ResearchCard Icon={Cell} topic={"Cancer"} />
        <ResearchCard Icon={Heart} topic={"Cardiology"} description={""} />
        <ResearchCard Icon={Brain} topic={"Neurology"} />
        <ResearchCard Icon={Publichealth} topic={"Public Health"} /> */}
      </div>
      {/* <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          zoomOnScroll={false}
          zoomOnPinch={false}
          panOnDrag={false}
          panOnScroll={false}
          fitView={true}
          preventScrolling={false}
          nodeTypes={nodeTypes}
          proOptions={{ hideAttribution: true }}
        >
          <svg>
            <defs>
              <linearGradient id="edgeGradient1" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#005432" />
                <stop offset="100%" stopColor="#9ccb3b" />
              </linearGradient>
              <linearGradient id="edgeGradient2" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#9ccb3b" />
                <stop offset="100%" stopColor="#005432" />
              </linearGradient>
            </defs>
          </svg>
        </ReactFlow>
      </div> */}
    </div>
  );
};

export default ResearchPage;
