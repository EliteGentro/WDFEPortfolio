export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Humberto</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Computer Science</span>{" "}
            <br />
            Student
          </h1>
          <p className="hero--section-description">
            I'm currently coursing my second year on Computer Science at Tecnológico de Monterrey. I love software and find it easy to learn and adapt to new frameworks and stacks.

          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
        <p className="section--title">(Not yet Enabled)</p>
      </div>
      <div className="hero--section--img">
        <img src="/WDFEPortfolio/img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
