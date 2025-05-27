import { Thermometer } from 'lucide-react';
import AlertCard from '../AlertCard';

const TemperatureCard = () => (
  <AlertCard
    title="Temperature"
    value="35 Alerts"
    subText={`Min Temp. 13 C\nMax Temp. 48 C`}
    icon={<Thermometer className="w-10 h-10 text-white" />}
    bgColor="bg-sky-200"
    badgeColor="bg-sky-500"
    badgeText="10% vehicles"
  />
);

export default TemperatureCard;
