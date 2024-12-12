import Image from "next/image";

export default function Home() {
  return (
    <section className="hero-section">
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">Payments tool for software companies</h1>
        <p className="hero-description">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
        <a href="#" className="btn-get-started">
          Get started
          <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </a>
        <a href="#" className="btn-speak-to-sales">Speak to Sales</a> 
      </div>
      <div className="hero-image">
        <Image src="/main pic.webp" alt="mockup" width={200} height={200} className="image"/>
      </div>
    </div>


<section className="feature-section">
  <div className="container">
    <h1 className="section-title">
      Raw Denim Heirloom Man Braid
      <br className="break" />
      Selfies Wayfarers
    </h1>
    <div className="feature-container">
      <div className="feature-box">
        <div className="icon-container">
          <i className="bi bi-arrow-through-heart"></i>
        </div>
        <div className="feature-content">
          <h2 className="feature-title">Shooting Stars</h2>
          <p className="feature-description">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.
          </p>
          <a className="learn-more-link">
            Learn More
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="feature-box">
        <div className="icon-container">
          <i className="bi bi-shop"></i>
        </div>
        <div className="feature-content">
          <h2 className="feature-title">The Catalyzer</h2>
          <p className="feature-description">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.
          </p>
          <a className="learn-more-link">
            Learn More
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="feature-box">
        <div className="icon-container">
          <i className="bi bi-amazon"></i>
        </div>
        <div className="feature-content">
          <h2 className="feature-title">Neptune</h2>
          <p className="feature-description">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.
          </p>
          <a className="learn-more-link">
            Learn More
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="content-section">
  <div className="container">
    <div className="header">
      <div className="header-left">
        <h1 className="main-title">Pitchfork Kickstarter Taxidermy</h1>
        <div className="underline"></div>
      </div>
      <p className="description">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <Image className="card-image" src="/mobile pic.jpg" alt="content"width={200} height={200} />
          <h3 className="subtitle">SUBTITLE</h3>
          <h2 className="card-title">Chichen Itza</h2>
          <p className="card-description">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <Image className="card-image" src="/mobile pic1.jpg" alt="content"width={200} height={200} />
          <h3 className="subtitle">SUBTITLE</h3>
          <h2 className="card-title">Colosseum Roma</h2>
          <p className="card-description">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <Image className="card-image" src="/mobile pic2.jpg" alt="content"width={200} height={200} />
          <h3 className="subtitle">SUBTITLE</h3>
          <h2 className="card-title">Great Pyramid of Giza</h2>
          <p className="card-description">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <Image className="card-image" src="/mobile pic3.jpg" alt="content" width={200} height={200} />
          <h3 className="subtitle">SUBTITLE</h3>
          <h2 className="card-title">San Francisco</h2>
          <p className="card-description">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>



  </section>

  


  );
}
