import React from "react"
import { Link } from "gatsby"
export default function BannerSection() {
  return (
    <div className="about-us-banner">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xxl-7 col-xl-8 col-lg-9"
            data-aos="fade-up"
            data-aos-duration={800}
            data-aos-once="true"
          >
            <div className="about-us-banner-content text-center">
              <h2>个人独立开发者</h2>
              <p>
                来自中国上海，前端开发工程师，同时也是一名个人独立开发者。业余生活喜欢去研究新的事物，喜欢瞎捣鼓一些东西。一直在寻求有商业价值的产品方向，同时也很渴求自由，因为自由难能可贵。这里是我的一片天地，希望你会喜欢。
              </p>
              {/* <Link to="/contact-us" className="btn focus-reset">
                zhanggenlove@gmail.com
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
