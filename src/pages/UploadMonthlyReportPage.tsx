
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import PageContainer from "@/components/layout/PageContainer";
import FormCard from "@/components/ui/form-card";
import { useToast } from "@/components/ui/use-toast";

const UploadMonthlyReportPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast({
        title: "Error",
        description: "Please upload a monthly report",
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

    // Mock upload and navigate to success page
    toast({
      title: "Upload successful",
      description: "Your monthly report has been uploaded successfully",
    });
    navigate("/success");
  };

  return (
    <PageContainer className="flex items-center justify-center p-4">
      <FormCard 
        title="Upload Your Monthly Reports"
        subtitle="Easily upload multiple files, including sales, payment, and inventory reports, to provide a complete financial snapshot for accurate assessment"
      >
        <div className="mt-4">
          <h3 className="text-base font-medium mb-2">
            Share your monthly reports to personalize your experience and unlock tailored insights.
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="space-y-2">
              <Label htmlFor="monthly_report" className="text-base font-medium">
                Upload Monthly Report <span className="text-red-500">*</span>
              </Label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                {file ? (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setFile(null)}
                    >
                      Change file
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-500">Able to upload multiple monthly reports in pdf</p>
                    <div>
                      <Input
                        id="monthly_report"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => document.getElementById("monthly_report")?.click()}
                      >
                        Choose File
                      </Button>
                    </div>
                  </div>
                )}
              </div>
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
            
            <Button type="submit" className="w-full py-6" disabled={!agreedToTerms || !file}>
              Upload
            </Button>
          </form>
        </div>
      </FormCard>
    </PageContainer>
  );
};

export default UploadMonthlyReportPage;
