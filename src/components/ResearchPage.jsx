import React, { useContext, useEffect, useLayoutEffect } from "react";
import lablogo from "../assets/SHIELD.png";
import ResearchCard from "./ResearchCard";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { ReactComponent as Brain } from "../assets/brain.svg";
import { ReactComponent as Cell } from "../assets/cell.svg";
import { ReactComponent as Biomechanics } from "../assets/biomechanics.svg";
import { ReactComponent as Publichealth } from "../assets/public-health.svg";
import { ReactComponent as Ai } from "../assets/ai.svg";
import { ReactComponent as Mobile } from "../assets/mobile.svg";
import { ReactComponent as Vision } from "../assets/vision.svg";
import { ReactComponent as Hardware } from "../assets/hardware.svg";
import { ReactComponent as Nlp } from "../assets/nlp.svg";
import { ReactComponent as Software } from "../assets/software.svg";
import { ReactComponent as Hci } from "../assets/hci.svg";
import { ScrollDown } from "./ScrollButtons";
import ReactFlow, {
  useReactFlow,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { CustomNode, ImageNode } from "./CustomNode";
import StaticNode from "./StaticNode";
import { DownwardEdge, DefaultEdge } from "./CustomEdges";
import { researchtopics } from "../webdata/ResearchTopics";
import { ThemeContext } from "../context/ThemeContext";

const ResearchPage = () => {
  const { theme } = useContext(ThemeContext);

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
          <linearGradient id="edgeGradient3" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="lightgray" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
          <linearGradient id="edgeGradient4" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="lightgray" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  const nodeTypes = {
    imageNode: ImageNode,
    customNode: CustomNode,
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
      data: researchtopics["biomechanics"],
    },
    {
      id: "3",
      position: { x: 500, y: 900 },
      type: "customNode",
      data: researchtopics["cancer"],
    },
    {
      id: "4",
      position: { x: 800, y: 900 },
      type: "customNode",
      data: researchtopics["cardiovascular"],
    },

    {
      id: "5",
      position: { x: 1100, y: 900 },
      type: "customNode",
      data: researchtopics["neurology"],
    },

    {
      id: "6",
      position: { x: 1400, y: 900 },
      type: "customNode",
      data: researchtopics["publichealth"],
    },
    {
      id: "7",
      position: { x: 0, y: 380 },
      type: "customNode",
      data: researchtopics["aiml"],
    },
    {
      id: "8",
      position: { x: 200, y: 100 },
      type: "customNode",
      data: researchtopics["commercialdevices"],
    },
    {
      id: "9",
      position: { x: 500, y: 0 },
      type: "customNode",
      data: researchtopics["computervision"],
    },
    {
      id: "10",
      position: { x: 800, y: 0 },
      type: "customNode",
      data: researchtopics["hardware"],
    },
    {
      id: "11",
      position: { x: 1100, y: 0 },
      type: "customNode",
      data: researchtopics["hci"],
    },
    {
      id: "12",
      position: { x: 1400, y: 100 },
      type: "customNode",
      data: researchtopics["nlp"],
    },
    {
      id: "13",
      position: { x: 1600, y: 380 },
      type: "customNode",
      data: researchtopics["software"],
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
      className: `flow-edge ${theme === "light" ? "" : "dark"}`,
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      animated: true,
      sourceHandle: "t2",
      type: "downward",
      className: `flow-edge ${theme === "light" ? "" : "dark"}`,
    },
    {
      id: "e1-4",
      source: "1",
      target: "4",
      animated: true,
      sourceHandle: "t3",
      type: "downward",
      className: `flow-edge ${theme === "light" ? "" : "dark"}`,
    },
    {
      id: "e1-5",
      source: "1",
      target: "5",
      animated: true,
      sourceHandle: "t4",
      type: "downward",
      className: `flow-edge ${theme === "light" ? "" : "dark"}`,
    },
    {
      id: "e1-6",
      source: "1",
      target: "6",
      animated: true,
      sourceHandle: "t5",
      type: "downward",
      className: `flow-edge ${theme === "light" ? "" : "dark"}`,
    },
    {
      id: "e7-1",
      source: "7",
      target: "1",
      targetHandle: "s1",
      animated: true,
      className: `flow-edge ${theme === "light" ? "" : "dark"}`,
    },
    {
      id: "e8-1",
      source: "8",
      target: "1",
      animated: true,
      targetHandle: "s2",
      className: `flow-edge ${theme === "light" ? "" : "dark"}`,
    },
    {
      id: "e9-1",
      source: "9",
      target: "1",
      animated: true,
      className: `flow-edge ${theme === "light" ? "" : "dark"}`,
    },
    {
      id: "e10-1",
      source: "10",
      target: "1",
      animated: true,
      className: `flow-edge ${theme === "light" ? "" : "dark"}`,
    },
    {
      id: "e11-1",
      source: "11",
      target: "1",
      animated: true,
      className: `flow-edge ${theme === "light" ? "" : "dark"}`,
    },
    {
      id: "e12-1",
      source: "12",
      target: "1",
      animated: true,
      targetHandle: "s3",
      className: `flow-edge ${theme === "light" ? "" : "dark"}`,
    },
    {
      id: "e13-1",
      source: "13",
      target: "1",
      animated: true,
      targetHandle: "s4",
      className: `flow-edge ${theme === "light" ? "" : "dark"}`,
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

  useEffect(() => {
    document.querySelectorAll(".flow-edge").forEach((el) => {
      if (theme === "light") {
        el.classList.remove("dark");
      } else {
        el.classList.add("dark");
      }
    });
  }, [theme]);

  return (
    <div className="Research">
      {/* <Placeholder /> */}
      <ScrollDown
        classname={"Scroll-anim-container"}
        sectionid={"page-bottom-sentinel"}
      />
      <ScrollDown
        classname={"Scroll-anim-container"}
        sectionid={"page-bottom-sentinel"}
        id={"Scroll2"}
      />
      <section className="React-flow-container">
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
      </section>
      <h1 className={`Research-header ${theme === "light" ? "" : "dark"}`}>
        Research
      </h1>
      <div className="Research-cards-grid">
        <ResearchCard
          Icon={Ai}
          topic={"AI/ML"}
          description={researchtopics["aiml"].description}
          data={researchtopics["aiml"]}
        />
        <ResearchCard
          Icon={Biomechanics}
          topic={"Biomechanics"}
          description={researchtopics["biomechanics"].description}
          data={researchtopics["biomechanics"]}
        />
        <ResearchCard
          Icon={Cell}
          topic={"Cancer"}
          description={researchtopics["cancer"].description}
          data={researchtopics["cancer"]}
        />
        <ResearchCard
          Icon={Heart}
          topic={"Cardiovascular"}
          description={researchtopics["cardiovascular"].description}
          data={researchtopics["cardiovascular"]}
        />
        <ResearchCard
          Icon={Mobile}
          topic={"Commercial Devices"}
          description={researchtopics["commercialdevices"].description}
          data={researchtopics["commercialdevices"]}
        />
        <ResearchCard
          Icon={Vision}
          topic={"Computer Vision"}
          description={researchtopics["computervision"].description}
          data={researchtopics["computervision"]}
        />
        <ResearchCard
          Icon={Hardware}
          topic={"Hardware & Sensors"}
          description={researchtopics["hardware"].description}
          data={researchtopics["hardware"]}
        />
        <ResearchCard
          Icon={Hci}
          topic={"Human Computer Interaction"}
          description={researchtopics["hci"].description}
          data={researchtopics["hci"]}
        />
        <ResearchCard
          Icon={Nlp}
          topic={"Natural Language Processing"}
          description={researchtopics["nlp"].description}
          data={researchtopics["nlp"]}
        />
        <ResearchCard
          Icon={Brain}
          topic={"Neurology"}
          description={researchtopics["neurology"].description}
          data={researchtopics["neurology"]}
        />
        <ResearchCard
          Icon={Publichealth}
          topic={"Public Health"}
          description={researchtopics["publichealth"].description}
          data={researchtopics["publichealth"]}
        />
        <ResearchCard
          Icon={Software}
          topic={"Software"}
          description={researchtopics["publichealth"].description}
          data={researchtopics["publichealth"]}
        />
      </div>
      <div
        id="page-bottom-sentinel"
        style={{ height: "1px", width: "100%" }}
      ></div>
    </div>
  );
};

export default ResearchPage;
