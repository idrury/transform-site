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
      className="middle accent boxed center  col gap-10 w-100 clickable outline-bkg "
      style={{
        maxWidth: width,
        justifyContent: "start",
        borderRadius: 5,
        cursor: "default",
      }}
    >
      <div className="col middle w-100">
        <div className="col middle p-20">
           <h4 className="mb-10" style={{ fontWeight: 200 }}>
            <b  style={{fontWeight: 600}}>{name}</b>, {organisation}
          </h4>
          <p style={{ textAlign: "center" }}>"{text}"</p>
         
        </div>
      </div>
    </div>
  );
}
