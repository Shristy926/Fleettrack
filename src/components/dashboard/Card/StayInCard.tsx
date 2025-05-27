import { CircleDashed } from 'lucide-react';
import AlertCard from '../AlertCard';

const StayInCard = () => (
  <AlertCard
    title="Stay In Zone"
    value="35 Alerts"
    icon={<CircleDashed className="w-10 h-10 text-white" />}
    bgColor="bg-green-200"
    badgeColor="bg-green-500"
    badgeText="10% vehicles"
  />
);

export default StayInCard;
