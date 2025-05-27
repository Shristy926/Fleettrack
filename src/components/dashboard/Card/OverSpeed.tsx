import { Gauge } from 'lucide-react';
import AlertCard from '../AlertCard';

const OverspeedCard = () => (
  <AlertCard
    title="Overspeed"
    value="22 Alerts"
    subText="Max Speed 103km/h"
    icon={<Gauge className="w-10 h-10 text-white" />}
    bgColor="bg-red-200"
    badgeColor="bg-red-500"
    badgeText="20% vehicles"
  />
);

export default OverspeedCard;
