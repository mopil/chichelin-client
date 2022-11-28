import React, {useState} from 'react';
import Header from './header';
import '../styles/search.css';
import SimpleSlider from '../searchSlider';
import StyledSlider from '../searchSlider';

function Search() {
    return (
        <div>
            <body>
                <div id='itemSlider'>
                    <StyledSlider></StyledSlider>
                </div>
            </body>
            <Header></Header>
        </div>
    )
}
export default Search;