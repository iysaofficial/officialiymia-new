import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="overview-area">
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-xl-6 col-lg-12 col-md-12 p-0">
              <div className="overview-content">
                <h2>Background IYMIA</h2>
                <p>
                  Indonesia is one of the countries with the largest Muslim
                  population in the world, with these advantages it is expected
                  to be a force that is able to produce solutions to real
                  problems that exist. In addition, science is developing so
                  rapidly. This development requires students to be able to
                  apply the knowledge gained. Therefore, Indonesian Young
                  Scientist Association (IYSA) collaborates with Department of
                  Food Science and Technology, Institut Pertanian Bogor (IPB),
                  organizing a competition called the International Young Moslem
                  Inventor Award. <br />
                  <br />
                  IYMIA is expected to be one of the right platforms to
                  integrate science with religious knowledge for students both
                  in Indonesia and abroad.
                </p>

                <ul className="Category-list">
                  <li>
                    <div className="icon">
                      <i className="ri-discuss-line"></i>
                    </div>
                    <h3>Forum</h3>
                    <p>
                      Become a forum for students to evaluate the work they
                      have.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="ri-award-line"></i>
                    </div>
                    <h3>Skills</h3>
                    <p>help develop scientific thinking skills.</p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="ri-lightbulb-flash-line"></i>
                    </div>
                    <h3>Creative Idea</h3>
                    <p>
                      Improve the ability to develop creative ideas in the world
                      of science.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-6 col-lg-12 col-md-12 p-0">
              <div className="overview-image bg1">
                <Image
                  src="/images/moslem.jpg"
                  className="img-fluid img-responsive"
                  layout="intrinsic"
                  width={400} // Sesuaikan lebar gambar
                  height={100} // Sesuaikan tinggi gambar
                  alt="overview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
