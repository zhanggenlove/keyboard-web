import React from "react"
import { Link } from "gatsby"
import Card from "./components/FeatureCard"
import Data from "./data"
const FeatureSection = ({ ...rest }) => {
  return (
    <>
      {/* Features Area */}
      <div className="feature-area-l7-1">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-5 col-xl-6 col-lg-6 col-md-10"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading">
                <h2>
                  快捷键入，快人一步
                </h2>
              </div>
            </div>
            <div
              className="offset-xxl-1 col-xxl-6 col-xl-6 col-lg-6 col-md-10"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading">
                <p>
                  友好的设计界面，键盘内容完全自定义。可以是常用术语、社交模板、链接、常用回复、常用游戏回复等等。承诺不会储存您的任何信息，绝对保护您的隐私。❤️
                </p>
                <div className="content__btn">
                  <Link
                    to="/"
                    className="btn  btn--link focus-reset focus-reset"
                  >
                    学习更多
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="feature-card-items-l7-1 d-flex justify-content-lg-between justify-content-center  flex-wrap">
                {Data.map((item, index) => {
                  return (
                    <Card title={item.title} icon={item.icon} key={index} />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureSection
