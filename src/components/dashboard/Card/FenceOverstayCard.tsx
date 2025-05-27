import { MapPin } from 'lucide-react';
import AlertCard from '../AlertCard';

const FenceOverstayCard = () => (
  <AlertCard
    title="Fence Overstay"
    value="46 Alerts"
    subText="Max Overstay 22 hrs"
    icon={<MapPin className="w-10 h-10 text-white" />}
    bgColor="bg-indigo-200"
    badgeColor="bg-indigo-500"
    badgeText="16% vehicles"
  />
);

export default FenceOverstayCard;
