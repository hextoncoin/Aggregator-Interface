import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react';

export default function FaqWrapper() {
	return (
		<>
			<Text fontWeight={500} color={'#FAFAFA'} fontSize={24}>
				HEXTON Defi BETA
			</Text>
			
			<Text fontSize="1rem" fontWeight="500" display={{ base: 'none', md: 'block', lg: 'block' }}>
			Has several routers that we combine into one for transaction convenience. Join Our{' '}
				<a
					style={{ textDecoration: 'underline' }}
					target={'_blank'}
					rel="noreferrer noopener"
					href="https://t.me/hexachaincoin"
				>
					Hexton Community
				</a>
			</Text>
		</>
	);
}
