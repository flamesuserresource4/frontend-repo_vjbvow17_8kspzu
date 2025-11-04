import { Users, Building2, UserCheck } from "lucide-react";

export default function StatsBar({ customers }) {
  const total = customers.length;
  const byCompany = new Set(customers.map((c) => c.company)).size;
  const active = customers.filter((c) => c.status === "Active").length;

  const Item = ({ icon: Icon, label, value, accent }) => (
    <div className="flex-1 rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className={`h-10 w-10 rounded-lg grid place-items-center ${accent}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Item icon={Users} label="Total Customers" value={total} accent="bg-blue-600" />
      <Item icon={Building2} label="Companies" value={byCompany} accent="bg-emerald-600" />
      <Item icon={UserCheck} label="Active" value={active} accent="bg-amber-600" />
    </section>
  );
}
