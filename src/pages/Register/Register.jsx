import { Link } from "react-router-dom";

function Register(params) {
  return (
    <div className="col-12">
      <div className="row mt-5">
        <div class="d-flex justify-content-center">
          <div class="col-4">
            <main class="form-signin">
              <form>
                <h1 class="h3 mb-5 fw-light">Hesap oluştur</h1>

                <div class="form-floating mb-3">
                  <input type="email" class="form-control" />
                  <label for="floatingInput">Eposta adresi</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" />
                  <label for="floatingPassword">Şifre</label>
                </div>

                <div class="form-floating mb-3">
                  <input type="password" class="form-control" />
                  <label for="floatingPassword">Şifre tekrar</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">
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
