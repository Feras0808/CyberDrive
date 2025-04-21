import { Button } from "./ui/button";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Ready To
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Take Control of{" "}
            </span>
            cybersecurity on the road?
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
          Join CyberDrive and dive into an immersive simulation where learning meets real-world defense. 
          Whether you're a student, an enthusiast, or just curious — defend the virtual car, close the vulnerable ports, and challenge yourself to stop cyber attacks before they strike.
          <br></br>🔒 Let’s shift gears toward a safer digital future — Start your journey now!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Start Simulation</Button>
          <Link
            href="https://github.com/Feras0808/CyberDrive.git"
            target="_blank"
            className={`w-full md:w-auto ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Explore Attacks
          </Link>
        </div>
      </div>
    </section>
  );
};
