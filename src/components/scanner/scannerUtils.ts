
import { supabase } from "@/integrations/supabase/client";
import { v4 as uuidv4 } from 'uuid';

export const mockDomesticResults = [
  {
    recyclable: true,
    type: "Paper",
    suggestions: [
      "Recycle with other paper products",
      "Remove any plastic or metal parts first",
      "Flatten to save space in recycling bin"
    ]
  },
  {
    recyclable: false,
    type: "Mixed Materials",
    suggestions: [
      "Not recyclable in standard facilities",
      "Check with local specialized recycling centers",
      "Consider reusing for other purposes"
    ]
  }
];

export const mockPlasticResults = [
  {
    recyclable: false,
    type: "Type 7 Plastic",
    suggestions: [
      "Create a decorative planter",
      "Use as storage containers",
      "Make a bird feeder",
      "Create jewelry or accessories"
    ]
  },
  {
    recyclable: true,
    type: "Type 1 PET Plastic",
    suggestions: [
      "Recycle with other plastic containers",
      "Remove labels and rinse clean",
      "Crush to save space in recycling bin"
    ]
  }
];

export const uploadImageToSupabase = async (file: File, type: "domestic" | "plastic"): Promise<string | null> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${type}/${fileName}`;
    
    const { data, error } = await supabase.storage
      .from('waste_images')
      .upload(filePath, file);
      
    if (error) {
      console.error("Storage upload error:", error);
      throw error;
    }
    
    const { data: { publicUrl } } = supabase.storage
      .from('waste_images')
      .getPublicUrl(filePath);
      
    return publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

export const saveScanResult = async (
  imagePath: string, 
  result: { recyclable: boolean; type?: string; suggestions?: string[] },
  type: "domestic" | "plastic"
) => {
  try {
    const { error } = await supabase
      .from('waste_items')
      .insert({
        name: type === 'domestic' ? result.type : `${result.type} Container`,
        type: type,
        recyclable: result.recyclable,
        image_path: imagePath
      });
      
    if (error) {
      console.error("Database insert error:", error);
      throw error;
    }
    
    return true;
  } catch (error) {
    console.error('Error saving scan result:', error);
    return false;
  }
};
