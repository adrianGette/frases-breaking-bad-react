import React from 'react';
import styled from '@emotion/styled';

const PhraseContainer = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    //margin-top: 250px!important;
    
    @media (min-width: 992px){
        margin-top: 10rem;
    }

    h2 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 5rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Phrase = ({phrase}) => {
    return (
        <PhraseContainer>
            <h2>{phrase.quote}</h2>
            <p>{phrase.author}</p>
        </PhraseContainer>
    );
}
 
export default Phrase;