import {
  Center,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Link } from '@/components/link';
import { Seo } from '@/components/seo';

const LandingPage = () => {
  return (
    <>
      <Seo title="Exchanges App" />
      <Center flexDirection="column" h="full">
        <VStack maxW="3xl" spacing="8">
          <Heading size="3xl">Philamila App</Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            maxW="2xl"
            color="muted"
          >
            You send 5$ face value stamp set to a random
            member and you receive another set back!
          </Text>
          <Link href={'/customers/amYXmIyT9mD9GyO6CCr'}>
            Customer exchange list: Milena Exchange List
          </Link>
          <Link
            href={
              '/customers/amYXmIyT9mD9GyO6CCr/exchanges/wS6UeppUQoiXGTzAI6XrM'
            }
          >
            Customer particular exchange: Milena Exchange
            US-01
          </Link>
          <Link href={'/dashboard/exchanges'}>
            My exchanges: /dashboard/exchanges
          </Link>
        </VStack>
      </Center>
    </>
  );
};

export default LandingPage;
