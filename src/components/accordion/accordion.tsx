import React, { useState, useRef } from "react";
import PlusIcon from "../../atoms/Icons/PlusIcon";
import "./accordion.scss";
import "./accordion-mb.scss";

interface Props {
    title: string;
    content: any;
}

const Accordion = ({ title, content }: Props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const divRef = useRef<HTMLHeadingElement>(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        if (divRef.current !== null) {
            setHeightState(
                setActive === "active" ? "0px" : `${divRef.current.scrollHeight}px`
            );
        }
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }


    return (
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title">{title}</p>
                <PlusIcon className={`${setRotate}`} width={20} fill={"#777"} />
            </button>
            <div
                ref={divRef}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content"
            >
                <div
                    className="accordion__text"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    )
}

export default Accordion