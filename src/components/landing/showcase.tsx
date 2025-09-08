import Image from 'next/image';

export function Showcase() {
  return (
    <section id="showcase" className="py-24 sm:py-32 bg-secondary">
      <div className="container space-y-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">AI-Powered Discovery</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Stop guessing. Our intelligent algorithm connects you with influencers whose audience perfectly matches your target demographic. Filter by niche, engagement, location, and more to find your ideal partner in minutes.
            </p>
          </div>
          <Image
            src="https://picsum.photos/800/600"
            width={800}
            height={600}
            className="rounded-lg shadow-xl"
            data-ai-hint="network connection"
            alt="Illustration of network connections"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Image
            src="https://picsum.photos/800/601"
            width={800}
            height={601}
            className="rounded-lg shadow-xl lg:order-last"
            data-ai-hint="team collaboration"
            alt="Illustration of team collaboration"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Seamless Collaboration</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              From initial outreach to final payment, manage your entire campaign workflow in one place. Our integrated tools for communication, contract management, and content approval make collaboration effortless and transparent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
