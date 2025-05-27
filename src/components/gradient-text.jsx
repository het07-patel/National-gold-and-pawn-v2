export default function GradientText({ text = "" }) {
  return (
    <span className="bg-gradient-to-r from-[#eb2a1d] to-[#1d46eb] bg-clip-text text-transparent">
      {text}
    </span>
  );
}
