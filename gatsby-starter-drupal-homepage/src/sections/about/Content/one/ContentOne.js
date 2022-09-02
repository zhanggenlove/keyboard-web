import React from "react"
import imageOne from "../../../../assets/image/about/a1.png"
import imageTwo from "../../../../assets/image/about/a2.png"

const ContentSectionOne = ({ ...rest }) => {
  return (
    <>
      {/* About us content-1 */}
      <div className="about-content-1">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-1-left">
                <img className="w-100" src={imageOne} alt="about content" />
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-1-right">
                <img className="w-100" src={imageTwo} alt="about content" />
              </div>
            </div>
          </div>
          <div className="row about-content-1-bottom">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="section__heading">
                <h2>快乐生活</h2>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="about-content-1-content">
                <p>
                人活着一辈子，不求大富大贵，但也别把自己逼的太紧。用平常心面对平凡普通生活，人舒坦了，心也舒坦。
                </p>
                <p>
                我见过很多人，过分在意别人的眼光，企图在外界的评价中寻求自我的价值。但其实，生活是自己的，我们都是活给自己看的。在这个世界上，我们都一样，各自有各自的光芒。放下自以为是的偏执和无用的面子，别拘谨，别敏感。不乱于心，过好当下，也就活得轻松自在些。
                </p>
                <p>
                控制坏情绪，释放好心情
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionOne
