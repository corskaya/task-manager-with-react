import { Link } from "react-router-dom";

function Register(params) {
  return (
    <div className="col-12">
      <div className="row mt-5">
        <div className="d-flex justify-content-center">
          <div className="col-4">
            <main className="form-signin">
              <form>
                <h1 className="h3 mb-5 fw-light">Hesap oluştur</h1>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Eposta adresi</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Şifre</label>
                </div>

                <div className="form-floating mb-5">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Şifre tekrar</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Hesap oluştur
                </button>
              </form>
              <div className="text-center mt-4">
                <Link to={"/login"}>
                  <a>Hesabın varsa giriş yap</a>
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
