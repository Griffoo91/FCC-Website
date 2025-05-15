import { ProgramsCard } from './ProgramsCard';
import cross from '../public/assets/prayer.png';
import prayer from '../public/assets/pray1.png';
import dove from '../public/assets/dove.png';
import church from '../public/assets/church1.png';

export const Programs = () => {
	return (
		<div className="min-h-[59vh] flex flex-col items-center justify-center  bg-stone-100 space-y-8 p-5">
			<h1 className="text-xl text-gray-600 text-center font-bold tracking-wide sm:tracking-widest uppercase">
				Weekly Programs Schedule
			</h1>

			<div className="flex space-x-5 md:space-x-8 pb-3 overflow-auto max-w-full">
				<ProgramsCard
					serviceName={'Morning Glory'}
					day="Monday - Friday"
					time={'5am - 7am'}
					icon={prayer}
					style={'bg-stone-300'}
				/>

				<ProgramsCard
					serviceName={'Women\'s Fellowship'}
					day="Wednesday"
					time={'5:30pm - 7:30pm'}
					icon={cross}
					style={'bg-stone-200'}
				/>

				<ProgramsCard
					serviceName={'Men\'s Fellowship'}
					day="Thursday"
					time={'5:30pm - 7:30pm'}
					icon={dove}
					style={'bg-stone-300'}
				/>

				<ProgramsCard
					serviceName={'Main Service'}
					day="Sunday"
					time={'9:00am - 1:30pm'}
					icon={church}
					style={'bg-stone-200'}
				/>
			</div>
		</div>
	);
};
