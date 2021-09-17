import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Styled = {
    AutoTextarea: styled.textarea`
        width: 100%;
        max-height: 500px;
        resize: none;
        border: none;
        font-size: 1.25rem;
        font-family: inherit;
        color: inherit;
        background-color: rgba(0,0,0,0);
        border-bottom: 1px rgba(255,255,255, 0.2) solid;
        
        &:focus {
            outline: none;
        }
    `,
};

const resize = (e) => {
    e.target.style.cssText = 'height:auto; padding:0';
    e.target.style.cssText = `height:${e.target.scrollHeight}px`;
};

function AutoTextarea({ value, onChange }) {
    return (
        <Styled.AutoTextarea
            name="make-tweet-text"
            id=""
            placeholder="O que está acontecendo?"
            value={value}
            onChange={(e) => { onChange(e.target.value); }}
            onInput={resize}
            maxLength="144"
        />
    );
}

AutoTextarea.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default AutoTextarea;
