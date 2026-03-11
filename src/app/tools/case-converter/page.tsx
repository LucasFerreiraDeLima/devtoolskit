import ToolLayout from "../../components/ToolLayout";
import CaseConverterClient from "./CaseConverterClient";
import CaseConverterHeader from "./CaseConverterHeader";
import CaseConverterInfo from "./CaseConverterInfo";

export const metadata = {
  title: "Case Converter – Convert Text to Uppercase, Lowercase, CamelCase and More",
  description:
    "Free online case converter. Instantly convert text to uppercase, lowercase, camelCase, snake_case, kebab-case and more.",
};

export default function CaseConverterPage() {
  return (
    <ToolLayout title={<CaseConverterHeader />}>
      <CaseConverterClient />
      <CaseConverterInfo />
    </ToolLayout>
  );
}
