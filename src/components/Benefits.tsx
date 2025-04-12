
import { CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

interface BenefitProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

const Benefit = ({ title, description, icon }: BenefitProps) => {
  return (
    <div className="benefit-item">
      <div className="benefit-icon">
        {icon || <CheckCircle2 size={20} />}
      </div>
      <div>
        <h4 className="font-medium text-ps-brown-dark">{title}</h4>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
};

interface BenefitsProps {
  title: string;
  benefits: BenefitProps[];
}

const Benefits = ({ title, benefits }: BenefitsProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-ps-brown-dark">{title}</h3>
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <Benefit key={index} {...benefit} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
