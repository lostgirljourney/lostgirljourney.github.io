import { useQuery } from '@tanstack/react-query';
import { SpotifyData } from '@/utils';
import Layout from '@/components/Layout';
import Profile from './Profile';
import AboutMe from './AboutMe';
import Social from './Social';
import Extras from './Extras';
import Experience from './Experience';

const Home = () => {
	const { data, isError } = useQuery<SpotifyData>(
		['now-playing'],
		() => fetch('/api/spotify').then((r) => r.json()),
		{
			refetchInterval: 1000 * 60 * 3,
			refetchOnWindowFocus: true
		}
	);

	return (
		<Layout title="Hey 👋🏻" isHome>
			<Profile
				src="/assets/png/display picture.png"
				isPlaying={data?.isPlaying && !isError ? true : false}
			/>
			<AboutMe>
				<p>
					Passionate about crafting exceptional user experiences, I strive to
					create pixel-perfect interfaces that seamlessly blend design and
					engineering principles.
				</p>
				<p>
					A lifelong learner, always seeking to expand my horizons. Thus,
					continuously exploring my capabilities to build efficient and scalable
					web applications.
				</p>
			</AboutMe>
			<Experience />
			<Social />
			<Extras />
		</Layout>
	);
};

export default Home;
