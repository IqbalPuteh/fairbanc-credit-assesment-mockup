
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import PageContainer from "@/components/layout/PageContainer";
import FormCard from "@/components/ui/form-card";
import { useToast } from "@/components/ui/use-toast";

const CompanyInfoPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    taxId: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    if (!formData.companyName || !formData.taxId) {
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
      description: "Your company information has been submitted successfully",
    });
    navigate("/bank-options");
  };

  return (
    <PageContainer className="flex items-center justify-center p-4">
      <FormCard 
        title="Help Us Get to Know You Better"
        subtitle="Unlock faster, smarter decisions and drive sustainable growth with InsightHub CoPilot – your 24/7 AI financial advisor"
      >
        <div className="mt-4">
          <h3 className="text-base font-medium mb-6">
            Share your company name and tax ID to personalize your experience and unlock tailored insights.
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-base font-medium">
                Nama Perusahaan <span className="text-red-500">*</span>
              </Label>
              <Input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Silahkan isi nama lengkap"
                value={formData.companyName}
                onChange={handleChange}
                className="bg-blue-50/50 h-12"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="taxId" className="text-base font-medium">
                NPWP Perusahaan <span className="text-red-500">*</span>
              </Label>
              <Input
                id="taxId"
                name="taxId"
                type="text"
                placeholder="Silahkan isi NIK KTP"
                value={formData.taxId}
                onChange={handleChange}
                className="bg-blue-50/50 h-12"
              />
            </div>
            
            <div className="flex items-start space-x-2 pt-2">
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
            
            <Button type="submit" className="w-full py-6" disabled={!agreedToTerms}>
              Submit
            </Button>
          </form>
        </div>
      </FormCard>
    </PageContainer>
  );
};

export default CompanyInfoPage;
