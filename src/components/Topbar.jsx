import { Plus, Search, User } from "lucide-react";

export default function Topbar({ onAddCustomer, search, setSearch }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-blue-600 text-white grid place-items-center font-bold">CR</div>
          <div>
            <h1 className="text-lg font-semibold">Customer CRM</h1>
            <p className="text-xs text-slate-500 -mt-1">Manage relationships with ease</p>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-6 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customers by name, company, email..."
              className="w-full pl-9 pr-3 py-2 rounded-lg border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onAddCustomer}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 active:scale-[.98] transition"
          >
            <Plus className="h-4 w-4" />
            Add customer
          </button>
          <div className="h-9 w-9 rounded-full bg-slate-100 grid place-items-center text-slate-600">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
