const specialties = [
  'General Surgery','Gynaecology','Gastroenterology','Dermatology','Anaesthesia',
  'Orthopaedics','General Medicine','Paediatrics','Radiology','ENT','Pulmonology','Gastro Surgery',
];

export default function Ticker() {
  const items = [...specialties, ...specialties];
  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="flex animate-[ticker_30s_linear_infinite] whitespace-nowrap w-max">
        {items.map((s, i) => (
          <span key={i} className="text-white font-medium text-sm mx-6">
            {s} <span className="text-cyan-400 mx-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
