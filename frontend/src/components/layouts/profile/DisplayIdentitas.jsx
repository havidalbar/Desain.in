import React, { Component } from 'react';
import PortofolioCard from '../../card/PortofolioCardIdentitas';
import Button from '../../button/Button';
import '../../layouts/typography.scss';
import './display.scss';

class DisplayIdentitasNonDesainer extends Component {
    render() {
        return(
            <div className="display">
                <p className="title-3 title-display">
                    Portofolio Claudy Adelia
                </p>
                <div class="card-wrapper">
                    <PortofolioCard judul="Fireberry" userName="Claudy Adelia" likeCount="200" viewCount="200"/>
                    <PortofolioCard judul="Freeze Fuzz" userName="Claudy Adelia" likeCount="200" viewCount="200"/>
                    <PortofolioCard judul="Bat Berry" userName="Claudy Adelia" likeCount="200" viewCount="200"/>
                    <PortofolioCard judul="Abstract Illustrations" userName="Claudy Adelia" likeCount="200" viewCount="200"/>
                </div>
                <div className="btn-wrap">
                    <Button style="button primary" text="LIHAT LEBIH BANYAK"/>
                </div>
            </div>
        )
    }
}

export default DisplayIdentitasNonDesainer;
