
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import PageContainer from "@/components/layout/PageContainer";
import FormCard from "@/components/ui/form-card";
import { useToast } from "@/components/ui/use-toast";

const ERPLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
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

    // Mock login
    navigate("/company-info");
  };

  return (
    <PageContainer className="flex items-center justify-center p-4">
      <FormCard 
        title="Connect Your ERP for Seamless Data Integration"
        subtitle="Select your ERP system to effortlessly sync financial data and accelerate your credit assessment"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-base font-medium">
              Username <span className="text-red-500">*</span>
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Fill your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-blue-50/50 h-12"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-base font-medium">
              Password <span className="text-red-500">*</span>
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Fill your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
      </FormCard>
    </PageContainer>
  );
};

export default ERPLoginPage;
