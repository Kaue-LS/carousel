import { useEffect, useRef, useState } from 'react';
import './App.css';
import superShoes from './components/static/images/super-shoes.png'
import shoesData from './components/static/shoes.json'
import setas from './components/static/images/seta.png'
function App() {
  const [data, setData] = useState([])
  const carouselRef = useRef(null)

  const index = [...Array(3).fill(0).map((x, index) => ({ card: index }))];


  useEffect(() => {
    setData(shoesData)
  }, [])

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };



  const HandleLeftClick = (e) => {
    e.preventDefault()

    // Acrescenta para adicionar as classes nos card, de acordo com a quantidade que ele quer q esteja na tela
    index.map((prop) => {
      // Para q ele nao acrescenta classes em card nao existentes cujo index seja menos q 0
      if (prop.card == 0 || prop.card <=index.length) return
      prop.card -= index.length
    })

    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth

  }


  const HandleRightClick = (e) => {
    e.preventDefault()

    // prever q ele nao acrescenta classes em card nao existentes
    if(carouselRef.current.scrollLeft >= carouselRef.current.offsetWidth -1000 && carouselRef.current.scrollLeft <= carouselRef.current.offsetWidth) return 
    index.map((prop) => {
      if (prop.card > data.length) return
      prop.card += index.length
    })

    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth

  }


  return (data || data.length > 0) && (
    <div className="container">
      <div className='logo'>
        <img src={superShoes} alt='Super logo' />
      </div>
      <div className='carousel' ref={carouselRef}>
        <div className='wrapper'>
          {data.map((item, i) => {

            const indexLeft = mod(i - 1, data.length);
            const indexRight = mod(i + 1, data.length);

            let className = "card";

            if (i === index) {
              className = "card card--active";
            } else if (i === indexRight) {
              className = "card card--right";
            } else if (i === indexLeft) {
              className = "card card--left";
            } else className = "card";

            return (
              <div className={`item ${className}`} style={{ maxWidth: 280 }} key={item.id}>
                <div className='image'>
                  <img src={item.image} alt={item.id} />
                </div>

                <div className='info'>
                  <span className='name'>{item.name}</span>
                  <span className='oldPrice'>{item.oldPrice}</span>
                  <span className='price'>{item.price}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div style={{ maxWidth: "718px", background: "Gray" }}>
        teste
      </div>
      <div id="thing">A Test Element</div>
      <div className='buttons'>
        <button onClick={HandleLeftClick}><img src={setas} alt="Scroll Left" /></button>
        <button onClick={HandleRightClick}><img src={setas} alt="Scroll Right" /></button>

      </div>
    </div>
  );
}

export default App;
