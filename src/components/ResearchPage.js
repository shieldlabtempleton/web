import React, { useEffect, useLayoutEffect } from "react";
import lablogo from "../assests/SHIELD.png";
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
import { ReactComponent as Software } from "../assests/software.svg";
import { ReactComponent as Hci } from "../assests/hci.svg";
import ScrollDown from "./ScrollButton";
import ReactFlow, {
  useReactFlow,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { CustomNode, ImageNode } from "./CustomNode";
import StaticNode from "./StaticNode";
import { DownwardEdge, DefaultEdge } from "./CustomEdges";

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
      const right = Math.max(...xPositions.map((x, i) => x + 230));

      const nodesWidth = right - left;

      // Container width
      const containerWidth = window.innerWidth;

      // Compute offset to center nodes horizontally
      const offsetX = (containerWidth - nodesWidth * 0.55) / 2;

      const offsetY = 15; // optional top padding
      // console.log(left, right, nodesWidth, containerWidth);

      setViewport({
        x: offsetX,
        y: offsetY,
        zoom: 0.55, // initial zoom level
      });
    }, [nodes, setViewport]);

    return null;
  }

  function AutoFitViewOnResize() {
    const { fitView } = useReactFlow();

    useEffect(() => {
      const handleResize = () => {
        fitView({ padding: 0.2, duration: 0, minZoom: 0.55 });
      };

      // Detect touch device (iPad/mobile)
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;

      let timer = null;

      // For mobile/iPad → use delayed version (handles Safari orientation bugs)
      const runMobile = () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          requestAnimationFrame(() => requestAnimationFrame(handleResize));
        }, 100);
      };

      // For desktop → run immediately (no lag)
      const runDesktop = () => {
        handleResize();
      };

      const handler = isTouchDevice ? runMobile : runDesktop;

      handler(); // run on mount

      window.addEventListener("resize", handler);
      window.addEventListener("orientationchange", handler);
      if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", handler);
      }

      return () => {
        window.removeEventListener("resize", handler);
        window.removeEventListener("orientationchange", handler);
        if (window.visualViewport) {
          window.visualViewport.removeEventListener("resize", handler);
        }
        if (timer) clearTimeout(timer);
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
    default: DefaultEdge,
    downward: DownwardEdge,
  };

  const initialNodes = [
    {
      id: "1",
      position: { x: 791, y: 510 },
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
      data: {
        label: "Biomechanics",
        slug: "biomechanics",
        icon: "Biomechanics",
        description:
          "Analyzing biomechanics via sensor-driven systems for movement, joint loading, and injury risk can guide guide rehabilitation, athletic training, etc.",
        showTarget: true,
      },
    },
    {
      id: "3",
      position: { x: 500, y: 900 },
      type: "customNode",
      data: {
        label: "Cancer",
        slug: "cancer",
        icon: "Cell",
        description:
          "Cancer detection/classification, risk profiling, and personalized treatment is improved by integrating genomic, imaging, and clinical data into clinical workflows.",
        showTarget: true,
      },
    },
    {
      id: "4",
      position: { x: 800, y: 900 },
      type: "customNode",
      data: {
        label: "Cardiovascular",
        slug: "cardiovascular",
        icon: "Heart",
        description:
          "Automated ECG interpretation and respiratory function analysis using continuous wearable-based monitoring can support risk assessment for early intervention.",
        showTarget: true,
      },
    },

    {
      id: "5",
      position: { x: 1100, y: 900 },
      type: "customNode",
      data: {
        label: "Neurology",
        slug: "neurology",
        icon: "Brain",
        description:
          "Neuroimaging, speech, and gait analysis can enable early detection, classification, staging, and monitoring of neurological disorders.",
        showTarget: true,
      },
    },

    {
      id: "6",
      position: { x: 1400, y: 900 },
      type: "customNode",
      data: {
        label: "Public Health",
        slug: "public-health",
        icon: "Publichealth",
        description:
          "Enabling disease surveillance, predictive modeling, and digital literacy tools can help agencies improve community outreach and data-driven decision-making.",
        showTarget: true,
      },
    },
    {
      id: "7",
      position: { x: 0, y: 380 },
      type: "customNode",
      data: {
        label: "AI/ML",
        slug: "ai-ml",
        showSource: true,
        icon: "Ai",
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
        slug: "commercial-devices",
        icon: "Mobile",
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
        slug: "computer-vision",
        icon: "Vision",
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
        slug: "hardware",
        icon: "Hardware",
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
        slug: "hci",
        icon: "Hci",
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
        slug: "nlp",
        icon: "Nlp",
        description:
          "NLP is useful in extracting clinically meaningful insights from unstructured data such as physician notes, patient portals, and electronic health records.",
        showSource: true,
      },
    },
    {
      id: "13",
      position: { x: 1600, y: 380 },
      type: "customNode",
      data: {
        label: "Software",
        slug: "software",
        showSource: true,
        icon: "Software",
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
      className: `flow-edge`,
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      animated: true,
      sourceHandle: "t2",
      type: "downward",
      className: `flow-edge`,
    },
    {
      id: "e1-4",
      source: "1",
      target: "4",
      animated: true,
      sourceHandle: "t3",
      type: "downward",
      className: `flow-edge`,
    },
    {
      id: "e1-5",
      source: "1",
      target: "5",
      animated: true,
      sourceHandle: "t4",
      type: "downward",
      className: `flow-edge`,
    },
    {
      id: "e1-6",
      source: "1",
      target: "6",
      animated: true,
      sourceHandle: "t5",
      type: "downward",
      className: `flow-edge`,
    },
    {
      id: "e7-1",
      source: "7",
      target: "1",
      targetHandle: "s1",
      animated: true,
      className: `flow-edge`,
    },
    {
      id: "e8-1",
      source: "8",
      target: "1",
      animated: true,
      targetHandle: "s2",
      className: `flow-edge`,
    },
    {
      id: "e9-1",
      source: "9",
      target: "1",
      animated: true,
      className: `flow-edge`,
    },
    {
      id: "e10-1",
      source: "10",
      target: "1",
      animated: true,
      className: `flow-edge`,
    },
    {
      id: "e11-1",
      source: "11",
      target: "1",
      animated: true,
      className: `flow-edge`,
    },
    {
      id: "e12-1",
      source: "12",
      target: "1",
      animated: true,
      targetHandle: "s3",
      className: `flow-edge`,
    },
    {
      id: "e13-1",
      source: "13",
      target: "1",
      animated: true,
      targetHandle: "s4",
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
        const testid = el.getAttribute("data-testid");
        const id = testid?.replace("rf__edge-", "");
        const edge = edges.find((e) => e.id === id);

        if (!edge) return;

        if (edgeIds.includes(id)) {
          el.classList.add("edge-highlight");

          if (edge.source === "1") {
            el.classList.add("source-1");
          } else {
            el.classList.remove("source-1");
          }
        } else {
          el.classList.remove("edge-highlight", "source-1");
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
        <ResearchCard
          Icon={Ai}
          topic={"AI/ML"}
          description={
            "AI/ML enable early disease detection, precision diagnostics, and personalized treatment by uncovering complex patterns in multimodal clinical data."
          }
        />
        <ResearchCard
          Icon={Biomechanics}
          topic={"Biomechanics"}
          description={
            "Analyzing biomechanics via sensor-driven systems for movement, joint loading, and injury risk can guide guide rehabilitation, athletic training, etc."
          }
        />
        <ResearchCard
          Icon={Cell}
          topic={"Cancer"}
          description={
            "Cancer detection/classification, risk profiling, and personalized treatment is improved by integrating genomic, imaging, and clinical data into clinical workflows."
          }
        />
        <ResearchCard
          Icon={Heart}
          topic={"Cardiovascular"}
          description={
            "Automated ECG interpretation and respiratory function analysis using continuous wearable-based monitoring can support risk assessment for early intervention."
          }
        />
        <ResearchCard
          Icon={Mobile}
          topic={"Commercial Devices"}
          description={
            "Commercial devices like fitness trackers are becoming clinically relevant data sources, offering continuous monitoring to support remote care."
          }
        />
        <ResearchCard
          Icon={Vision}
          topic={"Computer Vision"}
          description={
            "Computer vision allows for interpreting medical images—such as MRI or CT—for classification and staging of disease presence or progression."
          }
        />
        <ResearchCard
          Icon={Hardware}
          topic={"Hardware & Sensors"}
          description={
            "Novel hardware/sensor deployments can capture real-time physiological signals enabling continuous, high-resolution assessment of patient health."
          }
        />
        <ResearchCard
          Icon={Hci}
          topic={"Human Computer Interaction"}
          description={
            "HCI for health focuses on designing intuitive interfaces that allow patients and clinicians to interact with technology without frustration or error."
          }
        />
        <ResearchCard
          Icon={Nlp}
          topic={"Natural Language Processing"}
          description={
            "NLP is useful in extracting clinically meaningful insights from unstructured data such as physician notes, patient portals, and electronic health records."
          }
        />
        <ResearchCard
          Icon={Brain}
          topic={"Neurology"}
          description={
            "Neuroimaging, speech, and gait analysis can enable early detection, classification, staging, and monitoring of neurological disorders."
          }
        />
        <ResearchCard
          Icon={Publichealth}
          topic={"Public Health"}
          description={
            "Enabling disease surveillance, predictive modeling, and digital literacy tools can help agencies improve community outreach and data-driven decision-making."
          }
        />
        <ResearchCard
          Icon={Software}
          topic={"Software"}
          description={
            "Software design in health ensures that digital tools—such as dashboards, mobile apps, etc.—are usable, secure, and aligned with user needs."
          }
        />
      </div>
    </div>
  );
};

export default ResearchPage;
