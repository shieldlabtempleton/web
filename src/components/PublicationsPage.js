import React from "react";
import ReactMarkdown from "react-markdown";
import { FaGoogleScholar } from "react-icons/fa6";

const PublicationsPage = () => {
  return (
    <div className="Publications">
      <div
        style={{
          width: "100%",
          position: "relative",
          display: "flex",
          // background: "red",
        }}
      >
        <h1 className="Publications-header">Publications</h1>
        <a
          style={{ position: "absolute", right: 0, top: 32 }}
          href={
            "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=vBxiFTsAAAAJ&sortby=pubdate"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <FaGoogleScholar
            style={{
              height: "50px",
              width: "50px",
              color: "#005432",
            }}
          /> */}
        </a>
      </div>
      <h2 className="Publication-year">2025</h2>
      <ul className="Publication-group">
        <li>
          Md Mezbahul Islam, John Michael Templeton, Masrur Sobhan, Christian
          Poellabauer, and Ananda Mondal,{" "}
          <strong>
            “X‑SOME: Explainable AI on Subjective and Objective Measurements of
            Parkinson’s Disease for Precision Clinical Decision‑making”
          </strong>
          , The 19th IEEE International Conference on Bioinformatics and
          Biomedicine—Workshop on Machine Learning and Artificial Intelligence
          in Bioinformatics and Medical Informatics (MABM ’25).
        </li>
        <li className="Publication-item">
          Parth Shah, David J. Boughanem, John Michael Templeton, Marzenna
          Wiranowska, and Karim Hanna{" "}
          <strong>
            “Comparative Performance of Large Language Models in Muscle
            Histology Classification Highlights Enhanced Accuracy of ChatGPT‑4o
            in Tissue Identification”
          </strong>{" "}
          Cureus Journal of Medical Science, 2025. (Impact Factor: 3.5).
        </li>
        <li className="Publication-item">
          Samaneh Madanian, Olayinka Adeleye, John Michael Templeton, Christian
          Poellabauer, Talen Chen, Enshi Zhang, and Sandra Schneider{" "}
          <strong>
            “A Multi‑Dilated Convolution Network for Speech Emotion Recognition”
          </strong>
          , Scientific Reports, 2025. (Impact Factor: 4.996)
        </li>
        <li className="Publication-item">
          John Michael Templeton, Christian Poellabauer, Sandra Schneider,
          Morteza Rahimi, Taofeek Braimoh, Fhaheem Tadamarry, Jason Margolesky,
          Shanna Burke, and Zeina Al Masry{" "}
          <strong>
            “Modernizing the Staging of Parkinson’s Disease using Digital Health
            Technology”
          </strong>
          , Journal of Medical Internet Research, 2025. (Impact Factor: 5.8)
        </li>
        <li>
          Enshi Zhang, Varun Sai Raigir, Christian Poellabauer, Adrian Kohut,
          John Michael Templeton, Ananda Mondal, and Lexi Weintraub,{" "}
          <strong>
            “MADSurv: An Uncertainty‑Aware Framework for Multimodal Cancer
            Survival Analysis”
          </strong>
          , The 16th ACM Conference on Bioinformatics, Computational Biology,
          and Health Informatics (ACM BCB ‘25) - Philadelphia, Pennsylvania, USA
          - October 2025.
        </li>
        <li>
          Fredy Rojas, Samaneh Madanian, John Michael Templeton, Christian
          Poellabauer, and Sandra L. Schneider,{" "}
          <strong>
            “Actor‑Independent Emotion Recognition: A Transformer‑Based Approach
            to Speech and Facial Feature Fusion”
          </strong>
          , IEEE Internation Conference on Digital Health (ICDH ‘25) - Helsinki,
          Finland - July 2025.
        </li>
        <li>
          Ashley Pham, Antonio Gonzalez, Gabriel Mozombite Gallegos, Julia
          Woodward, Nathan Schilaty, and John Michael Templeton,{" "}
          <strong>
            “Galactic Glide: A Gamified Physical Therapy Rehabilitation System
            for Adolescent Populations”
          </strong>
          , ACM SIGCHI 2025 ‑ Workshop on Interactive AI for Preventive Health:
          Personalization, Gamification, and Ethics (IAI4PH‘25) - Trier, Germany
          - June 2025 .
        </li>
        <li>
          Jay Hiteshkumar Jariwala, Anika Anjum, Tanvik Reddy Kotha, Hannah M
          Thomas, Jennifer Bleck, Rita DeBate, and John Michael Templeton,
          <strong>
            “MyFoodRx: Design of a Personalized Food‑as‑Medicine Application to
            Promote Food Security and Chronic Disease Management”
          </strong>
          , IEEE SmartComp 2025 ‑ 2nd International Workshop on Digital and
          Mobile Smart Health Systems (DM‑SmartHealth ‘25) - Cork, Ireland -
          June 2025.
        </li>
        <li>
          Ankur Mali, Adrian Kohut, and John Michael Templeton,
          <strong>
            “Chain‑of‑Thought for Cancer Pathology Interpretation and
            Summarization”
          </strong>
          , IEEE SmartComp 2025 ‑ 2nd International Workshop on Digital and
          Mobile Smart Health Systems (DM‑SmartHealth ‘25) - Cork, Ireland -
          June 2025.
        </li>
      </ul>
      <h2 className="Publication-year">2024</h2>
      <ul className="Publication-group">
        <li className="Publication-item">
          Rahmina Rubaiat, John Michael Templeton, Sandra Schneider, Samaneh
          Madanian, Upeka Madhavi De Silva Kalumith, Christian Poellabauer{" "}
          <strong>
            “A Comparison of Speech Biosignatures of Traumatic Brain Injury and
            Neurodegeneration”
          </strong>{" "}
          Computers in Biology and Medicine; Special Issue: JMIR
          Neurotechnology, 2024. (Impact Factor: 5.8)
        </li>
        <li className="Publication-item">
          Upeka De Silva, Samaneh Madanian, Sharon Olsen, John Michael
          Templeton, Christian Poellabauer, Sandra Schneider, Ajit Narayanan
          <strong>
            “Clinical decision support using speech signal analysis: A
            systematic scoping review of neurological disorders”
          </strong>
          , Journal of Medical Internet Research, 2024. (Impact Factor: 5.8)
        </li>
        <li className="Publication-item">
          Morteza Rahimi, Zeina Al Masry, John Michael Templeton, Christian
          Poellabauer, and Sandra Schneider{" "}
          <strong>
            “A Comprehensive Multi‑Functional Approach for Measuring Parkinson’s
            Disease Severity”
          </strong>{" "}
          Applied Clinical Informatics, 2024. (CiteScore: 4.0).
        </li>
        <li>
          Rafael Trujillo, Enshi Zhang, John Michael Templeton, and Christian
          Poellabauer{" "}
          <strong>
            “Predicting Sleep Deprivation using Self‑Report and Wearable Sensor
            Data”
          </strong>{" "}
          Computers in Biology and Medicine, 2024. (Impact Factor: 7.7)
        </li>
        <li>
          Fredy Rojas, Samaneh Madanian, John Michael Templeton, Christian
          Poellabauer, and Sandra L. Schneider{" "}
          <strong>
            “Exploring Deep Learning and Grad‑CAM for Speech‑Based Detection of
            Mild Traumatic Injury”
          </strong>
          , Proceedings of the IEEE Machine Learning and Big Data 2024 Special
          Sessions ‑ Washington D.C., USA ‑ December 2024.
        </li>
        <li>
          Md Mezbahul Islam, John Michael Templeton, Christian Poellabauer, and
          Ananda Mohan Mondal{" "}
          <strong>
            “REDONE‑PD: Reflection of Dopamine‑related Mutated Genes of
            Parkinson’s Disease in Neurocognitive Functions”
          </strong>
          , Proceedings of the IEEE Workshop on Bioinformatics and Biomedicine
          (BIBM ’24 Workshop) ‑ Virtual Conference ‑ November 2024.
        </li>
      </ul>
      <h2 className="Publication-year">2023</h2>
      <ul className="Publication-group">
        <li className="Publication-item">
          Enshi Zhang, Rafael Trujillo, John Michael Templeton, and Christian
          Poellabauer{" "}
          <strong>
            “A Survey on Mobile Crowd Sensing Systems in Healthcare Scenarios”
          </strong>{" "}
          IEEE Access, 2023. (Impact Factor: 3.9)
        </li>
        <li>
          Talen Chen, Samaneh Madanian, Olayinka Adeleye, Dave Parry, Christian
          Poellabauer, John Michael Templeton, and Sandra Schneider,{" "}
          <strong>
            “Speech Emotion Recognition using Machine Learning — A Systematic
            Review of Literature”
          </strong>
          , Journal of Intelligent Systems with Applications, 2023. (CiteScore:
          4.6)
        </li>
        <li>
          Morteza Rahimi, Zeina Al Masry, John Michael Templeton, Christian
          Poellabauer, and Sandra Schneider{" "}
          <strong>
            “Beyond Motor Symptoms: Toward a Comprehensive Grading of
            Parkinson’s Disease Severity”
          </strong>{" "}
          ACM Conference on Bioinformatics, Computational Biology, and Health
          Informatics (ACM BCB) – Houston, Texas, USA – September 2023.
        </li>
        <li>
          Jian Yang, Bryan (Ning) Xia, John Bailey, Yuan Gong, John Michael
          Templeton, and Christian Poellabauer{" "}
          <strong>
            “Improving Computational Efficiency of Voice Anti‑Spoofing Models”
          </strong>
          , IEEE 20th International Conference on Mobile Ad Hoc and Smart
          Systems (MASS 2023) – Toronto, Canada – September 2023.
        </li>
        <li>
          Upeka De Silva, Samaneh Madanian, John Michael Templeton, Christian
          Poellabauer, Sandra L. Schneider, and Dave Parry{" "}
          <strong>
            “Mental Health Monitoring: Design Concept of a Smartphone
            Application”
          </strong>{" "}
          MEDINFO 2023: 19th World Congress on Medical and Health Informatics –
          Sydney, NSW, Australia – August 2023.
        </li>
      </ul>
    </div>
  );
};

export default PublicationsPage;
