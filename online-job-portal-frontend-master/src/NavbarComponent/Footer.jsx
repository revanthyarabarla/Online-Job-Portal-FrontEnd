import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">
                    Online Job Portal
                  </h5>

                  <p>
                    Welcome to our Online Job Portal, where career dreams come
                    to life. Our user-friendly platform simplifies job
                    searching, offering a seamless experience for both job
                    seekers and employers.
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">About us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="https://www.kluniversity.in/" class="text-color">
                        KL University
                      </a>
                    </li>
                    <li>
                      <a href="https://services.india.gov.in/service/listing?ln=en&cat_id=2" class="text-color">
                        Gov portal
                      </a>
                    </li>
                    <li>
                      <a href="https://www.naukri.com/online-portal-jobs" class="text-color">
                        naukari portal
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/school/kluniversity/posts/?feedView=all" class="text-color">
                        linkedin
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">Contact us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="https://www.linkedin.com/in/revanth-yarabarla-606482286/" class="text-color">
                        linkedin
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/revanthyarabarla" class="text-color">
                        github
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/kluniversityofficial/?hl=en" class="text-color">
                        instagram
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">Careers</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-second">Links</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Login from here</span>
                <Link to="/user/login" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center">
            © 2024 Copyright:
            <a class="text-color-3" href="https://www.kluniversity.in/">
              kluniversity.students.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
