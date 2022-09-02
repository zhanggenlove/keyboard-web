import React from "react"
import imageMain from "../../../../assets/image/landing-7/contentl7-2.png"
const ContentSectionTwo = ({ ...rest }) => {
  return (
    <>
      {/* Content Area 2*/}
      <div className="content-area-l7-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
              <div
                className="section__heading text-center"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-once="true"
              >
                <h2>做出最好的决定</h2>
                <p>
                  敏捷生活和工作，小小高效工具。目前正在打折，你值得拥有，可别错过了哦。（づ￣3￣）づ╭❤～
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center content-l7-2-items">
            <div
              className="offset-lg-1 col-lg-3 order-lg-1 order-2"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-l7-2-content-1 d-sm-flex d-lg-block justify-content-sm-between justify-content-lg-start">
                <div className="block-one block-top">
                  <div className="widget">
                    <div className="number">
                      <span>1</span>
                    </div>
                    <h4>敏捷键入</h4>
                    <p>
                      快人一步，不止一步
                    </p>
                  </div>
                </div>
                <div className="block-three">
                  <div className="widget">
                    <div className="number">
                      <span>3</span>
                    </div>
                    <h4>分类管理</h4>
                    <p>
                      合理分类，一目了然
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-5 col-sm-8 order-lg-2 order-1"
              data-aos="zoom-in"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-l7-2-center-img">
                <img src={imageMain} alt="content" />
              </div>
            </div>
            <div
              className="col-lg-3 order-lg-3 order-3"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-l7-2-content-2 d-sm-flex d-lg-block justify-content-sm-between justify-content-lg-start">
                <div className="block-two block-top">
                  <div className="widget">
                    <div className="number">
                      <span>2</span>
                    </div>
                    <h4>隐私安全</h4>
                    <p>
                      数据全部存储在本地，保障你的安全
                    </p>
                  </div>
                </div>
                <div className="block-four">
                  <div className="widget">
                    <div className="number">
                      <span>4</span>
                    </div>
                    <h4>终身支持</h4>
                    <p>
                      有问题请联系
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 order-4" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionTwo
