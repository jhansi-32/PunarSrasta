
interface TipCardProps {
  title: string;
  tips: string[];
}

const TipCard = ({ title, tips }: TipCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="font-medium text-ps-brown-dark mb-2">{title}</h3>
      <ul className="text-sm text-foreground/70 space-y-2">
        {tips.map((tip, index) => (
          <li key={index}>• {tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default TipCard;
