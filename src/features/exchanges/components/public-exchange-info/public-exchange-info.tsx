import { ViewIcon } from '@chakra-ui/icons';
import {
  Heading,
  HStack,
  VStack,
  Text,
} from '@chakra-ui/react';

import { Content } from '@/components/content';
import { Link } from '@/components/link';

import { Exchange } from '../../types';

export const PublicExchangeInfo = ({
  exchange,
}: {
  exchange: Exchange;
}) => {
  return (
    <>
      <VStack pt="16" pb="4" spacing="8">
        <Heading size="2xl">{exchange?.position}</Heading>
        <HStack spacing="12">
          <Text>{exchange?.department}</Text>
          <Text>{exchange?.location}</Text>
        </HStack>
        <Link
          href={`/customers/${exchange?.customerId}`}
          variant="outline"
          icon={<ViewIcon />}
        >
          View More Exchanges
        </Link>
      </VStack>
      <Content>{exchange.info}</Content>
    </>
  );
};
