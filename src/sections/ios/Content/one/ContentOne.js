import React from "react"
import imageOne from "../../../../assets/image/landing-7/rank-mobile-1.png"

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* Content Area-1 */}
      <div className="content-area-l7-1">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-6 col-md-8"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-area-l7-1-image text-center">
                <div className="image-1">
                  <img src={imageOne} alt="content" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-9"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section__heading">
                      <h2>自定义您的分类</h2>
                      <p>
                        允许自定义您的分类和自定义ICON。在键盘中通过选择分类来获取不同的文本内容，清晰明了。可对分类进行增删改查，随心所欲。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row widgets-list">
                  <div className="col-lg-12">
                    <button className="btn focus-reset">得到它</button>
                  </div>
                  <div className="col-sm-12">
                    <div className="widget">
                      <div className="d-flex align-items-center">
                        <div className="widget-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="widget-text">
                          <p className="mb-0">高度自定义.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="widget">
                      <div className="d-flex align-items-center">
                        <div className="widget-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="widget-text">
                          <p className="mb-0">黑白两种主题</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="widget">
                      <div className="d-flex align-items-center">
                        <div className="widget-icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="widget-text">
                          <p className="mb-0">人性化设计</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionOne
