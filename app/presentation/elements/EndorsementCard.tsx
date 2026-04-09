import { Icon } from "./Icon";

interface Props {
  text: string;
  name: string;
  organisation: string;
  width?: string | number;
}

export function EndorsementCard({
  text,
  width = "400px",
  name,
  organisation,
}: Props) {
  return (
    <div
      className="middle  center  col gap-10 w-100 clickable"
      style={{
        maxWidth: width,
        justifyContent: "start",
        borderRadius: 5,
        cursor: "default",
      }}
    >
      <div className="col middle m-20 w-100">
        <h4 style={{ textAlign: "center" }}>"{text}"</h4>
        <h3 className="mt-20" style={{ fontWeight: 600 }}>
          — {name}, {organisation}
        </h3>
      </div>
    </div>
  );
}
