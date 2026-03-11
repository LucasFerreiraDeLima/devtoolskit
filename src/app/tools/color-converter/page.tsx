import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import ColorConverterClient from "./ColorConverterClient";
import ColorConverterHeader from "./ColorConverterHeader";
import ColorConverterInfo from "./ColorConverterInfo";

export const metadata = {
  title: "Color Converter – HEX, RGB and HSL Color Converter",
  description:
    "Convert colors between HEX, RGB and HSL instantly with this free online color converter. Perfect for web developers and designers.",
};

export default function ColorConverterPage() {
  return (
    <ToolLayout title={<ColorConverterHeader />}>
      {/* Ad abaixo do título */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <ColorConverterClient />
      {/* Educational content */}
      <ColorConverterInfo />
    </ToolLayout>
  );
}
