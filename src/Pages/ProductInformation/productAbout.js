import "./productInformation.css";

function ProductAbout() {
  return (
    <div className="container">
      <div className="pro_about">
        <h1>Mahsulot haqida ma'lumot.</h1>
        <div className="hr"></div>

        <div className="pro_about_tables_full">
            
            <div className="pro_about_table">
            <h2>Turi</h2>
            <p>smartfon</p>
            </div>

            <div className="pro_about_table">
            <h2>SIM-kartalar soni </h2>
            <p>2</p>

            </div>
            <div className="pro_about_table">
            <h2>Multi-SIM rejimi</h2>
            <p>muqobil</p>
            </div>
            <div className="pro_about_table">
            <h2>Kontaktsiz to'lov</h2>
            <p>mavjud</p>
            </div>
            <div className="pro_about_table">
            <h2>Og'irligi</h2>
            <p>196 gr</p>
            </div>
            <div className="pro_about_table">
            <h2>O'lchamlari (WxHxD)</h2>
            <p>77x164x9 mm</p>
            </div>

        </div>
      </div>
    </div>
  );
}

export default ProductAbout;
