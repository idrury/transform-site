interface Props {
  text: string;
  name: string;
  organisation: string;
  width?:string | number
}

export function EndorsementCard({ text, width="400px", name, organisation }: Props) {
  return (
    <div
      className="accent p3 col gap-10 w-100"
      style={{ maxWidth: width, borderRadius: 5 }}
    >
      <h3 style={{ textAlign: "start" }}>"{text}"</h3>
      <p style={{ fontWeight: 600, fontSize: "11pt" }}>
        — {name}, {organisation}
      </p>
    </div>
  );
}
