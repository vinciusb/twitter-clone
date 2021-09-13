import React from 'react';
import styled from 'styled-components';
import TweetButton from '../TweetButton/TweetButton';
import { InfoButton } from './InfoButton/InfoButton';

const btData = [
    { title: 'Página Inicial', logo: null, fc: () => { } },
    { title: 'Explorar', logo: null, fc: () => { } },
    { title: 'Notificações', logo: null, fc: () => { } },
    { title: 'Mensagens', logo: null, fc: () => { } },
    { title: 'Itens Salvos', logo: null, fc: () => { } },
    { title: 'Listas', logo: null, fc: () => { } },
    { title: 'Perfil', logo: null, fc: () => { } },
    { title: 'Mais', logo: null, fc: () => { } },
];

const Styled = {
    SidebarOptions: styled.div`
        justify-self: end;
    `,
};

function SidebarOptions() {
    function renderButtons() {
        const list = [];

        btData.forEach((bt) => {
            list.push(
                <InfoButton
                    title={bt.title}
                    logo={bt.logo}
                    fc={bt.fc}
                    color={bt.color}
                />,
            );
        });

        return list;
    }

    return (
        <Styled.SidebarOptions>
            <header>
                LOGO TWITTER
            </header>
            {renderButtons()}
            <TweetButton />
        </Styled.SidebarOptions>
    );
}

export default SidebarOptions;
