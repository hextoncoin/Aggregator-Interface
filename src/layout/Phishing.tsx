import { Alert, AlertIcon } from '@chakra-ui/react';

const Phishing = () => {
	return (
		<Alert status="warning" justifyContent={'center'} fontWeight="bold" display={['none', 'none', 'flex', 'flex']}>
			<AlertIcon mr="4px" />
			Please make sure you are on Aggaregators.hexton.exchange - check the URL carefully.
		</Alert>
	);
};

export { Phishing };
