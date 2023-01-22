import { useEffect, useRef, useState } from 'react';
import './App.css';
import superShoes from './components/static/images/super-shoes.png'
import shoesData from './components/static/shoes.json'
import setas from './components/static/images/seta.png'
function App() {
  const [data, setData] = useState([])
  const carouselRef = useRef(null)
  useEffect(() => {
    setData(shoesData)
  }, [])

  const HandleLeftClick = (e) => {
    e.preventDefault()
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth
    console.log("left",carouselRef.current.scrollLeft)
  }
  const HandleRightClick = (e) => {
    e.preventDefault()
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
    console.log("right",carouselRef.current.scrollLeft)
  }
    console.log(carouselRef)
  return (data || data.length > 0) && (
    <div className="container">
      <div className='logo'>
        <img src={superShoes} alt='Super logo' />
      </div>
      <div className='carousel' ref={carouselRef}>
        {data.map((item) => (
          <div className='item' key={item.id}>
            <div className='image'>
              <img src={item.image} alt={item.id} />
            </div>

            <div className='info'>
              <span className='name'>{item.name}</span>
              <span className='oldPrice'>{item.oldPrice}</span>
              <span className='price'>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{maxWidth:"718px", background:"Gray"}}>
          teste
      </div>
      <div className='buttons'>
        <button onClick={HandleLeftClick}><img src={setas} alt="Scroll Left" /></button>
        <button onClick={HandleRightClick}><img src={setas} alt="Scroll Right" /></button>

      </div>
    </div>
  );
}

export default App;
