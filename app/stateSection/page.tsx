"use client";

const stats = [
  {
    id: 1,
    value: "5000+",
    label: "Bikes on Road",
  },
  {
    id: 2,
    value: "12M+",
    label: "km CO₂ Saved",
  },
  {
    id: 3,
    value: "25+",
    label: "Service Centers",
  },
  {
    id: 4,
    value: "98%",
    label: "Customer Satisfaction",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-black border-y border-gray-900 py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((item) => (
            <div key={item.id}>
              {/* Number */}
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#00E676]">
                {item.value}
              </h2>

              {/* Label */}
              <p className="mt-4 text-gray-400 text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}