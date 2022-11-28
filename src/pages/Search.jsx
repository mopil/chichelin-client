import React, {useState} from 'react';
import '../styles/search.css';
import StyledSlider from '../searchSlider';

function Search() {
    return (
        <div>
            <body>
                <div id='itemSlider'>
                    <StyledSlider></StyledSlider>
                </div>
            </body>
        </div>
    )
}
export default Search;