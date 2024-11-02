import Image from "next/image";
import image16 from "@/Footer.png";

export default function Footer() {
    return (
        <div>
            <footer>
                <Image className="image16" src={image16} alt=""></Image>
            </footer>
        </div>
    )
}