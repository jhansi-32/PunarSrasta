
import TipCard from "./TipCard";

const RecyclingTips = () => {
  const tipCategories = [
    {
      title: "Paper Products",
      tips: [
        "Remove plastic windows from envelopes",
        "Keep paper dry and clean",
        "Flatten cardboard boxes",
        "Remove tape and staples if possible"
      ]
    },
    {
      title: "Plastic Containers",
      tips: [
        "Rinse out food residue",
        "Remove lids and caps (recycle separately)",
        "Crush to save space",
        "Check for recycling symbols (#1 and #2 are most recyclable)"
      ]
    },
    {
      title: "Glass & Metal",
      tips: [
        "Rinse thoroughly",
        "Remove paper labels when possible",
        "Separate metal lids from glass jars",
        "Never put broken glass in recycling bin"
      ]
    }
  ];

  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold mb-6 text-ps-brown-dark">
        How to Prepare Common Household Items for Recycling
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tipCategories.map((category, index) => (
          <TipCard 
            key={index}
            title={category.title}
            tips={category.tips}
          />
        ))}
      </div>
    </div>
  );
};

export default RecyclingTips;
