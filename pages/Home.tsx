import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import 'normalize.css/normalize.css'
import styles from '../styles/Home.module.css'

const content = [
  {
    title: 'INDOORS',
    big: 'See Bamboo’s New Range Of Indoor Furniture',
    description:
      'Classic meet modern living, Bamboo has a fantastic range of indoor furniture,perfect for any modern home',
    btn: 'SEE MORE',
    image: 'https://famfi.ca/wp-content/uploads/2020/01/rawpixel-760112-unsplash-scaled.jpg',
  },
  {
    title: 'INDOORS',
    big: 'See Bamboo’s New Range Of Indoor Furniture',
    description:
      'Classic meet modern living, Bamboo has a fantastic range of indoor furniture,perfect for any modern home',
    btn: 'SEE MORE',
    image: 'https://i.imgur.com/DCdBXcq.jpg',
  },
  {
    title: 'INDOORS',
    big: 'See Bamboo’s New Range Of Indoor Furniture',
    description:
      'Classic meet modern living, Bamboo has a fantastic range of indoor furniture,perfect for any modern home',
    btn: 'SEE MORE',
    image: 'https://i.imgur.com/DvmN8Hx.jpg',
  },
]

const Sliders = () => (
  <div>
    <Slider className={styles.slider_wrapper}>
      {content.map((item, index) => (
        <div
          key={index}
          className={styles.slider_content}
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className={styles.inner}>
            <h3>{item.title}</h3>
            <h1> {item.big}</h1>
            <p>{item.description}</p>
            <button className={styles.btn}>{item.btn}</button>
          </div>
         
        </div>
      ))}
    </Slider>
  </div>
)
export default Sliders
