import React from 'react'
import './Banner.css'

import { Button } from "@material-ui/core"
function Banner() {
    return (
        <div className="banner">

            <div className="banner__search">
                <Button className="banner__searchButton" variant="outlined">Search Dates</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and Strech your imagination</h1>
                <h5>
                    Plan a diffrent kind of gateway to uncover the hidden gems near you.
                </h5>
                <Button variant='outlined'> 
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
