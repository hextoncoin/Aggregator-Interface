import * as React from 'react';
import { AggregatorContainer } from '~/components/Aggregator/Arb';
import ConnectButton from '~/components/Aggregator/ConnectButton';
import Layout from '~/layout';

export async function getStaticProps() {
	return {
		props: {
			tokenList: {},
			sandwichList: []
		}
	};
}

export default function Aggregator(props) {
	return (
		<Layout title={` Hexton Defi - Meta-dex aggregator `} defaultSEO>
			<ConnectButton />
			<AggregatorContainer {...props} />
		</Layout>
	);
}
