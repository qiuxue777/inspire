import React, { useState } from "react";

import ss from "./Flex.scss";

import Markdown from "../MarkdownCode";
import Title from "../Title";

const case1 = `<div style="display: flex; flex-direction: row;">
  <div style="width: 50px;">1</div>
  <div style="width: 50px;">2</div>
  <div style="width: 50px;">3</div>
</div>
`;

const Block: React.FC = () => {
    const [states, setStates] = useState(new Array<boolean>(46).fill(false));

    const isHidden = (index: number) => (states[index] ? "":ss.hidden);

    const changeState = (index: number) => {
        const newStates = [...states];
        newStates[index] = !newStates[index];
        setStates(newStates);
    };

    return (
        <>
          <div>
            <div className={ss.part}>
                <Title title="1、flex-direction: row" click= {changeState} index={1} />
                <Markdown>{case1}</Markdown>
                <div style={{ display: "flex", flexDirection: "row", border: "1px solid #5C3A21"}} className={isHidden(1)}>
                    <div style={{ width: "50px", background: "#E07A5F" }}>1</div>
                    <div style={{ width: "50px", background: "#F4F1DE" }}>2</div>
                    <div style={{ width: "50px", background: "#81B29A" }}>3</div>
                </div>
            </div>
          </div>
        </>
     );
};

export default Block;