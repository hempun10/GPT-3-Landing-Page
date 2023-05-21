import "./whatGPT3.css";
import { Feature } from "../../components";
const WhatGPT3 = () => {
  return (
    <div className="gpt3_whatgpt3 section_margin" id="wgpt3">
      <div className="gpt3_whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Starting with the very basics, GPT-3 stands for Generative Pre-trained Transformer 3 – it's the third version of the tool to be released. In short, this means that it generates text using algorithms that are pre-trained – they've already been fed all of the data they need to carry out their task.
"
        />
      </div>
      <div className="gpt3_whatgpt3-heading">
        <h1 className="gradient_text">
          The possibility beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3_whatgpt3-container">
        <Feature
          title={"Chat Bots"}
          text={
            "Enhancing automated instant messaging services with GPT-3 technology provides the tools to analyze and understand customer queries and carry on a human-like conversation. GPT-3 adds an instant boost of contextual understanding and pattern recognition to scripted bots."
          }
        />
        <Feature
          title={"Knowledge base"}
          text={
            "That model can then be used to generate prose (or even code) that seems like it was written by a real person. In simple terms, language models help computers estimate the probability of word sequences."
          }
        />
        <Feature
          title={"Eduction"}
          text={
            "GPT-3 can be used to help students write better essays, reports, speeches and stories. The AI-based tool is capable of analyzing more than a hundred thousand sentences per second to ensure that the content being produced is grammatically correct."
          }
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
