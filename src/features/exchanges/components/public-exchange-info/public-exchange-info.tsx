import {
  ViewIcon,
  ArrowForwardIcon,
} from '@chakra-ui/icons';
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
        <Heading size="2xl">{exchange?.number}</Heading>
        <HStack spacing="12">
          <Text>{exchange?.locationFrom}</Text>
          <ArrowForwardIcon />
          <Text>{exchange?.locationTo}</Text>
        </HStack>
        <Link
          href={`/customers/${exchange?.customerId}`}
          variant="outline"
          icon={<ViewIcon />}
        >
          View More Milena Exchanges
        </Link>
      </VStack>
      <HStack spacing="12">
        <Text>
          <strong>Customer Id:</strong>
        </Text>
        <Content>{exchange.customerId}</Content>
      </HStack>
    </>
  );
};
