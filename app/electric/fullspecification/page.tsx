"use client";

import {
  Zap,
  BatteryCharging,
  Clock3,
  Weight,
  Gauge,
  Disc,
} from "lucide-react";

const specifications = [
  {
    id: 1,
    title: "8 kW BLDC Hub Motor",
    description: "Motor",
    icon: Zap,
  },
  {
    id: 2,
    title: "4.5 kWh Li-ion",
    description: "Battery",
    icon: BatteryCharging,
  },
  {
    id: 3,
    title: "3.5 hours",
    description: "Charge Time",
    icon: Clock3,
  },
  {
    id: 4,
    title: "135 kg",
    description: "Weight",
    icon: Weight,
  },
  {
    id: 5,
    title: "65 Nm",
    description: "Torque",
    icon: Gauge,
  },
  {
    id: 6,
    title: "CBS Disc Brakes",
    description: "Brakes",
    icon: Disc,
  },
];

export default function FullSpecifications() {
  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="mt-10">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white">
            Full{" "}
            <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Specifications
            </span>
          </h2>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">

          {specifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-[#111111] border border-white/10 rounded-xl p-6 text-center transition "
              >

                <Icon className="w-8 h-8 text-green-500 mx-auto mb-4" />

                <h3 className="text-white text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 text-base">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}