import "./Karten.scss";
import { Link } from "react-router-dom";

const Karten = () => {
  return (
    <div id="container">
      {/* HAUSHALTSWARE */}
      <Link to="/category/Haushaltswaren">
        <div className="item">
          <div className="content">
            <img src="/images/haushaltswaren/töpfe3.jpg" alt="" />
            <h2>Haushalt</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/haushaltswaren/sieb.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/haushaltswaren/messer3.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/haushaltswaren/hw2.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/haushaltswaren/kaffemühle4.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/haushaltswaren/gewürzregal.jpg" />
            </div>
          </div>
        </div>
      </Link>

      {/* ELEKTRO */}
      <Link to="/category/Elektro">
        <div className="item">
          <div className="content">
            <img src="/images/elektro/laptop1.jpg" alt="" />
            <h2>Elektro</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/elektro/digicam4.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/elektro/digitalBuero.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/elektro/elektro1.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/elektro/handy3.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/elektro/waschmaschiene2.jpg" />
            </div>
          </div>
        </div>
      </Link>

      {/* GARTEN */}
      <Link to="/category/Garten">
        <div className="item">
          <div className="content">
            <img src="/images/garten/werkzeug1.jpg" alt="" />
            <h2>Garten</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/garten/gartenkanne1.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/garten/rechen.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/garten/werkzeugTasche.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/garten/werkzeug3.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/garten/werkzeug1.jpg" />
            </div>
          </div>
        </div>
      </Link>

      {/* SCHUHE */}
      <Link to="/category/Schuhe">
        <div className="item">
          <div className="content">
            <img src="/images/schuhe/nikeJordan.png" alt="" />
            <h2>Schuhe</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/schuhe/roller.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/schuhe/tracking.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/schuhe/lichter.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/schuhe/nike.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/schuhe/stöckelschuhe.jpg" />
            </div>
          </div>
        </div>
      </Link>

      {/* SCHMUCK */}
      <Link to="/category/Schmuck">
        <div className="item">
          <div className="content">
            <img src="/images/schmuck/armreif.jpg" alt="" />
            <h2>Schmuck</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/schmuck/goldring.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/schmuck/ohrringSaphir.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/schmuck/ohrringPerle.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/schmuck/ohrstecker.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/schmuck/silberring.jpg" />
            </div>
          </div>
        </div>
      </Link>

      {/* OUTDOOR */}
      <Link to="/category/Outdoor">
        <div className="item">
          <div className="content">
            <img src="/images/outdoor/backpack.jpg" alt="" />
            <h2>Outdoor</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/outdoor/fire.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/outdoor/gascooker.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/outdoor/knife.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/outdoor/shelter.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/outdoor/wandern.jpg" />
            </div>
          </div>
        </div>
      </Link>

      {/* MODE */}
      <Link to="/category/Mode">
        <div className="item">
          <div className="content">
            <img src="/images/mode/mode.jpg" alt="" />
            <h2>Mode</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/mode/anzugAsiatisch.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/mode/roterAnzugDamen.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/mode/dameEuropa.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/mode/peppigAsiatisch.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/mode/weisserAnzugHerren.jpg" />
            </div>
          </div>
        </div>
      </Link>

      {/* KINDERMODE */}
      <Link to="/category/Kindermode">
        <div className="item">
          <div className="content">
            <img src="/images/kindermode/jungeMädchen.jpg" alt="" />
            <h2>Kindermode</h2>
          </div>
          <div className="previews">
            <div className="preview-image">
              <img src="/images/kindermode/hoseBeige.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/kindermode/hoseShirt.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/kindermode/latzhose.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/kindermode/regenjacke.jpg" />
            </div>
            <div className="preview-image">
              <img src="/images/kindermode/rotesKleid.jpg" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Karten;
