import { useMediaQuery } from "react-responsive";

const AboutUs = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section className="flex flex-col-reverse padding w-screen md:my-20 md:flex-row items-center justify-between">
      {/* left section - for image*/}
      <div className="w-full mt-4 md:w-2/5">
        <img
          src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735048722/b30239617bd01a7ded0e9a15e3b03a5a_iatvwh.png"
          alt="about_us_image"
          className="h-auto w-full"
        />
      </div>

      {/* right section - for content*/}
      <div className="flex flex-col justify-start w-full md:w-2/4 md:ml-10">
        {/* right sec - upper container */}
        <div>
          <div className="mb-5">
            <h1 className="heading text-2xl md:text-5xl font-medium">
              {" "}
              ABOUT US{" "}
            </h1>
            {/* according to screen size - the underline of heading changes */}
            {isSmallScreen ? (
              <svg
                width="120"
                height="7"
                viewBox="0 0 120 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="3.5" x2="120" y2="3.5" stroke="#A9A9A9" />
                <rect width="55" height="7" rx="3.5" fill="#A9A9A9" />
              </svg>
            ) : (
              <svg
                width="238"
                height="7"
                viewBox="0 0 238 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="3.5" x2="238" y2="3.5" stroke="#A9A9A9" />
                <rect width="62" height="7" rx="3.5" fill="#A9A9A9" />
              </svg>
            )}
          </div>
          <p className="text-xs md:text-lg">
            We love what we do and are driven by achieving great results for our
            clients. Our awards and impressive client list are testament to our
            high quality approach. We deliver value, creaKvity, results and
            excepKonal levels of customer service and professionalism. We
            specialise in infrastructure development, energy and natural
            resources.
          </p>
        </div>

        {/* right sec - lower container */}
        <div className="flex flex-col md:flex-row justify-between my-9">
          {/* lower container - left part */}
          <div className="w-full md:w-2/4">
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="31" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image0" transform="scale(0.025 0.0243902)" />
                </pattern>
                <image
                  id="image0"
                  width="40"
                  height="41"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE80lEQVRYhb3YfcxWYxwH8M99P9GDmph3lpExhraM8Qd/UFKeFE3YGvPy5DU1FjaEzLCZkTJjXlqk6aE3ktctyig1iz+8TWZjGaK0SlT++F0np/Oc+36e7rt8t7Nz3+dc1+/3Pdf1u76/33VVtE/RBFrwOEZj38K7tZiG8djWqIMejXZMGIYb8Sx+Lbw7EDfjXcxv1EGzBI9L91vFiOWxL67CEc046IpgD5yTfr+HfwrvK034HYiteL/E7nZU6xjZS0zNwnTNR2uDhPLYG6/jTbyFuei5swRbMRuD0J6uQZhTg+TWkmfZwsj72CvZHYircS0GJ7ulJMumuDV1GIjLMSM93yhW5RxcmP4PwBr8WWJnHf7AGZgqRm62CJnRmJmz+3yyOwJ/1SPYgtcSuSty5OCldH8BX4lFcSImlpDL8Cgm4WT0wWEFcjA93TOSw+RissUpQ/MGh+MujBGjVcTneBtHYj0eEjpYCx/ih0TsS4zFgpJ2K/ETbsEKMQDoPIJ7pPu6Ok4/wcV13uexDc+lqytkPnfgVFwkc7AYL6KtmyR2BS4QU71YrPDtKBL8G+djGV71/5AcjllYiqEKi6RMZtalhhnJAbuR3Kl4JZEbokQNamWSdWIkv8Y4saLr4WghEUel/6tEuHzXRb+xQoraxKLrhHqpbi1+xz512uyDx0TOrWB1en4IHhbSMR4bavTvLXS0mMd3IFgRX3Bo4d1Zohi4r0bfvbFIaNyDeFJIBRyOG3AbThLiXEZyrhj56UKS8vgRC3pgMm4q6bxeaOLMknfwRHI+TOTUovE78YHI4ZNxTYmNaUJTbxMCXsTkivYp6xOJCYWXa5XnWDhGiOn9uLdGmwwP4HacIGK6DFWdC95HMKoq4uhbEW/5qxY5uEiI8NQuyBGjVxH5uxa2lvj/Br3qlVv1cBy+xy/daPuzSHfHN+KoUYIV9Ue4iK2N+mqU4LdC8/p0o+3+YiF804ijKjYJ3doZzBMSNaYbbcckP3N30sch2FAVeXCcCPr8taoOgS9E8XmPKEhr4QzcLdLZyhptrk++iv7HYVZF+5SeuAwH5zpVcabIj8PFiBWxHz4WojwRT/svXfVOHzdJLJDTlWeLEelDF4hKJh/XqzGjUmfjXhVxsxyjarTZH88I2dkkYpPQyVZRbLQL2ShDB/rjWDU29/VycavY5Gyu02YNRuI0MRpHp+fzRbGwtE5forxrTdfGnSHYU3zdQWLqusLSbpApw1OiOu8QQt5pMMpkpqf4+nNxpcinuwuLRI4eLGJxz2KDIsGq2NUNSuSmFzvsBrwg9siDRcy2FAnl0Saq6ev+J3IZponyrE0UyttRJJjt7n+rY6y/iJ1purdnGZLaPpX61kLmc4dpLtvVLRHl15ASI0OF9o0SReh8cXxRCzcLjTsHl6S+55W0axOHBEt0c1e3PJHNkxwqAnkF+qEv3lC74iayyLzUth8+S3bzJNtE7C1L/jblDZTJzNrU8M1kbKSoXjrwaSKaZYXF6YN66bzp6Y0D8I7IEGsSsYU5u9VkNyPX7V1dnmR2OvpRgVweLSXPstnZUrCbkcymckmyW3YA1eWu7mxcKkbwZYXhbxB5u9tEvNe029UJ6yahU7sa2ZFbl2j2jPqHdJ+Q+52hb7qvacZBswQ7RDl2h85xuEVMX0czDpoluFnoW1b55LHRLojZfwF2jTOtRxniFgAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
            <h1 className="text-lg md:text-2xl font-medium my-2 md:my-3">
              ENGAGEMENT
            </h1>
            <p className="text-sm md:text-lg">
              We are engagement specialists, who have led projects at all levels
              of the IAP2 spectrum.
              <br />
              <span>READ MORE</span>
            </p>
          </div>

          {/* lower container - right part */}
          <div className="w-full mt-6 md:w-2/4 md:ml-5 md:mt-0">
            <svg
              width="33"
              height="31"
              viewBox="0 0 33 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="33" height="31" fill="url(#pattern0_2_45)" />
              <defs>
                <pattern
                  id="pattern0_2_45"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_2_45"
                    transform="scale(0.0232558 0.0243902)"
                  />
                </pattern>
                <image
                  id="image0_2_45"
                  width="43"
                  height="41"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <h1 className="text-lg md:text-2xl font-medium my-2 md:my-3">
              COMMUNICATIONS
            </h1>
            <p className="text-sm md:text-lg">
              We are award-winning leaders in communications and campaign
              management.
              <br />
              <span>READ MORE</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
