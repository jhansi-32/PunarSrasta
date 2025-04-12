
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

const CategoryCard = ({ title, description, icon: Icon, to }: CategoryCardProps) => {
  return (
    <Link to={to} className="category-card">
      <div className="category-icon">
        <Icon size={28} />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-ps-brown-dark">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </Link>
  );
};

export default CategoryCard;
