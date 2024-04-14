
import baseImgUrl from "../constants";

const DetailDisplay = ({ title, props }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <div className="flex gap-5">
        {props?.map((i) =>
          i.logo_path ? (
            <div className="bg-white px-1 py-2  rounded-md" key={i.id}>
              <img className="w-[100px] object-contain h-[40px]" src={baseImgUrl + i.logo_path} />
            </div>
          ) : (
            <span className="border p-1 rounded-md px-2" key={i.id}>{i.name}</span>
          )
        )}
      </div>
    </div>
  );
};

export default DetailDisplay;
