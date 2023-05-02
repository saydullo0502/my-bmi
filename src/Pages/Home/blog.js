import "./home.css";

function Blog() {
  return (
    <div className="container">
      <div className="brand_full">
        <h1>Bizning blog.</h1>
        <button>Bizning blogimizga o'ting</button>
      </div>

      <div className="blog_part_laptop">
        <div className="blog_text">
          <span>12.09.2023</span>
          <h1>Siz uchun Noutbuk</h1>
          <p>
            Noutbuk o'zining xususiyatlariga ko'ra mashhur brenddan kam emas.
            <br />
            Barcha ofis vazifalari uchun.
          </p>
          <button>Read</button>
        </div>
        <div className="blog_laptop">
          <img src={require("../../assets/img/blogLaptop.png")} alt="" />
        </div>
      </div>

      <div className="blog_parts">
        <div className="blog_text">
          <span>12.09.2023</span>
          <h1>Maishiy texnika</h1>
          <button>Read</button>
          <img src={require("../../assets/img/blog1img.png")} alt="" />
        </div>
        <div className="blog_text">
          <span>12.09.2023</span>
          <h1>Maishiy texnika</h1>
          <button>Read</button>
          <img src={require("../../assets/img/blog2img.png")} alt="" />
        </div>
        <div className="blog_text">
          <span>12.09.2023</span>
          <h1>Maishiy texnika</h1>
          <button>Read</button>
          <img src={require("../../assets/img/blog1img.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
