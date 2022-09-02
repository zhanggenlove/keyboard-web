import React from "react"
import imageOne from "../../../../assets/image/about/a3.png"
import imageTwo from "../../../../assets/image/about/a4.png"
import imageThree from "../../../../assets/image/about/a5.png"
const ContentSectionTwo = ({ ...rest }) => {
  return (
    <>
      {/* About us content-2 */}
      <div className="about-content-2 bg-catskillwhite">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-2-img-1">
                <img className="w-100" src={imageOne} alt="about content" />
              </div>
              <div className="about-content-2-img-2 text-end">
                <img className="w-100" src={imageTwo} alt="about content" />
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-2-content">
                <div className="section__heading">
                  <h2>快乐工作.</h2>
                  <p>
                    前端开发工程师钟爱于UI设计和用户体验。喜欢漂亮的用户界面在自己的手下一一得到发生，喜欢VUE的简单上手；喜欢REACT的设计思想；喜欢swift和kotlin等现代语言的优雅；喜欢3D；喜欢unity等好酷的游戏开发引擎。期待着有一天能拥有自己的游戏。
                  </p>
                  <p>
                    我也有不喜欢的东西，像Android、dart等。但我会尽量的克制。
                  </p>
                </div>
              </div>
              <div className="about-content-2-right-img ">
                <img className="w-100" src={imageThree} alt="about content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionTwo
