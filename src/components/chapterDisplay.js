import React from 'react';
import NavBar from './navBar';
import HomePage from './homepage';
import Stars from './stars';
import '../styles/chapterDisplayContainer.css';

export default class ChapterDisplay extends React.Component {

    state = {
        chapterName: this.props.match.params
    }

    renderChapter = () => {
        if(this.state.chapterName.name === 'stars') {
            return (
                <Stars />
            )
        } else {
            return (
                <HomePage />
            )
        }
    }

    render() {
        return (
        <main className="main-container">
        {/* <NavBar /> */}
        <section className="chapter-display-container">
            {this.renderChapter()}
        </section>
        </main>
        )
    }
}