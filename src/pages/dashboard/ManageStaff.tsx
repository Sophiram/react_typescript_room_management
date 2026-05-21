import { Plus, Shield, Mail, Phone, Edit2, Trash2 } from 'lucide-react';

export function ManageStaff() {
  const staff = [
    { id: 1, name: 'Sok Mean', role: 'Super Admin', email: 'mean.sok@system.com', phone: '+855 12 888 999', status: 'Active' },
    { id: 2, name: 'Chan Thavy', role: 'Manager', email: 'thavy.c@system.com', phone: '+855 99 777 666', status: 'Active' },
    { id: 3, name: 'Keo Rotha', role: 'Maintenance Staff', email: 'rotha.keo@system.com', phone: '+855 88 555 444', status: 'On Leave' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Manage Staff</h1>
          <p className="text-xs text-slate-500">Control staff credentials, system administrative access, and shifts.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-blue-600/10">
          <Plus size={16} /> Add Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {staff.map((member) => (
          <div key={member.id} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4 hover:border-slate-200 transition-all">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 text-slate-700 font-bold rounded-xl flex items-center justify-center text-sm">{member.name[0]}</div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{member.name}</h3>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md mt-0.5">
                    <Shield size={10} /> {member.role}
                  </span>
                </div>
              </div>
              <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${member.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{member.status}</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2"><Mail size={14} className="text-slate-400" /> {member.email}</div>
              <div className="flex items-center gap-2"><Phone size={14} className="text-slate-400" /> {member.phone}</div>
            </div>
            <div className="pt-3 border-t border-slate-50 flex justify-end gap-2">
              <button className="px-3 py-1.5 border border-slate-100 text-slate-500 hover:text-blue-600 hover:bg-blue-50 text-[11px] font-bold uppercase rounded-lg transition-colors">Edit</button>
              <button className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition-colors"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}