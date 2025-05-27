import { FC } from 'react';
import OverspeedCard from './cards/OverspeedCard';
import FenceOverstayCard from './cards/FenceOverstayCard';
import ACMisuseCard from './cards/ACMisuseCard';
import StayAwayCard from './cards/StayAwayCard';
import StayInCard from './cards/StayInCard';
import TemperatureCard from './cards/TemperatureCard';

const DashboardCard: FC = () => (
  <div className="overflow-x-auto whitespace-nowrap px-4 py-2">
    <div className="flex gap-4">
      <OverspeedCard />
      <FenceOverstayCard />
      <ACMisuseCard />
      <StayAwayCard />
      <StayInCard />
      <TemperatureCard />
    </div>
  </div>
);

export default DashboardCard;
