import React,{useState} from 'react'
function Details(props) {
    const [info] = useState([
        {
            img_src: "./image/reacted.png",
          },
          {
            img_src: "./image/unreacted.png",
          },
          {
            img_src: "./image/message.png",
          },
          {
            img_src: "./image/share.png",
          }
      ]);
    return (
         <center>
        <div className="">
            <div>
                <img onClick={() => props.setIsLike(!props.isLike)} className="" src={props.isLike ? info[1].img_src : info[0].img_src} alt="" />
                <img className="details-down-icon" src={info[2].img_src} alt="" />
                <img className="" src={info[3].img_src} alt="" />
            </div>
        </div>
        </center>
    )
}
export default Details