import React from "react";
import "./Content.css";
import star1 from "../../images/star1.jpg";
import { useHistory } from "react-router-dom";

const AboutUs = () => {
  const history = useHistory();
  return (
    <>
      <div className='about-us gap-20'>
        <div className='ab-left'>
          <h2>BLUE GIANT STAR</h2>
          <p>
            Rigel or Beta Orionis is a Quadruple star system consisting of the
            two primary star's dubbed colloquially Rigel A, and the two
            secondary stars nearly half a light year away Rigel B &C.
            <br />
            Rigel incorporates a total of fourteen planets, more than half of
            them are inhabitable. Rigel A-I, which include common and rare
            materials amongst an almost incalculable array of asteroids,
            planetoids and dense gaseous anomalies. Rigel A supports twelve
            Planets, while Rigel B&C support several large mining,
            layover/refueling, and construction hubs between two designated
            worlds.
          </p>
        </div>
        <div className='globe'>
          <div className='ab-right'>
            <img className='star1' src={star1} alt='' />
          </div>
          <ul className='planets'>
            <li>
              <a
                onClick={() => history.push("animals?_limit=9&type=Geln")}
                href=''
              >
                Geln
              </a>
            </li>
            <li>
              <a
                onClick={() => history.push("animals?_limit=9&type=Avali")}
                href=''
              >
                Avali
              </a>
            </li>
            <li>
              <a
                onClick={() => history.push("animals?_limit=9&type=Tugn")}
                href=''
              >
                Tugn
              </a>
            </li>
            <li>
              <a
                onClick={() => history.push("animals?_limit=9&type=Goala")}
                href=''
              >
                Goala
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
