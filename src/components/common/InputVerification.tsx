import React, { FormEvent, KeyboardEvent, SetStateAction, useRef, useState, ClipboardEvent } from 'react'
import './InputVerification.scss';

interface Props {
    codeSet: React.Dispatch<React.SetStateAction<any>>;
}

const InputVerification = (props: Props) => {

    const char1 = useRef<HTMLInputElement | any>();
    const char2 = useRef<HTMLInputElement | any>();
    const char3 = useRef<HTMLInputElement | any>();
    const char4 = useRef<HTMLInputElement | any>();
    const char5 = useRef<HTMLInputElement | any>();
    const char6 = useRef<HTMLInputElement | any>();

    const inputs: Array<HTMLInputElement | any> = [char1, char2, char3, char4, char5, char6]

    const getCompleteCode = (): string => {
        let code = '';
        inputs.forEach(val => {
            code += val?.current?.value;
        });
        return code;
    }

    const inputPress = (event: FormEvent<HTMLInputElement>) => {
        const i = parseInt(event.currentTarget.id.substring(5, 6));
        let upper =  inputs[i].current.value;
        inputs[i].current.value = upper.toUpperCase(); // Converts to Upper case. Remove .toUpperCase() if conversion isnt required.
        if (i === inputs.length - 1 && inputs[i].current.value !== '') {
           // return true;
        } else if (inputs[i].current.value !== '') {
            inputs[i + 1].current.focus();
        }
        props.codeSet(getCompleteCode());
    }
    
    const keyDownEvent = (event: KeyboardEvent) => {
        const i = parseInt(event.currentTarget.id.substring(5, 6));

        if (event.key === "Backspace") {
            if (inputs[i].current.value == '') {
                if (i != 0) {
                    inputs[i - 1].current.focus();
                }
            } else {
                inputs[i].current.value = '';
            }
        } else if (event.key === "ArrowLeft" && i !== 0) {
            inputs[i - 1].current.focus();
        } else if (event.key === "ArrowRight" && i !== inputs.length - 1) {
            inputs[i + 1].current.focus();
        } else if (event.key != "ArrowLeft" && event.key != "ArrowRight") {
            //inputs[i].setAttribute("type", "text");
            //inputs[i].value = ''; 
            /*setTimeout(function() {
                inputs[i].setAttribute("type", "password");
            }, 1000); */
        }
    }   

    const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
      event.clipboardData
        .getData("Text")
        .split("")
        .forEach((val: string, i: number) => {
          inputs[i].current.value = val;
          inputs[i].current.focus();
        });
    };

    return (
      <div className="code-ver">
        <label htmlFor="Enter verification code">Enter verification code</label>
        <div className="input-verification" id="OTPInput">
          <input
            className="code-ver__input-container__input"
            ref={char1}
            onInput={inputPress}
            onKeyDown={keyDownEvent}
            onPaste={handlePaste}
            id="chart0"
            maxLength={1}
          />
          <input
            className="code-ver__input-container__input"
            ref={char2}
            onInput={inputPress}
            onKeyDown={keyDownEvent}
            onPaste={handlePaste}
            id="chart1"
            maxLength={1}
          />
          <input
            className="code-ver__input-container__input"
            ref={char3}
            onInput={inputPress}
            onKeyDown={keyDownEvent}
            onPaste={handlePaste}
            id="chart2"
            maxLength={1}
          />
          <input
            className="code-ver__input-container__input"
            ref={char4}
            onInput={inputPress}
            onKeyDown={keyDownEvent}
            onPaste={handlePaste}
            id="chart3"
            maxLength={1}
          />
          <input
            className="code-ver__input-container__input"
            ref={char5}
            onInput={inputPress}
            onKeyDown={keyDownEvent}
            onPaste={handlePaste}
            id="chart4"
            maxLength={1}
          />
          <input
            className="code-ver__input-container__input"
            ref={char6}
            onInput={inputPress}
            onKeyDown={keyDownEvent}
            onPaste={handlePaste}
            id="chart5"
            maxLength={1}
          />
        </div>
      </div>
    );
}

export default InputVerification
