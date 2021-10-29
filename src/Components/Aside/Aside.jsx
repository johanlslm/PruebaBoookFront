import React from "react";
import './Aside.scss'

const Aside = () => {
    return (
        <aside className="aside">
            <div className="container-aside">
                <div className="aside_img">
                    <h3>Interesting stuff</h3>
                    <div className="img_box">
                        <img alt="" src="images/pic04.jpg"></img>
                        <img alt="" src="images/pic05.jpg"></img>
                        <img alt="" src="images/pic06.jpg"></img>
                        <img alt="" src="images/pic07.jpg"></img>
                    </div>
                    <button>
                        <span>
                            <i className="fa fa-file-text" aria-hidden="true"></i> More
                        </span>
                    </button>
                </div>
                <div className="aside_txt">
                    <h2>So what's this all about?</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed et quos asperiores aperiam vitae? Reiciendis id totam modi nulla quia accusamus, repellendus est, non doloribus facere iste amet. Soluta commodi expedita sed illum reprehenderit qui eaque temporibus nobis cumque, quae exercitationem consequuntur hic totam sunt vero ab provident debitis magnam dignissimos in odit! Culpa omnis nesciunt minus dolor impedit nisi expedita rerum, ratione fugit repellat est inventore et, iure laboriosam incidunt totam voluptas beatae architecto, voluptate consequatur. Corrupti molestias repudiandae non, tenetur deserunt error ad repellendus earum qui. Amet harum, ea incidunt asperiores cum quia minima quaerat quisquam reiciendis numquam.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nesciunt voluptatum, aut commodi recusandae consequuntur nam modi vero doloribus, cupiditate omnis quod officia earum quaerat aliquam eaque.</p>
                    <button>
                        <span>
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </span> Continue Reading
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Aside;