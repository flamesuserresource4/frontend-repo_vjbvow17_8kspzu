import { useMemo, useState } from "react";
import Topbar from "./components/Topbar";
import StatsBar from "./components/StatsBar";
import CustomerTable from "./components/CustomerTable";
import CustomerFormModal from "./components/CustomerFormModal";

function App() {
  const [customers, setCustomers] = useState([
    {
      id: "c1",
      name: "Ava Thompson",
      title: "Head of Operations",
      company: "Northwind Co",
      industry: "Logistics",
      email: "ava.thompson@northwind.co",
      phone: "+1 (555) 210-9843",
      status: "Active",
    },
    {
      id: "c2",
      name: "Liam Martinez",
      title: "CTO",
      company: "Aurora Tech",
      industry: "Software",
      email: "liam@auroratech.io",
      phone: "+1 (555) 331-7788",
      status: "Prospect",
    },
    {
      id: "c3",
      name: "Noah Johnson",
      title: "Procurement Lead",
      company: "GreenLeaf Foods",
      industry: "FMCG",
      email: "noah.j@greenleaf.com",
      phone: "+1 (555) 456-1920",
      status: "Active",
    },
    {
      id: "c4",
      name: "Emma Wilson",
      title: "VP Sales",
      company: "Voyage Air",
      industry: "Aviation",
      email: "emma.wilson@voyageair.com",
      phone: "+1 (555) 809-3321",
      status: "Inactive",
    },
    {
      id: "c5",
      name: "Oliver Davis",
      title: "COO",
      company: "Summit Health",
      industry: "Healthcare",
      email: "oliver@summithealth.org",
      phone: "+1 (555) 902-6677",
      status: "Active",
    },
    {
      id: "c6",
      name: "Sophia Chen",
      title: "Product Manager",
      company: "Aurora Tech",
      industry: "Software",
      email: "sophia.chen@auroratech.io",
      phone: "+1 (555) 120-4570",
      status: "Prospect",
    },
  ]);

  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return customers;
    return customers.filter((c) =>
      [c.name, c.company, c.email, c.phone, c.industry, c.title]
        .filter(Boolean)
        .some((v) => v.toLowerCase().includes(q))
    );
  }, [customers, search]);

  const handleAddCustomer = (data) => {
    const id = `c${Date.now()}`;
    setCustomers((prev) => [{ id, ...data }, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Topbar onAddCustomer={() => setIsModalOpen(true)} search={search} setSearch={setSearch} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <StatsBar customers={customers} />

        <section className="space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Customers</h2>
              <p className="text-sm text-slate-500">Track people and companies you work with</p>
            </div>
            <div className="text-sm text-slate-500">{filtered.length} shown</div>
          </div>
          <CustomerTable customers={filtered} />
        </section>
      </main>

      <CustomerFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCustomer}
      />
    </div>
  );
}

export default App;
