import { CircleDashed } from 'lucide-react';
import AlertCard from '../AlertCard';

const StayAwayCard = () => (
  <AlertCard
    title="Stay Away from Zone"
    value="25 Alerts"
    icon={<CircleDashed className="w-10 h-10 text-white" />}
    bgColor="bg-yellow-200"
    badgeColor="bg-yellow-500"
    badgeText="10% vehicles"
  />
);

export default StayAwayCard;
