export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Cyber Drive
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              CyberDrive is a dynamic and educational web-based platform developed to simulate cybersecurity threats in the context of modern smart vehicles. 
              As the automotive industry continues to evolve with advanced technologies like autonomous driving, internet connectivity, and onboard diagnostics, the potential for cyber attacks has significantly increased. 
              CyberDrive brings this real-world challenge into an interactive learning environment, where users—especially students—can explore, understand, and respond to various types of cyber threats targeting connected car systems.
              The simulation allows users to interact with a virtual vehicle dashboard where multiple cyber attack scenarios are triggered, such as unauthorized access attempts, open port vulnerabilities, and data breaches. 
              Users are challenged to identify these attacks in real time and apply defensive strategies such as closing ports, disabling compromised components, and reinforcing security protocols. 
              Through hands-on engagement, users develop a deeper understanding of network security principles, ethical hacking, and the importance of proactive defense in the automotive cyber world.
              CyberDrive is more than just a simulation—it’s a learning tool designed to bridge the gap between cybersecurity education and real-life applications in smart transportation systems.
              Whether you’re a student curious about ethical hacking, a beginner in cyber defense, or just passionate about cars and technology, CyberDrive provides a safe and intuitive space to explore one of the most critical challenges of the future.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};
