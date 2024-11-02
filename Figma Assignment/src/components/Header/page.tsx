import React from "react";
import Image from "next/image";
import image2 from "@/image1.jpg";
import image4 from "@/Main.png";
import image5 from "@/GALLERY.png";
import image6 from "@/PROJECTS.png";
import image7 from "@/CERTIFICATIONS.png";
import image8 from "@/COntacts.png";
import Link from "next/link";


export default function Header() {
return (
    <div className="header">
        <div className="images">
            <Image className="image2" src={image2} alt=""></Image>
        </div>

        <div className="headerButtons">
            <ul>
                <Link href="/" ><li><Image className="route1" src={image4} alt=""></Image></li></Link>
                <Link href={"/gallery"}><li><Image className="route2" src={image5} alt=""></Image></li></Link>
                <Link href={"/projects"}><li><Image className="route3" src={image6} alt=""></Image></li></Link>
                <Link href={"/certifications"}><li><Image className="route4" src={image7} alt=""></Image></li></Link>
                <Link href={"/contact"}><li><Image className="route5" src={image8} alt=""></Image></li></Link>
            </ul>
        </div>
    </div>
    )
}


