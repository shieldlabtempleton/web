import biomechanicsthumbnail1 from "../assets/gg.png";
import biomechanicsthumbnail2 from "../assets/mg.jpeg";

export const biomechanics = [
  {
    thumbnail: biomechanicsthumbnail1,
    title: "Gamified Wearable Therapy",
    description:
      " A wearable EMG sensor array connects real movement to on-screen gameplay, turning children's therapy into an intuitive, motivating experience. The system adapts to each child, supports clinician-guided adjustments, and tracks progress to enhance long-term physical outcomes.",
    keywords: ["Biomechanics", "HCI", "Hardware"],
  },
  //   {
  //     thumbnail: biomechanicsthumbnail2,
  //     title: "Multi-Sensor Smart Mouthguard",
  //     description:
  //       " A custom-fit, biocompatible mouthguard integrates force, motion, and physiological sensors to monitor bite force, head impacts, heart rate, oxygen saturation, and temperature in real time. An onboard microcontroller synchronizes data and enables secure, low-power wireless transmission for high-fidelity impact monitoring.",
  //     keywords: ["Biomechanics", "Neurology", "Hardware"],
  //   },
  //   {
  //     thumbnail: biomechanicsthumbnail2,
  //     title: "Multi-Sensor Smart Mouthguard",
  //     description:
  //       " A custom-fit, biocompatible mouthguard integrates force, motion, and physiological sensors to monitor bite force, head impacts, heart rate, oxygen saturation, and temperature in real time. An onboard microcontroller synchronizes data and enables secure, low-power wireless transmission for high-fidelity impact monitoring.",
  //     keywords: ["Biomechanics", "Neurology", "Hardware"],
  //   },
];

export const researchtopics = {
  biomechanics: {
    label: "Biomechanics",
    slug: "biomechanics",
    icon: "Biomechanics",
    description:
      "Analyzing biomechanics via sensor-driven systems for movement, joint loading, and injury risk can guide rehabilitation, athletic training, etc.",
    showTarget: true,
    researchdata: [
      {
        thumbnail: biomechanicsthumbnail1,
        title: "Gamified Wearable Therapy",
        description:
          " A wearable EMG sensor array connects real movement to on-screen gameplay, turning children's therapy into an intuitive, motivating experience. The system adapts to each child, supports clinician-guided adjustments, and tracks progress to enhance long-term physical outcomes.",
        keywords: ["Biomechanics", "Hardware", "HCI"],
      },
      {
        thumbnail: biomechanicsthumbnail2,
        title: "Multi-Sensor Smart Mouthguard",
        description:
          " A custom-fit, biocompatible mouthguard integrates force, motion, and physiological sensors to monitor bite force, head impacts, heart rate, oxygen saturation, and temperature in real time. An onboard microcontroller synchronizes data and enables secure, low-power wireless transmission for high-fidelity impact monitoring.",
        keywords: ["Biomechanics", "Hardware", "Neurology"],
      },
      // {
      //   thumbnail: biomechanicsthumbnail2,
      //   title: "Multi-Sensor Smart Mouthguard",
      //   description:
      //     " A custom-fit, biocompatible mouthguard integrates force, motion, and physiological sensors to monitor bite force, head impacts, heart rate, oxygen saturation, and temperature in real time. An onboard microcontroller synchronizes data and enables secure, low-power wireless transmission for high-fidelity impact monitoring.",
      //   keywords: ["Biomechanics", "Neurology", "Hardware"],
      // },
    ],
  },

  cancer: {
    label: "Cancer",
    slug: "cancer",
    icon: "Cell",
    description:
      "Cancer detection/classification, risk profiling, and personalized treatment is improved by integrating genomic, imaging, and clinical data into clinical workflows.",
    showTarget: true,
  },

  cardiovascular: {
    label: "Cardiovascular",
    slug: "cardiovascular",
    icon: "Heart",
    description:
      "Automated ECG interpretation and respiratory function analysis using continuous wearable-based monitoring can support risk assessment for early intervention.",
    showTarget: true,
  },

  neurology: {
    label: "Neurology",
    slug: "neurology",
    icon: "Brain",
    description:
      "Neuroimaging, speech, and gait analysis can enable early detection, classification, staging, and monitoring of neurological disorders.",
    showTarget: true,
  },

  publichealth: {
    label: "Public Health",
    slug: "public-health",
    icon: "Publichealth",
    description:
      "Enabling disease surveillance, predictive modeling, and digital literacy tools can help agencies improve community outreach and data-driven decision-making.",
    showTarget: true,
  },

  aiml: {
    label: "AI/ML",
    slug: "ai-ml",
    showSource: true,
    icon: "Ai",
    sourceLocation: "right",
    description:
      "AI/ML enable early disease detection, precision diagnostics, and personalized treatment by uncovering complex patterns in multimodal clinical data.",
  },

  commercialdevices: {
    label: "Commercial Devices",
    slug: "commercial-devices",
    icon: "Mobile",
    description:
      "Commercial devices like fitness trackers are becoming clinically relevant data sources, offering continuous monitoring to support remote care.",
    showSource: true,
  },

  computervision: {
    label: "Computer Vision",
    slug: "computer-vision",
    icon: "Vision",
    description:
      "Computer vision allows for interpreting medical images—such as MRI or CT—for classification and staging of disease presence or progression.",
    showSource: true,
  },

  hardware: {
    label: "Hardware & Sensors",
    slug: "hardware",
    icon: "Hardware",
    description:
      "Novel hardware/sensor deployments can capture real-time physiological signals enabling continuous, high-resolution assessment of patient health.",
    showSource: true,
  },

  hci: {
    label: "Human Computer Interaction",
    slug: "hci",
    icon: "Hci",
    description:
      "HCI for health focuses on designing intuitive interfaces that allow patients and clinicians to interact with technology without frustration or error.",
    iconid: "HCI-icon",
    showSource: true,
  },

  nlp: {
    label: "Natural Language Processing",
    slug: "nlp",
    icon: "Nlp",
    description:
      "NLP is useful in extracting clinically meaningful insights from unstructured data such as physician notes, patient portals, and electronic health records.",
    showSource: true,
  },

  software: {
    label: "Software",
    slug: "software",
    showSource: true,
    icon: "Software",
    description:
      "Software design in health ensures that digital tools—such as dashboards, mobile apps, etc.—are usable, secure, and aligned with user needs.",
    sourceLocation: "left",
  },
};
