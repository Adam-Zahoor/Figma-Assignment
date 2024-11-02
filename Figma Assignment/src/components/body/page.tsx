import React from "react";
import image9 from "@/Rectangle 6.png";
import Image from "next/image";
import image10 from "@/PROJECT.png";
import image11 from "@/NURTOWN.png";
import image12 from "@/About.png";
import image14 from "@/Group 79.png";
import image15 from "@/Group 82.png";
import image from "@/Group 20.jpg";

export default function Body() {
    return (
        <div>
            <Image className="image9" src={image9} alt=""></Image>
            <Image className="image10" src={image10} alt=""></Image>
            <Image className="image11" src={image11} alt=""></Image>
            <br />
            <br />
            <div>
                <Image className="image12" src={image12} alt=""></Image>
            </div>
            <br />
            <br />
            <div>
                <Image className="image13" src={image} alt=""></Image>
            </div>
            <br /> 
            <br />
            <div>
                <Image className="image14" src={image14} alt=""></Image>
            </div>
            <br />
            <br />
            <div> 
                <Image className="image15" src={image15} alt=""></Image>
            </div>
            <br />
            <br />
        </div>
    )
}