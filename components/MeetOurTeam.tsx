import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/Azoz.jpg";
import image3 from "../assets/Feras.jpg";
import image4 from "../assets/Amal.jpg";
import image5 from "../assets/Dana.jpg";
import image6 from "../assets/Tala.jpg";
import Image, { StaticImageData } from "next/image";

interface teamProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const meetourteam: teamProps[] = [
  {
    title: "Amal Khalil",
    description:
      "Simulation Developer",
    image: image4,
  },
  {
    title: "Feras Shtiewi",
    description:
      "Front-End Developer",
    image: image3,
  },
  {
    title: "Abdulrahman Alzuweiri",
    description:
      "Simulation Developer",
    image: image,
  },
  {
    title: "Dana Mohammed",
    description:
      "DataBase Management",
    image: image5,
  },
  {
    title: "Tala Ashraf",
    description:
      "Back-End Developer",
    image: image6,
  },
];


export const MeetOurTeam = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Meet{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our{" "}
        </span>
        Team
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {meetourteam.map(({ title, description, image }: teamProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <Image
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
