// src/components/landing/trusted-by.tsx
import {
  BriefcaseBusinessIcon,
  WaypointsIcon,
  MountainIcon,
  ZapIcon,
  CloudyIcon,
} from "lucide-react";

export default function TrustedBy() {
  const logos = [
    { icon: BriefcaseBusinessIcon, name: "Innovate Inc." },
    { icon: WaypointsIcon, name: "Quantum Leap" },
    { icon: MountainIcon, name: "Apex Solutions" },
    { icon: ZapIcon, name: "Starlight Co." },
    { icon: CloudyIcon, name: "CloudNine" },
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Telah Dipercaya oleh Ratusan Klien
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground grayscale hover:grayscale-0 transition-all"
              >
                <logo.icon className="h-6 w-6" />
                <span className="font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
