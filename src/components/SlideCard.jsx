import React, { useState } from 'react';
import '../css/SlideCardStyles.css';
import ReactCardFlip from 'reactjs-flip-card'

function SlideCard({ frontContent, backContent }) {

  console.log(backContent)
  console.log(frontContent)

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
    
  return (
    

    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        {frontContent}
      </div>
      <div className="flip-card-back">
        {backContent}
      </div>
    </div>
  </div>

//   <ReactCardFlip
//   flipped={isFlipped}
//   onClick={handleFlip}
//   style={{ width: '200px', height: '300px' }}
// >
//   {/* Front Side */}
//   <div>
//     <h2>Front Side</h2>
//     <button onClick={handleFlip}>Flip to back</button>
//   </div>

//   {/* Back Side */}
//   <div>
//     <h2>Back Side</h2>
//     <button onClick={handleFlip}>Flip to front</button>
//   </div>
// </ReactCardFlip>
  )
}


export default SlideCard