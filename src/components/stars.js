import React from 'react';



export default class Stars extends React.Component {

  state = {
   stars: [],
   starNumber: 0,
  }

    generateStar = (key, x, y, size, colorX, colorY, colorZ)  => {
        let star = {
            key: key,
            x: x,
            y: y,
            size: size,
            colorX: colorX,
            colorY: colorY,
            colorZ: colorZ
        };
        return star;
    };

    getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); 
    }
  
    useMousePosition = (ev) => {

      let number = this.getRandomInt(5, 30);
      let colorX = this.getRandomInt(0, 256);
      let colorY = this.getRandomInt(0, 256);
      let colorZ = this.getRandomInt(0, 256);
      let key = this.state.starNumber + 1;

      let star = this.generateStar(key, ev.clientX, ev.clientY, number, colorX, colorY, colorZ);
      let stars = this.state.stars.concat(star)
      let starNumber = this.state.starNumber
      this.setState({
        stars: stars,
        starNumber: starNumber + 1, 
      });
    };

    renderStarField = () => {
      let starField = this.state.stars.map((star) => { 
     
      return (<div 
          className="star"
          key={star.key}
          style={{position: "absolute",       
                backgroundColor:`rgb(${star.colorX}, ${star.colorY}, ${star.colorZ})`, 
                height: `${star.size}px`, 
                width: `${star.size}px`, 
                left: `${star.x}px`,
                top: `${star.y}px`}}></div>)
          })
    return starField;
    }


    render() {

      return (
        <div id="starfield" className="starfield" onClick={(ev) => this.useMousePosition(ev)}>
          {this.renderStarField()}
        </div>
      )
    }
    
}
