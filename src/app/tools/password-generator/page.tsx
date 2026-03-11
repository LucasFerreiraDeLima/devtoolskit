import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import PasswordGeneratorClient from "./PasswordGeneratorClient";
import PasswordGeneratorHeader from "./PasswordGeneratorHeader";
import PasswordGeneratorInfo from "./PasswordGeneratorInfo";

export const metadata = {
  title: "Password Generator – Free Secure Password Generator",
  description:
    "Generate secure random passwords instantly with this free online password generator. Customize length, symbols, numbers and letters.",
};

export default function PasswordGeneratorPage() {
  return (
    <ToolLayout title={<PasswordGeneratorHeader />} description="Generate secure random passwords instantly with custom options.">
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      <PasswordGeneratorClient />
      <hr className="my-8" />
      <PasswordGeneratorInfo />
    </ToolLayout>
  );
}
