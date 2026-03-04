import ToolLayout from "../../components/ToolLayout";

export const metadata = {
  title: "Case Converter – Convert Text to Uppercase, Lowercase, CamelCase and More",
  description:
    "Free online case converter. Instantly convert text to uppercase, lowercase, camelCase, snake_case, kebab-case and more.",
};



import CaseConverterClient from "./CaseConverterClient";

export default function CaseConverterPage() {
  return (
    <ToolLayout
      title="Case Converter"
      description="Convert text to uppercase, lowercase, camelCase, snake_case, kebab-case and more."
    >
      <CaseConverterClient />
    </ToolLayout>
  );
}
