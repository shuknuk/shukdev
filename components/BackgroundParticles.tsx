import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";

export default function BackgroundParticles() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  
  // Particles configuration parameters
  const quantity = 350;       // Increase for more particles
  const staticity = 80;       // Lower = more movement
  const size = 1.0;           // Increased particle size for better visibility
  const ease = 50;            // Movement smoothness (higher = smoother)

  useEffect(() => {
    // Set particle color based on theme
    // Using higher contrast colors for better visibility
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#252525");
  }, [resolvedTheme]);

  return (
    <div className="fixed inset-0 z-0">
      <Particles
        quantity={quantity}
        staticity={staticity}
        ease={ease}
        size={size}
        color={color}
        className="inset-0"
        refresh
      />
    </div>
  );
}
