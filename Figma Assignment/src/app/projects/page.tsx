import Image from "next/image";
import image28 from "@/project-images/our-projects.png";
import image29 from "@/project-images/sample-project-1.png";
import image30 from "@/project-images/sample-project-2.png";
import image31 from "@/project-images/sample-project-3.png";

export default function Projects() {
    return (
        <div>
            <Image className="image28" src={image28} alt=""></Image>
       
            <Image  className="image29" src={image29} alt=""></Image>

            <Image  className="image30" src={image30} alt=""></Image>

            <Image  className="image31" src={image31} alt=""></Image>
            
        </div>

    )
}