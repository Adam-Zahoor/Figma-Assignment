import Image from "next/image";
import React from "react";
import image17 from "@/Frame 12.png";
import image18 from "@/gallery-images/Rectangle 22.png";
import image19 from "@/gallery-images/Rectangle 23.png";
import image20 from "@/gallery-images/Rectangle 24.png";
import image21 from "@/gallery-images/Rectangle 25.png";
import image22 from "@/gallery-images/Rectangle 26.png";
import image23 from "@/gallery-images/Rectangle 27.png";
import image24 from "@/gallery-images/Rectangle 28.png";
import image25 from "@/gallery-images/Rectangle 29.png";
import image26 from "@/gallery-images/Rectangle 30.png";
import image27 from "@/gallery-images/Rectangle 31.png";

export default function gallery() {
    return (
        <div>
            <Image className="image17" src={image17} alt=""></Image>
            <br />
            <div className="image-first-row">
                <Image className="image18" src={image18} alt=""></Image>
                <Image className="image19" src={image19} alt=""></Image>
                <Image className="image20" src={image20} alt=""></Image>
                <Image className="image21" src={image21} alt=""></Image>
                <Image className="image22" src={image22} alt=""></Image>
            </div>

            <div className="image-second-row">
                <Image className="image23" src={image23} alt=""></Image>
                <Image className="image24" src={image24} alt=""></Image>
                <Image className="image25" src={image25} alt=""></Image>
                <Image className="image26" src={image26} alt=""></Image>
                <Image className="image27" src={image27} alt=""></Image>
            </div>

        </div>
    )
}