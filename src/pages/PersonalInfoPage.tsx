
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import PageContainer from "@/components/layout/PageContainer";
import FormCard from "@/components/ui/form-card";
import { useToast } from "@/components/ui/use-toast";

const PersonalInfoPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    birthplace: "",
    birthdate: "",
    address: "",
    idNumber: "",
    gender: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    const requiredFields = ["fullName", "birthplace", "birthdate", "address", "idNumber", "gender"];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    if (!agreedToTerms) {
      toast({
        title: "Error",
        description: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    // Submit form
    toast({
      title: "Success",
      description: "Your information has been submitted successfully",
    });
    navigate("/success");
  };

  return (
    <PageContainer className="flex items-center justify-center p-4">
      <FormCard 
        title="Help Us Get to Know You Better"
        subtitle="Unlock faster, smarter decisions and drive sustainable growth with InsightHub CoPilot – your 24/7 AI financial advisor"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-base font-medium">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Fill your full name as in the ID"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-blue-50/50 h-12"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="birthplace" className="text-base font-medium">
              Birthplace <span className="text-red-500">*</span>
            </Label>
            <Input
              id="birthplace"
              name="birthplace"
              type="text"
              placeholder="Fill your birthplace"
              value={formData.birthplace}
              onChange={handleChange}
              className="bg-blue-50/50 h-12"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="birthdate" className="text-base font-medium">
              Birthdate <span className="text-red-500">*</span>
            </Label>
            <Input
              id="birthdate"
              name="birthdate"
              type="date"
              placeholder="Fill your birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="bg-blue-50/50 h-12"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address" className="text-base font-medium">
              Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="Fill your address as in the ID"
              value={formData.address}
              onChange={handleChange}
              className="bg-blue-50/50 h-12"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="idNumber" className="text-base font-medium">
              Identity (ID) Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="idNumber"
              name="idNumber"
              type="text"
              placeholder="Fill your address as in the ID"
              value={formData.idNumber}
              onChange={handleChange}
              className="bg-blue-50/50 h-12"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="gender" className="text-base font-medium">
              Gender <span className="text-red-500">*</span>
            </Label>
            <Select 
              value={formData.gender} 
              onValueChange={(value) => handleSelectChange(value, "gender")}
            >
              <SelectTrigger className="bg-blue-50/50 h-12">
                <SelectValue placeholder="Choose gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-start space-x-2 pt-4">
            <Checkbox 
              id="terms" 
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            />
            <Label htmlFor="terms" className="font-normal text-gray-600 text-sm leading-tight">
              Saya setuju data saya digunakan untuk analisis laporan keuangan dan tujuan finansial lainnya sesuai 
              dengan ketentuan yang berlaku.
            </Label>
          </div>
          
          <Button type="submit" className="w-full py-6 mt-4" disabled={!agreedToTerms}>
            Submit
          </Button>
        </form>
      </FormCard>
    </PageContainer>
  );
};

export default PersonalInfoPage;
