import { CardWrapper } from "@/components/auth/card-wrapper";
import { TriangleAlert } from "lucide-react";

export function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex items-center justify-center">
        <TriangleAlert className="text-destructive h-10 w-10" />
      </div>
    </CardWrapper>
  );
}
