import { Snowflake } from 'lucide-react';
import AlertCard from '../AlertCard';

const ACMisuseCard = () => (
  <AlertCard
    title="AC Misuse"
    value="32 Hours"
    subText="Approx Fuel Waste 22 ltr"
    icon={<Snowflake className="w-10 h-10 text-white" />}
    bgColor="bg-cyan-200"
    badgeColor="bg-cyan-500"
    badgeText="10% vehicles"
  />
);

export default ACMisuseCard;
