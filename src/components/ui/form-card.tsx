
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface FormCardProps {
  title: string;
  subtitle?: string;
  logo?: boolean;
  children: React.ReactNode;
  bgPattern?: boolean;
}

const FormCard: React.FC<FormCardProps> = ({
  title,
  subtitle,
  logo = true,
  children,
  bgPattern = true,
}) => {
  return (
    <Card className="w-full max-w-3xl shadow-md border-0">
      <CardHeader className={`${bgPattern ? 'bg-fairbanc-blue bg-[url("/pattern-bg.png")] bg-cover' : ''} text-white p-8`}>
        {logo && (
          <div className="mb-4 flex justify-center">
            <img src="/fairbanc-white-logo.png" alt="Fairbanc" className="h-8" />
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-semibold text-center">{title}</h2>
        {subtitle && (
          <p className="text-sm md:text-base mt-2 text-center max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </CardHeader>
      <CardContent className="p-8">
        {children}
      </CardContent>
    </Card>
  );
};

export default FormCard;
