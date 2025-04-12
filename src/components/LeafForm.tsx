
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Leaf, MapPin, Ruler, Truck, Send } from "lucide-react";

const LeafForm = () => {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    leafType: "",
    customLeafType: "",
    location: "",
    amount: "",
    collectManure: "",
    name: "",
    phone: "",
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    // Validate current step
    if (formStep === 0) {
      if (!formData.leafType) {
        toast({
          title: "Required field missing",
          description: "Please select a leaf type",
          variant: "destructive"
        });
        return;
      }
      if (formData.leafType === "other" && !formData.customLeafType) {
        toast({
          title: "Required field missing",
          description: "Please specify the leaf type",
          variant: "destructive"
        });
        return;
      }
    } else if (formStep === 1) {
      if (!formData.location) {
        toast({
          title: "Required field missing",
          description: "Please enter your location",
          variant: "destructive"
        });
        return;
      }
    } else if (formStep === 2) {
      if (!formData.amount) {
        toast({
          title: "Required field missing",
          description: "Please select the amount of leaves",
          variant: "destructive"
        });
        return;
      }
    } else if (formStep === 3) {
      if (!formData.collectManure) {
        toast({
          title: "Required field missing",
          description: "Please select whether you want to collect manure",
          variant: "destructive"
        });
        return;
      }
    }

    setFormStep(prev => prev + 1);
  };

  const handleBack = () => {
    setFormStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate final step
    if (!formData.name || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request submitted successfully!",
        description: "A collection team will contact you soon to arrange pickup."
      });
      setIsSubmitting(false);
      // Reset form data and go back to step 0
      setFormData({
        leafType: "",
        customLeafType: "",
        location: "",
        amount: "",
        collectManure: "",
        name: "",
        phone: "",
        additionalInfo: ""
      });
      setFormStep(0);
    }, 1500);
  };

  // Step indicators with icons
  const steps = [
    { icon: Leaf, label: "Leaf Type" },
    { icon: MapPin, label: "Location" },
    { icon: Ruler, label: "Amount" },
    { icon: Truck, label: "Collection" },
    { icon: Send, label: "Submit" }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6 text-center text-ps-brown-dark">
        Dry Leaves Collection Request
      </h3>
      
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center"
              >
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    formStep >= index 
                      ? "bg-ps-green text-white" 
                      : "bg-ps-green-light/30 text-ps-green-dark/50"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <span className={`text-xs ${formStep === index ? "font-medium text-ps-green-dark" : "text-foreground/50"}`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
        <div className="relative mt-2 h-1 bg-ps-green-light/30 rounded">
          <div 
            className="absolute h-1 bg-ps-green rounded transition-all duration-300"
            style={{ width: `${(formStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Step 1: Leaf Type */}
        {formStep === 0 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <Label htmlFor="leafType">What type of leaves do you have?</Label>
              <Select 
                value={formData.leafType} 
                onValueChange={(value) => updateFormData("leafType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select leaf type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mango">Mango Leaves</SelectItem>
                  <SelectItem value="neem">Neem Leaves</SelectItem>
                  <SelectItem value="banyan">Banyan Leaves</SelectItem>
                  <SelectItem value="peepal">Peepal Leaves</SelectItem>
                  <SelectItem value="mixed">Mixed Leaves</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {formData.leafType === "other" && (
              <div>
                <Label htmlFor="customLeafType">Please specify</Label>
                <Input
                  id="customLeafType"
                  value={formData.customLeafType}
                  onChange={(e) => updateFormData("customLeafType", e.target.value)}
                  placeholder="Enter leaf type"
                />
              </div>
            )}
          </div>
        )}
        
        {/* Step 2: Location */}
        {formStep === 1 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <Label htmlFor="location">Your location for pickup</Label>
              <Textarea
                id="location"
                value={formData.location}
                onChange={(e) => updateFormData("location", e.target.value)}
                placeholder="Enter your full address"
                rows={4}
              />
            </div>
          </div>
        )}
        
        {/* Step 3: Amount */}
        {formStep === 2 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <Label htmlFor="amount">Approximate amount of leaves</Label>
              <RadioGroup 
                value={formData.amount} 
                onValueChange={(value) => updateFormData("amount", value)}
              >
                <div className="flex items-center space-x-2 py-2">
                  <RadioGroupItem value="small" id="small" />
                  <Label htmlFor="small" className="font-normal">Small (1-2 bags)</Label>
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium" className="font-normal">Medium (3-5 bags)</Label>
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <RadioGroupItem value="large" id="large" />
                  <Label htmlFor="large" className="font-normal">Large (6+ bags)</Label>
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <RadioGroupItem value="pile" id="pile" />
                  <Label htmlFor="pile" className="font-normal">Open pile (not bagged)</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}
        
        {/* Step 4: Collect Manure */}
        {formStep === 3 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <Label htmlFor="collectManure">Would you like to collect manure?</Label>
              <RadioGroup 
                value={formData.collectManure} 
                onValueChange={(value) => updateFormData("collectManure", value)}
              >
                <div className="flex items-center space-x-2 py-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="font-normal">Yes, I'd like free manure in return</Label>
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="font-normal">No, just collect the leaves</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}
        
        {/* Step 5: Contact Information */}
        {formStep === 4 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <Label htmlFor="name">Your Name*</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number*</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                placeholder="Any special instructions or information"
                rows={3}
              />
            </div>
          </div>
        )}
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          {formStep > 0 && (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
            >
              Back
            </Button>
          )}
          
          {formStep < steps.length - 1 ? (
            <Button
              type="button"
              className="bg-ps-green hover:bg-ps-green-dark ml-auto"
              onClick={handleNext}
            >
              Continue
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-ps-green hover:bg-ps-green-dark ml-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LeafForm;
