import { Carousel, Image } from "react-bootstrap";
import "../styling/Featured.scss";

import Elemental from "../assets/elemental.jpg";
import Zootopia from "../assets/zootopia.jpg";
import Coco from "../assets/coco.jpg";

function Featured() {
  return (
    <>
      <Carousel className="movie-list">
        <Carousel.Item className="movie-item">
          <Image src={Elemental}
                 className="movie-image" />
          <div className="movie-caption">
            <span className="movie-title">
              ELEMENTAL
            </span>
            <br />
            <span className="movie-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam repudiandae aut ipsa quae, illo eos soluta aliquam possimus asperiores voluptatibus.
            </span>
          </div>
        </Carousel.Item>
        <Carousel.Item className="movie-item">
          <Image src={Zootopia}
                 className="movie-image" />
          <div className="movie-attributes">
            <div className="movie-caption">
              <span className="movie-title">
                ZOOTOPIA
              </span>
              <br />
              <span className="movie-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam repudiandae aut ipsa quae, illo eos soluta aliquam possimus asperiores voluptatibus.
              </span>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="movie-item">
          <Image src={Coco}
                 className="movie-image" />
          <div className="movie-caption">
            <span className="movie-title">
              COCO
            </span>
            <br />
            <span className="movie-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam repudiandae aut ipsa quae, illo eos soluta aliquam possimus asperiores voluptatibus.
            </span>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Featured;