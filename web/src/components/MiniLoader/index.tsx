import "@/styles/components/mini-loader.scss";

export default function MiniLoader({
  bottomSpace = false,
}: {
  bottomSpace?: boolean;
}) {
  return (
    <div
      className="mini-loader"
      style={bottomSpace ? { marginBottom: "3rem" } : { marginBottom: "0rem" }}
    ></div>
  );
}
