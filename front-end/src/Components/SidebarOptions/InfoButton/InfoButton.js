import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const btStyle = styled.div`
    border-radius: 40px;
    padding: 10px;
    transition: background-color 0.2s ease-out;
    
    display: flex;

    &:hover {
        cursor: pointer;
    }
`;

const Styled = {
    InfoButton: styled(btStyle)`
        &:hover {
            background-color: rgba(255,255,255,0.15);
        }
    `,
};

function InfoButton({
    title, logo, fc, color,
}) {
    return (
        <Styled.InfoButton onClick={fc} color={color}>
            {logo}
            {title}
        </Styled.InfoButton>
    );
}

InfoButton.defaultProps = {
    logo: null,
    fc: () => { },
    color: [0, 0, 0, 0],
};

InfoButton.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.objectOf,
    fc: PropTypes.func,
    color: PropTypes.arrayOf,
};

export { InfoButton, btStyle };
