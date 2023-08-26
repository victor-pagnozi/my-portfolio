import {
  Stethoscope,
  Plane,
  Sprout,
  Tv,
  Dumbbell,
  Building2,
} from "lucide-react";

export function RightSideBar() {
  return (
    <div className="mt-8 ml-5 mr-6 grid gap-6">
      <div className="align-items">
        <div className="circle-icons border-red-500">
          <Stethoscope color="white" size={28} />
        </div>
        <h4 className="text-icon">Doctors</h4>
      </div>

      <div className="align-items">
        <div className="circle-icons border-pink-300">
          <Plane color="white" size={28} />
        </div>
        <h4 className="text-icon">Travel</h4>
      </div>

      <div className="align-items">
        <div className="circle-icons border-green-800">
          <Sprout color="white" size={28} />
        </div>
        <h4 className="text-icon">Farming</h4>
      </div>

      <div className="align-items">
        <div className="circle-icons border-purple-500">
          <Tv color="white" size={28} />
        </div>
        <h4 className="text-icon">Streaming</h4>
      </div>

      <div className="align-items">
        <div className="circle-icons border-orange-500">
          <Dumbbell color="white" size={28} />
        </div>
        <h4 className="text-icon">GYM</h4>
      </div>

      <div className="align-items">
        <div className="circle-icons border-yellow-500">
          <Building2 color="white" size={28} />
        </div>
        <h4 className="text-icon">Business</h4>
      </div>
    </div>
  );
}
