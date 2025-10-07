import { useRouter } from 'next/navigation'
import DownTownCondoPurchase from './DownTownCondoPurchase'
import { Plus } from 'lucide-react'

export default function Deal_Oppurtunity({ user }) {

  const router = useRouter()
 const handlenewDeal = () => {
    router.push(`/dashboardinvitedbyagency/invitedbyagency/leads/opportunity-pipeline/${encodeURIComponent(user)}/create-new-deal`);
  }

  return (
    <div className="w-full flex flex-col space-y-4 p-2 md:p-4 border border-bordercolor rounded-lg  shadow-md">
     <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4">
  <p className="text-lg text-textheading font-bold">
    Deals & Opportunity
  </p>

  <div className="w-full md:w-auto mt-2 md:mt-0 flex md:justify-end">
    <button
      onClick={handlenewDeal}
      className="w-full md:w-fit bg-buttonbg text-background px-4 py-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
    >
      <Plus className="w-4 h-4" />
      Create New Deal
    </button>
  </div>
</div>


      <DownTownCondoPurchase />
      <DownTownCondoPurchase />
    </div>
  )
}
