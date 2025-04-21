import { BarChartIcon, CarIcon, GamepadIcon, UsersIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface VisionProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const VisionMission: VisionProps[] = [
  {
    icon: <CarIcon/>,
    title: "Accesibility",
    description:
      "Making cybersecurity education accessible to everyone, regardless of background or experience.",
  },
  {
    icon: <UsersIcon/>,
    title: "Community",
    description:
      "Fostering a collaborative learning space where users grow together and share knowledge.",
  },
  {
    icon: <BarChartIcon/>,
    title: "Scalability",
    description:
      "Built to adapt and expand with new scenarios and users as the world of cyber evolves.",
  },
  {
    icon: <GamepadIcon/>,
    title: "Gamification",
    description:
      "Turning learning into a challenge by using simulations and interactive tools to boost engagement.",
  },
];

export const VisionAndMission = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Vision{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          And{" "}
        </span>
        Mission
      </h2>
      
      <br></br>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {VisionMission.map(({ icon, title, description }: VisionProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
