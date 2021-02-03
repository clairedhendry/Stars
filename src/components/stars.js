import React from 'react';



export default class Stars extends React.Component {

  state = {
   stars: [],
   starNumber: 0,
   isDrawing: false,
  }

  handleButtonClick = (ev) => {
    ev.preventDefault();
    this.setState({
      stars: [],
      starNumber: 0,
      isDrawing: false
    });
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
  
    handleMouseDown = (ev) => {

      let number = this.getRandomInt(5, 25);
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
        isDrawing: true
      });
    };

    handleMouseMove = (ev) => {
      if(!this.state.isDrawing) {
        return
      }
      this.handleMouseDown(ev);
    }

    handleMouseUp = () => {
      this.setState({ isDrawing: false });
    }

    renderStarField = () => {
      let starField = this.state.stars.map((star) => { 
     
      return (<div 
          className="star pulse"
          key={star.key}
          style={{position: "absolute",       
                backgroundColor:`rgb(${star.colorX}, ${star.colorY}, ${star.colorZ})`, 
                height: `${star.size}px`, 
                width: `${star.size}px`, 
                left: `${star.x}px`,
                top: `${star.y}px`,
                boxShadow: `0 0 3px 3px rgb(${star.colorX}, ${star.colorY}, ${star.colorZ})`}}></div>)
          })
    return starField;
    }

    componentDidMount() {
      document.addEventListener("mouseup", this.handleMouseUp);
    }
  
    componentWillUnmount() {
      document.removeEventListener("mouseup", this.handleMouseUp);
    }


    render() {

      return (
        <>

        <div id="starfield" className="starfield" onMouseDown={(ev) => this.handleMouseDown(ev)} onMouseMove={(ev) => this.handleMouseMove(ev)} >
          {this.renderStarField()}
        </div>
        <button onClick={(ev) => this.handleButtonClick(ev)}>Reset</button>
        </>
      )
    }
    
}
