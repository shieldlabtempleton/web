import React, { useEffect, useLayoutEffect } from "react";
import lablogo from "../assests/SHIELD.png";
import Placeholder from "./Placeholder";
import ResearchCard from "./ResearchCard";
import { ReactComponent as Heart } from "../assests/heart.svg";
import { ReactComponent as Brain } from "../assests/brain.svg";
import { ReactComponent as Cell } from "../assests/cell.svg";
import { ReactComponent as Biomechanics } from "../assests/biomechanics.svg";
import { ReactComponent as Publichealth } from "../assests/public-health.svg";
import { ReactComponent as Ai } from "../assests/ai.svg";
import { ReactComponent as Mobile } from "../assests/mobile.svg";
import { ReactComponent as Vision } from "../assests/vision.svg";
import { ReactComponent as Hardware } from "../assests/hardware.svg";
import { ReactComponent as Nlp } from "../assests/nlp.svg";
import { ReactComponent as Robotics } from "../assests/robotics.svg";
import { ReactComponent as Software } from "../assests/software.svg";
import { ReactComponent as Hci } from "../assests/hci.svg";
import ScrollDown from "./ScrollButton";
import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
  useReactFlow,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { CustomNode, ImageNode } from "./CustomNode";
import StaticNode from "./StaticNode";
import DownwardEdge from "./CustomEdges";

const ResearchPage = () => {
  const sw = 5;
  const opac = 0;

  function CenterHorizontally({ nodes }) {
    const { setViewport } = useReactFlow();

    useLayoutEffect(() => {
      if (!nodes.length) return;

      // Find leftmost and rightmost edges of nodes
      const xPositions = nodes.map((node) => node.position.x);
      const nodeWidths = nodes.map((node) => node.data?.width || 0);

      const left = Math.min(...xPositions);
      const right = Math.max(...xPositions.map((x, i) => x + 200));

      const nodesWidth = right - left;

      // Container width
      const containerWidth = window.innerWidth;

      // Compute offset to center nodes horizontally
      const offsetX = (containerWidth - nodesWidth * 0.5) / 2;

      const offsetY = 20; // optional top padding
      // console.log(left, right, nodesWidth, containerWidth);

      setViewport({
        x: offsetX,
        y: offsetY,
        zoom: 0.5, // initial zoom level
      });
    }, [nodes, setViewport]);

    return null;
  }

  function AutoFitViewOnResize() {
    const { fitView } = useReactFlow();

    useEffect(() => {
      const handleResize = () => {
        fitView({ padding: 0.2, duration: 0 });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [fitView]);

    return null; // nothing to render
  }

  function EdgeGradient() {
    return (
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
    );
  }

  const nodeTypes = {
    imageNode: ImageNode,
    customNode: CustomNode, // 👈 register the custom node
    staticNode: StaticNode,
  };

  const edgeTypes = {
    downward: DownwardEdge,
  };

  const initialNodes = [
    {
      id: "1",
      position: { x: 774, y: 500 },
      type: "imageNode",
      data: {
        src: lablogo,
        alt: "node",
        image: lablogo,
        opac: 0,
        width: 150,
        height: 150,
      },
    },
    {
      id: "2",
      position: { x: 200, y: 900 },
      type: "customNode",
      data: { label: "Biomechanics", icon: Biomechanics, showTarget: true },
    },
    {
      id: "3",
      position: { x: 500, y: 900 },
      type: "customNode",
      data: { label: "Cancer", icon: Cell, showTarget: true },
    },
    {
      id: "4",
      position: { x: 800, y: 900 },
      type: "customNode",
      data: { label: "Cardiovascular", icon: Heart, showTarget: true },
    },

    {
      id: "5",
      position: { x: 1100, y: 900 },
      type: "customNode",
      data: { label: "Neurology", icon: Brain, showTarget: true },
    },

    {
      id: "6",
      position: { x: 1400, y: 900 },
      type: "customNode",
      data: { label: "Public Health", icon: Publichealth, showTarget: true },
    },
    {
      id: "7",
      position: { x: 0, y: 350 },
      type: "customNode",
      data: {
        label: "AI/ML",
        showSource: true,
        icon: Ai,
        sourceLocation: "right",
        description:
          "AI/ML enable early disease detection, precision diagnostics, and personalized treatment by uncovering complex patterns in multimodal clinical data.",
      },
    },
    {
      id: "8",
      position: { x: 200, y: 100 },
      type: "customNode",
      data: {
        label: "Commercial Devices",
        icon: Mobile,
        description:
          "Commercial devices like fitness trackers are becoming clinically relevant data sources, offering continuous monitoring to support remote care.",
        showSource: true,
      },
    },
    {
      id: "9",
      position: { x: 500, y: 0 },
      type: "customNode",
      data: {
        label: "Computer Vision",
        icon: Vision,
        description:
          "Computer vision allows for interpreting medical images—such as MRI or CT—for classification and staging of disease presence or progression.",
        showSource: true,
      },
    },
    {
      id: "10",
      position: { x: 800, y: 0 },
      type: "customNode",
      data: {
        label: "Hardware & Sensors",
        icon: Hardware,
        description:
          "Novel hardware/sensor deployments can capture real-time physiological signals enabling continuous, high-resolution assessment of patient health.",
        showSource: true,
      },
    },
    {
      id: "11",
      position: { x: 1100, y: 0 },
      type: "customNode",
      data: {
        label: "Human Computer Interaction",
        icon: Hci,
        description:
          "HCI for health focuses on designing intuitive interfaces that allow patients and clinicians to interact with technology without frustration or error.",
        iconid: "HCI-icon",
        showSource: true,
      },
    },
    {
      id: "12",
      position: { x: 1400, y: 100 },
      type: "customNode",
      data: {
        label: "Natural Language Processing",
        icon: Nlp,
        description:
          "NLP is useful in extracting clinically meaningful insights from unstructured data such as physician notes, patient portals, and electronic health records.",
        showSource: true,
      },
    },
    {
      id: "13",
      position: { x: 1600, y: 350 },
      type: "customNode",
      data: {
        label: "Software",
        showSource: true,
        icon: Software,
        description:
          "Software design in health ensures that digital tools—such as dashboards, mobile apps, etc.—are usable, secure, and aligned with user needs.",
        sourceLocation: "left",
      },
    },
  ];

  const initialEdges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animated: true,
      sourceHandle: "t1",
      type: "downward",
      style: { strokeWidth: sw },
      className: `flow-edge`,
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      animated: true,
      sourceHandle: "t2",
      type: "downward",
      style: { strokeWidth: sw },
      className: `flow-edge`,
    },
    {
      id: "e1-4",
      source: "1",
      target: "4",
      animated: true,
      sourceHandle: "t3",
      style: { strokeWidth: sw },
      className: `flow-edge`,
    },
    {
      id: "e1-5",
      source: "1",
      target: "5",
      animated: true,
      sourceHandle: "t4",
      type: "downward",
      style: { strokeWidth: sw },
      className: `flow-edge`,
    },
    {
      id: "e1-6",
      source: "1",
      target: "6",
      animated: true,
      sourceHandle: "t5",
      type: "downward",
      style: { strokeWidth: sw },
      className: `flow-edge`,
    },
    {
      id: "e7-1",
      source: "7",
      target: "1",
      targetHandle: "s1",
      animated: true,
      style: { strokeWidth: sw },
      className: `flow-edge`,
    },
    {
      id: "e8-1",
      source: "8",
      target: "1",
      animated: true,
      targetHandle: "s2",
      style: { strokeWidth: sw },
      className: `flow-edge`,
    },
    {
      id: "e9-1",
      source: "9",
      target: "1",
      animated: true,
      style: { strokeWidth: sw },
      className: `flow-edge`,
    },
    {
      id: "e10-1",
      source: "10",
      target: "1",
      animated: true,
      style: { strokeWidth: sw },
      className: `flow-edge`,
    },
    {
      id: "e11-1",
      source: "11",
      target: "1",
      animated: true,
      style: { strokeWidth: sw },
      className: `flow-edge`,
    },
    {
      id: "e12-1",
      source: "12",
      target: "1",
      animated: true,
      targetHandle: "s3",
      style: { strokeWidth: sw },
      className: `flow-edge`,
    },
    {
      id: "e13-1",
      source: "13",
      target: "1",
      animated: true,
      targetHandle: "s4",
      style: { strokeWidth: sw },
      className: `flow-edge`,
    },
  ];

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
    2: ["e1-2", "e7-1", "e9-1", "e10-1", "e11-1"],
    3: ["e1-3", "e7-1", "e9-1", "e12-1"],
    4: ["e1-4", "e7-1", "e8-1", "e10-1"],
    5: ["e1-5", "e7-1", "e8-1", "e9-1", "e10-1", "e11-1", "e13-1"],
    6: ["e1-6", "e8-1", "e12-1", "e13-1"],
    7: ["e7-1", "e1-2", "e1-3", "e1-4", "e1-5"],
    8: ["e8-1", "e1-2", "e1-4", "e1-5", "e1-6"],
    9: ["e9-1", "e1-2", "e1-4"],
    10: ["e10-1", "e1-2", "e1-4", "e1-5"],
    11: ["e11-1", "e1-2", "e1-5"],
    12: ["e12-1", "e1-3", "e1-6"],
    13: ["e13-1", "e1-5", "e1-6"],
  };

  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  function highlightEdges(edgeIds) {
    requestAnimationFrame(() => {
      document.querySelectorAll(".flow-edge").forEach((el) => {
        const testid = el.getAttribute("data-testid"); // e.g., "rf__edge-e1-4"
        const path = el.querySelector(".react-flow__edge-path");
        if (!path) return;

        // Extract edge ID from testid
        // Example: "rf__edge-e1-4" → "e1-4"
        const id = testid?.replace("rf__edge-", "");
        const edge = edges.find((e) => e.id === id);

        if (edgeIds.includes(id)) {
          if (edge.source === "1") {
            path.style.stroke = "url(#edgeGradient2)";
          } else {
            path.style.stroke = "url(#edgeGradient1)";
          }
          path.style.strokeWidth = "7";
          path.style.filter = "drop-shadow(0 0 10px #7cb900)";
        } else {
          path.style.stroke = "lightgray";
          path.style.strokeWidth = "5";
          path.style.filter = "drop-shadow(0 0 0px #fff)";
        }
      });
    });
  }

  useEffect(() => {
    const handler = (e) => highlightEdges(e.detail);
    window.addEventListener("highlight-edges", handler);
    return () => window.removeEventListener("highlight-edges", handler);
  }, []);

  return (
    <div className="Research">
      {/* <Placeholder /> */}
      <ScrollDown classname={"Scroll-anim-container"} />
      <ScrollDown classname={"Scroll-anim-container"} id={"Scroll2"} />
      <div className="React-flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          panOnDrag={false}
          panOnScroll={false}
          // fitView={true}
          preventScrolling={false}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          proOptions={{ hideAttribution: true }}
        >
          <CenterHorizontally nodes={nodes} />
          <AutoFitViewOnResize />
          <EdgeGradient />
        </ReactFlow>
      </div>
      <h1 className="Research-header">Research</h1>
      <div className="Research-cards-grid">
        <ResearchCard Icon={Ai} topic={"AI/ML"} />
        <ResearchCard Icon={Biomechanics} topic={"Biomechanics"} />
        <ResearchCard Icon={Cell} topic={"Cancer"} />
        <ResearchCard Icon={Heart} topic={"Cardiology"} description={""} />
        <ResearchCard Icon={Mobile} topic={"Commercial Devices"} />
        <ResearchCard Icon={Vision} topic={"Computer Vision"} />
        <ResearchCard Icon={Hardware} topic={"Hardware & Sensors"} />
        <ResearchCard Icon={Hci} topic={"Human Computer Interaction"} />
        <ResearchCard Icon={Nlp} topic={"Natural Language Processing"} />
        <ResearchCard Icon={Brain} topic={"Neurology"} />
        <ResearchCard Icon={Publichealth} topic={"Public Health"} />
        <ResearchCard Icon={Software} topic={"Software"} />
      </div>
    </div>
  );
};

export default ResearchPage;
