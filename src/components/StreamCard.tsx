import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface StreamCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "primary" | "secondary" | "accent";
  href: string;
  delay?: number;
}

const colorClasses = {
  primary: "gradient-primary",
  secondary: "gradient-secondary",
  accent: "gradient-accent",
};

export function StreamCard({
  title,
  description,
  icon: Icon,
  color,
  href,
  delay = 0,
}: StreamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link to={href}>
        <div className="group relative bg-card rounded-xl p-6 shadow-lg hover-lift border border-border overflow-hidden">
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity ${colorClasses[color]}`}
          />
          <div
            className={`w-14 h-14 rounded-xl ${colorClasses[color]} flex items-center justify-center mb-4`}
          >
            <Icon className="w-7 h-7 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}