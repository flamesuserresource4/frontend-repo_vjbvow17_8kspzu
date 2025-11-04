import { Mail, Phone } from "lucide-react";

export default function CustomerTable({ customers }) {
  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600">Name</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600">Company</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600">Contact</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {customers.map((c) => (
            <tr key={c.id} className="hover:bg-slate-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-blue-100 text-blue-700 grid place-items-center font-medium">
                    {c.name.split(" ").map((n) => n[0]).slice(0,2).join("")}
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">{c.name}</div>
                    <div className="text-xs text-slate-500">{c.title}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-slate-700">{c.company}</div>
                <div className="text-xs text-slate-500">{c.industry}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-1"><Mail className="h-4 w-4" /> {c.email}</span>
                  <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4" /> {c.phone}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                    c.status === "Active"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-slate-50 text-slate-700 border-slate-200"
                  }`}
                >
                  {c.status}
                </span>
              </td>
            </tr>
          ))}

          {customers.length === 0 && (
            <tr>
              <td className="px-6 py-12 text-center text-slate-500" colSpan={4}>
                No customers match your search.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
