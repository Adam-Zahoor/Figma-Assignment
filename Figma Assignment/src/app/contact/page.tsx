import Image from "next/image";
import image33 from "@/contact-images/512.333.2222.png";
import image34 from "@/contact-images/Company Name 1234 Sample Street Austin Texas 76401.png";
import image35 from "@/contact-images/Frame 11.png";
import image36 from "@/contact-images/Frame 12.png";
import image37 from "@/contact-images/image 14.png";
import image38 from "@/contact-images/sampleemail@gmail.com.png";


export default function Contact() {
    return (
        <div>
            <Image className="image36" src={image36} alt="" ></Image>

            <Image className="image34" src={image34} alt="" ></Image>

            <Image className="image33" src={image33} alt="" ></Image>

            <Image className="image38" src={image38} alt="" ></Image>

            <Image className="image35" src={image35} alt="" ></Image>

            <Image className="image37" src={image37} alt="" ></Image>

        </div>
    )
}