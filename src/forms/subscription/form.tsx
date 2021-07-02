import React, { useState, useRef } from "react";
import Button from '../../atoms/Button/Button'

import './form.scss';
import './form-mb.scss';

const Form = () => {
    const [setActive, setActiveState] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null)

    function watchInput() {
        if (inputRef.current !== null) {
        setActiveState(`${inputRef.current}` !==  "" ? "active" : "");
        }
    }

    return (
        <>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form>
                <div className='input-wrapper'>
                    <input type="email" ref={inputRef} className={`${setActive}`} onChange={watchInput}></input>
                    <label>Email address</label>
                </div>
                <Button>Get Started</Button>
            </form>
        </>
        )
    }

export default Form;